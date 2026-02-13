import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus, Edit, Trash2, Save, X, ChevronLeft, Upload, Loader, Eye, Image as ImageIcon, Video as VideoIcon, Globe } from 'lucide-react'
import { ALL_PRODUCTS, type Product } from '../data/products'
import { getProductDescription, type LocalizedProductDescriptions } from '../data/productDescriptions'
import './Admin.css'

interface ProductDraft extends Omit<Product, 'id'> {
    id?: number
    descriptions: LocalizedProductDescriptions
}

const LANGUAGES = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
    { code: 'ar', label: 'Arabic', flag: '🇸🇦' },
    { code: 'zh', label: 'Chinese', flag: '🇨🇳' },
    { code: 'ja', label: 'Japanese', flag: '🇯🇵' },
    { code: 'es', label: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', label: 'French', flag: '🇫🇷' },
    { code: 'ko', label: 'Korean', flag: '🇰🇷' },
] as const

type LanguageCode = typeof LANGUAGES[number]['code']

const AdminProductManager: React.FC = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState<Product[]>([])
    const [descriptionsMap, setDescriptionsMap] = useState<Record<string, LocalizedProductDescriptions>>({})

    const [isEditing, setIsEditing] = useState(false)
    const [currentProduct, setCurrentProduct] = useState<ProductDraft | null>(null)
    const [activeTab, setActiveTab] = useState<LanguageCode>('en')

    const [tempImage, setTempImage] = useState<{ file: File, preview: string } | null>(null)
    const [tempVideo, setTempVideo] = useState<{ file: File, preview: string } | null>(null)

    const [isLoading, setIsLoading] = useState(false)
    const [isDeploying, setIsDeploying] = useState(false)
    const [isMagicFilling, setIsMagicFilling] = useState(false)
    const [magicFillText, setMagicFillText] = useState('')
    const [showMagicFillModal, setShowMagicFillModal] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    // Initial Load
    useEffect(() => {
        // Load products from static data
        setProducts(ALL_PRODUCTS)

        // Load descriptions from the JSON file via the accessor
        // We iterate over products and fetch their descriptions
        const descMap: Record<string, LocalizedProductDescriptions> = {}
        ALL_PRODUCTS.forEach(p => {
            const desc = getProductDescription(p.slug)
            if (desc) {
                descMap[p.slug] = desc
            }
        })
        setDescriptionsMap(descMap)
    }, [])

    // CRUD Operations
    const handleEdit = (product: Product) => {
        const desc = descriptionsMap[product.slug] || createEmptyDescriptions()

        setCurrentProduct({
            ...product,
            descriptions: desc
        })
        setIsEditing(true)
        setTempImage(null)
        setTempVideo(null)
        setActiveTab('en')
        window.scrollTo(0, 0)
    }

    const handleCreate = () => {
        setCurrentProduct({
            slug: '',
            name: '',
            price: '',
            categories: [],
            image: '',
            video: '',
            description: '',
            details: [],
            variants: [],
            descriptions: createEmptyDescriptions()
        })
        setIsEditing(true)
        setTempImage(null)
        setTempVideo(null)
        setActiveTab('en')
    }

    const createEmptyDescriptions = (): LocalizedProductDescriptions => {
        const empty: any = {}
        LANGUAGES.forEach(lang => {
            empty[lang.code] = {
                name: '',
                caption: '',
                shortCaption: '',
                description: '',
                metaDescription: '',
                imageAlt: ''
            }
        })
        return empty
    }

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            const updatedProducts = products.filter(p => p.id !== id)
            setProducts(updatedProducts)
            // Note: We don't delete from descriptionsMap solely to keep it simple, 
            // but in a real app we would.
            await saveToLocalStorage(updatedProducts, descriptionsMap)
        }
    }

    const handleSave = async () => {
        if (!currentProduct) return

        setIsLoading(true)
        try {
            let updatedProducts = [...products]
            let updatedDescriptions = { ...descriptionsMap }

            const newProduct: Product = {
                id: currentProduct.id || Date.now(),
                slug: currentProduct.slug,
                name: currentProduct.name, // Main name (usually English)
                price: currentProduct.price,
                categories: currentProduct.categories,
                image: currentProduct.image,
                video: currentProduct.video,
                description: currentProduct.description, // Fallback/Main description
                details: currentProduct.details,
                variants: currentProduct.variants
            }

            // Handle Image Upload logic locally (prepare for deploy)
            if (tempImage) {
                const filename = `prod-${currentProduct.slug}-${Date.now()}.jpg`
                newProduct.image = `/images/products/${filename}`
            }

            if (tempVideo) {
                const filename = `vid-${currentProduct.slug}-${Date.now()}.mp4`
                newProduct.video = `/images/products/${filename}`
            }

            if (currentProduct.id) {
                // Update
                updatedProducts = updatedProducts.map(p => p.id === currentProduct.id ? newProduct : p)
            } else {
                // Create
                updatedProducts.push(newProduct)
            }

            // Update descriptions map
            updatedDescriptions[newProduct.slug] = currentProduct.descriptions

            setProducts(updatedProducts)
            setDescriptionsMap(updatedDescriptions)
            await saveToLocalStorage(updatedProducts, updatedDescriptions)

            setIsEditing(false)
            setCurrentProduct(null)
        } catch (error) {
            console.error('Failed to save', error)
            alert('Failed to save product')
        } finally {
            setIsLoading(false)
        }
    }

    const saveToLocalStorage = async (prods: Product[], descs: Record<string, LocalizedProductDescriptions>) => {
        localStorage.setItem('admin_products_draft', JSON.stringify(prods))
        localStorage.setItem('admin_descriptions_draft', JSON.stringify(descs))
    }

    const handleDeploy = async () => {
        // This function is kept for logic reference but executeDeploy is the main one used
        // due to the need for pending assets handling.
    }

    // Magic Fill AI
    const handleMagicFill = async () => {
        if (!magicFillText) return
        setIsMagicFilling(true)

        try {
            const response = await fetch('/api/admin/generate-product-full', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rawText: magicFillText })
            })

            const data = await response.json()

            if (currentProduct) {
                const mergedDescriptions = { ...currentProduct.descriptions }

                // Merge AI data into current product
                if (data.descriptions) {
                    Object.keys(data.descriptions).forEach((lang) => {
                        if (LANGUAGES.some(l => l.code === lang)) {
                            // @ts-ignore
                            mergedDescriptions[lang] = { ...mergedDescriptions[lang], ...data.descriptions[lang] }
                        }
                    })
                }

                setCurrentProduct({
                    ...currentProduct,
                    name: data.name || currentProduct.name,
                    slug: data.slug || currentProduct.slug,
                    price: data.price || currentProduct.price,
                    categories: data.categories || currentProduct.categories,
                    details: data.details || currentProduct.details,
                    // Descriptions are handled in the localized object
                    descriptions: mergedDescriptions
                })

                // Also update the fallback/main description text (English)
                if (data.descriptions?.en?.description) {
                    setCurrentProduct(prev => prev ? ({ ...prev, description: data.descriptions.en.description }) : null)
                }
            }

            setShowMagicFillModal(false)
            setMagicFillText('')
        } catch (error) {
            console.error('Magic fill failed', error)
            alert('Magic Fill failed. Context: ' + JSON.stringify(error))
        } finally {
            setIsMagicFilling(false)
        }
    }

    // Handle File Inputs
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.onloadend = () => {
                setTempImage({ file, preview: reader.result as string })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.onloadend = () => {
                setTempVideo({ file, preview: reader.result as string })
            }
            reader.readAsDataURL(file)
        }
    }

    // Pending Assets Queue (Concept)
    const [pendingAssets, setPendingAssets] = useState<any[]>([])

    const saveAndQueueAssets = async () => {
        if (!currentProduct) return

        // 1. Queue Assets
        const newAssets = []
        if (tempImage) {
            newAssets.push({
                filename: currentProduct.image.split('/').pop(), // Use the path we generated in handleSave logic
                content: tempImage.preview // Base64
            })
        }
        if (tempVideo) {
            newAssets.push({
                filename: currentProduct.video?.split('/').pop(),
                content: tempVideo.preview
            })
        }

        // Update pendingAssets state
        if (newAssets.length > 0) {
            setPendingAssets([...pendingAssets, ...newAssets])
        }

        // 2. Call Save Logic
        await handleSave()
    }

    const executeDeploy = async () => {
        if (!window.confirm(`Deploying ${products.length} products and ${pendingAssets.length} new assets to GitHub. This may take a minute. Continue?`)) return

        setIsDeploying(true)
        try {
            const response = await fetch('/api/admin/deploy-products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    products: products,
                    descriptions: descriptionsMap,
                    images: pendingAssets.filter(a => !a.filename.endsWith('.mp4')),
                    video: pendingAssets.find(a => a.filename.endsWith('.mp4')) // API expects single 'video' obj for now, can loop if needed
                })
            })

            if (!response.ok) throw new Error('Deploy failed')

            alert('Deployed successfully!')
            setPendingAssets([]) // Clear queue
        } catch (error) {
            alert('Deploy failed: ' + error)
        } finally {
            setIsDeploying(false)
        }
    }

    // Filter products
    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.slug.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (isEditing && currentProduct) {
        return (
            <div className="admin-container">
                <div className="admin-header">
                    <button onClick={() => setIsEditing(false)} className="back-btn">
                        <ChevronLeft size={20} /> Back to Products
                    </button>
                    <div className="admin-actions">
                        <button onClick={() => setShowMagicFillModal(true)} className="magic-btn">
                            ✨ Magic Fill
                        </button>
                        <button onClick={saveAndQueueAssets} disabled={isLoading} className="save-btn">
                            {isLoading ? <Loader className="spin" size={18} /> : <Save size={18} />}
                            Save Draft
                        </button>
                    </div>
                </div>

                <div className="edit-form-container">
                    {/* Main Info Card */}
                    <div className="admin-card">
                        <h3>Core Information</h3>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Slug (URL Identifier)</label>
                                <input
                                    type="text"
                                    value={currentProduct.slug}
                                    onChange={e => setCurrentProduct({ ...currentProduct, slug: e.target.value })}
                                    placeholder="modern-industrial-chair"
                                />
                            </div>
                            <div className="form-group">
                                <label>Default Price (IDR)</label>
                                <input
                                    type="text"
                                    value={currentProduct.price}
                                    onChange={e => setCurrentProduct({ ...currentProduct, price: e.target.value })}
                                    placeholder="IDR 2.500.000"
                                />
                            </div>
                            <div className="form-group full-width">
                                <label>Categories (comma separated)</label>
                                <input
                                    type="text"
                                    value={currentProduct.categories.join(', ')}
                                    onChange={e => setCurrentProduct({ ...currentProduct, categories: e.target.value.split(',').map(s => s.trim()) })}
                                />
                            </div>

                            {/* Image Upload */}
                            <div className="form-group">
                                <label>Product Image</label>
                                <div className="media-upload-box">
                                    {(tempImage?.preview || currentProduct.image) ? (
                                        <div className="media-preview">
                                            <img src={tempImage?.preview || currentProduct.image} alt="Preview" />
                                            <button onClick={() => { setTempImage(null); setCurrentProduct({ ...currentProduct, image: '' }) }} className="remove-media">
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ) : (
                                        <label className="upload-placeholder">
                                            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
                                            <ImageIcon size={24} />
                                            <span>Upload Image</span>
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* Video Upload */}
                            <div className="form-group">
                                <label>Product Video (Optional)</label>
                                <div className="media-upload-box">
                                    {(tempVideo?.preview || currentProduct.video) ? (
                                        <div className="media-preview">
                                            <video src={tempVideo?.preview || currentProduct.video} controls style={{ height: '100%', width: '100%' }} />
                                            <button onClick={() => { setTempVideo(null); setCurrentProduct({ ...currentProduct, video: '' }) }} className="remove-media">
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ) : (
                                        <label className="upload-placeholder">
                                            <input type="file" accept="video/*" onChange={handleVideoChange} hidden />
                                            <VideoIcon size={24} />
                                            <span>Upload Video</span>
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Details & Variants */}
                    <div className="admin-card">
                        <h3>Details & Variants</h3>
                        <div className="form-group">
                            <label>Technical Details (Bullet Points)</label>
                            {(currentProduct.details || []).map((detail, idx) => (
                                <div key={idx} className="detail-item-row">
                                    <input
                                        type="text"
                                        value={detail}
                                        onChange={(e) => {
                                            const newDetails = [...(currentProduct.details || [])]
                                            newDetails[idx] = e.target.value
                                            setCurrentProduct({ ...currentProduct, details: newDetails })
                                        }}
                                    />
                                    <button onClick={() => {
                                        const newDetails = (currentProduct.details || []).filter((_, i) => i !== idx)
                                        setCurrentProduct({ ...currentProduct, details: newDetails })
                                    }} className="icon-btn danger">
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                            <button onClick={() => setCurrentProduct({ ...currentProduct, details: [...(currentProduct.details || []), ''] })} className="add-btn-small">
                                + Add Detail
                            </button>
                        </div>

                        <div className="form-group">
                            <label>Variants</label>
                            {(currentProduct.variants || []).map((variant, idx) => (
                                <div key={idx} className="variant-row">
                                    <input
                                        placeholder="Name (e.g., Small)"
                                        value={variant.name}
                                        onChange={(e) => {
                                            const newVars = [...(currentProduct.variants || [])]
                                            newVars[idx].name = e.target.value
                                            setCurrentProduct({ ...currentProduct, variants: newVars })
                                        }}
                                    />
                                    <input
                                        placeholder="Price"
                                        value={variant.price}
                                        onChange={(e) => {
                                            const newVars = [...(currentProduct.variants || [])]
                                            newVars[idx].price = e.target.value
                                            setCurrentProduct({ ...currentProduct, variants: newVars })
                                        }}
                                    />
                                    <input
                                        placeholder="Dimensions"
                                        value={variant.dimensions || ''}
                                        onChange={(e) => {
                                            const newVars = [...(currentProduct.variants || [])]
                                            newVars[idx].dimensions = e.target.value
                                            setCurrentProduct({ ...currentProduct, variants: newVars })
                                        }}
                                    />
                                    <button onClick={() => {
                                        const newVars = (currentProduct.variants || []).filter((_, i) => i !== idx)
                                        setCurrentProduct({ ...currentProduct, variants: newVars })
                                    }} className="icon-btn danger">
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                            <button onClick={() => setCurrentProduct({ ...currentProduct, variants: [...(currentProduct.variants || []), { name: '', price: '' }] })} className="add-btn-small">
                                + Add Variant
                            </button>
                        </div>
                    </div>

                    {/* Localized Content Tabs */}
                    <div className="admin-card full-width">
                        <div className="language-tabs">
                            {LANGUAGES.map(lang => (
                                <button
                                    key={lang.code}
                                    className={`lang-tab ${activeTab === lang.code ? 'active' : ''}`}
                                    onClick={() => setActiveTab(lang.code)}
                                >
                                    {lang.flag} {lang.label}
                                </button>
                            ))}
                        </div>

                        <div className="lang-content-area">
                            <div className="form-group">
                                <label>Product Name ({activeTab.toUpperCase()})</label>
                                <input
                                    value={currentProduct.descriptions[activeTab]?.name || ''}
                                    onChange={e => {
                                        const newDescs = { ...currentProduct.descriptions }
                                        newDescs[activeTab] = { ...newDescs[activeTab], name: e.target.value } as any
                                        setCurrentProduct({ ...currentProduct, descriptions: newDescs })
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Short Caption (Card View)</label>
                                <input
                                    value={currentProduct.descriptions[activeTab]?.shortCaption || ''}
                                    onChange={e => {
                                        const newDescs = { ...currentProduct.descriptions }
                                        newDescs[activeTab] = { ...newDescs[activeTab], shortCaption: e.target.value } as any
                                        setCurrentProduct({ ...currentProduct, descriptions: newDescs })
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Description (Full Text)</label>
                                <textarea
                                    rows={6}
                                    value={currentProduct.descriptions[activeTab]?.description || ''}
                                    onChange={e => {
                                        const newDescs = { ...currentProduct.descriptions }
                                        newDescs[activeTab] = { ...newDescs[activeTab], description: e.target.value } as any
                                        setCurrentProduct({ ...currentProduct, descriptions: newDescs })
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Image Alt Text (SEO)</label>
                                <input
                                    value={currentProduct.descriptions[activeTab]?.imageAlt || ''}
                                    onChange={e => {
                                        const newDescs = { ...currentProduct.descriptions }
                                        newDescs[activeTab] = { ...newDescs[activeTab], imageAlt: e.target.value } as any
                                        setCurrentProduct({ ...currentProduct, descriptions: newDescs })
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Magic Fill Modal */}
                {showMagicFillModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h3>Magic Fill ✨</h3>
                            <p>Paste raw product text or details here. AI will extract data, generate descriptions, and translate to ALL 8 languages automatically.</p>
                            <textarea
                                className="magic-input"
                                value={magicFillText}
                                onChange={(e) => setMagicFillText(e.target.value)}
                                placeholder="Paste product details..."
                                rows={10}
                            />
                            <div className="modal-actions">
                                <button onClick={() => setShowMagicFillModal(false)} className="cancel-btn">Cancel</button>
                                <button onClick={handleMagicFill} disabled={isMagicFilling} className="generate-btn">
                                    {isMagicFilling ? 'Generating...' : 'Generate Everything'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    // Dashboard View
    return (
        <div className="admin-container">
            <div className="admin-header">
                <h1>Product Manager</h1>
                <div className="admin-actions">
                    <button onClick={executeDeploy} disabled={isDeploying} className="deploy-btn">
                        {isDeploying ? <Loader className="spin" size={18} /> : <Upload size={18} />}
                        {isDeploying ? 'Deploying...' : `Deploy Changes ${pendingAssets.length > 0 ? `(${pendingAssets.length} assets pending)` : ''}`}
                    </button>
                    <button onClick={handleCreate} className="create-btn">
                        <Plus size={18} /> New Product
                    </button>
                </div>
            </div>

            <div className="admin-content">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="table-responsive">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name (Slug)</th>
                                <th>Price</th>
                                <th>Categories</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="product-thumb"
                                            onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/50')}
                                        />
                                    </td>
                                    <td>
                                        <div className="product-name">{product.name}</div>
                                        <div className="product-slug">{product.slug}</div>
                                    </td>
                                    <td>{product.price}</td>
                                    <td>
                                        <div className="tags">
                                            {product.categories.map((cat, i) => (
                                                <span key={i} className="tag">{cat}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <Link to={`/product/${product.slug}`} target="_blank" className="icon-btn" title="View Live">
                                                <Eye size={18} />
                                            </Link>
                                            <button onClick={() => handleEdit(product)} className="icon-btn edit">
                                                <Edit size={18} />
                                            </button>
                                            <button onClick={() => handleDelete(product.id)} className="icon-btn delete">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminProductManager
