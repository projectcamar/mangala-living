import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import {
    Plus, Edit, Trash2, Search, ArrowLeft, Save,
    Package, AlertCircle, Loader2, Check, X,
    Image as ImageIcon, Video, Layers, Sparkles, Eye, Globe
} from 'lucide-react'
import { ALL_PRODUCTS, type Product, type ProductVariant } from '../data/products'
import { PRODUCT_DESCRIPTIONS, type MultiLanguageDescription } from '../data/productDescriptions'
import { convertIDRToCurrency } from '../utils/currencyConverter'
import './Admin.css'

// Extended Product interface to include full translation data
interface ExtendedProduct extends Product {
    translations: MultiLanguageDescription
}

type LanguageCode = 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko'

const LANGUAGES: { code: LanguageCode, label: string, flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
    { code: 'ar', label: 'Arabic', flag: '🇸🇦' },
    { code: 'zh', label: 'Chinese', flag: '🇨🇳' },
    { code: 'ja', label: 'Japanese', flag: '🇯🇵' },
    { code: 'es', label: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', label: 'French', flag: '🇫🇷' },
    { code: 'ko', label: 'Korean', flag: '🇰🇷' }
]

const emptyLangContent = {
    name: '',
    caption: '',
    shortCaption: '',
    description: '',
    metaDescription: '',
    imageAlt: '',
    dimensions: '',
    details: []
}

const createEmptyTranslations = (): MultiLanguageDescription => ({
    en: { ...emptyLangContent },
    id: { ...emptyLangContent },
    ar: { ...emptyLangContent },
    zh: { ...emptyLangContent },
    ja: { ...emptyLangContent },
    es: { ...emptyLangContent },
    fr: { ...emptyLangContent },
    ko: { ...emptyLangContent }
})

const AdminProductManager: React.FC = () => {
    const [view, setView] = useState<'list' | 'editor'>('list')
    const [products, setProducts] = useState<ExtendedProduct[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    // Editor state
    const [editingProduct, setEditingProduct] = useState<ExtendedProduct | null>(null)
    const [currentLang, setCurrentLang] = useState<LanguageCode>('en')
    const [tempImage, setTempImage] = useState<{ path: string, content: string } | null>(null)
    const [tempVideo, setTempVideo] = useState<{ path: string, content: string } | null>(null)
    const [convertedPrice, setConvertedPrice] = useState<string>('')

    // Magic Fill AI state
    const [showAIModal, setShowAIModal] = useState(false)
    const [isGenerating, setIsGenerating] = useState(false)
    const [magicFillText, setMagicFillText] = useState('')
    const [selectedModel, setSelectedModel] = useState('llama-3.3-70b-versatile')

    // Pagination state
    const [itemsPerPage, setItemsPerPage] = useState<number | 'all'>(10)
    const [currentPage, setCurrentPage] = useState(1)

    const navigate = useNavigate()

    useEffect(() => {
        // Initialize products with descriptions
        const baseProducts = [...ALL_PRODUCTS]

        // Merge with PRODUCT_DESCRIPTIONS
        const mergedProducts: ExtendedProduct[] = baseProducts.map(p => {
            const desc = PRODUCT_DESCRIPTIONS[p.slug]
            // Ensure all languages exist (fill missing with empty/default)
            const fullDesc = desc ? { ...createEmptyTranslations(), ...desc } : createEmptyTranslations()

            // If missing specific language keys, fill them
            LANGUAGES.forEach(lang => {
                if (!fullDesc[lang.code]) {
                    // @ts-ignore
                    fullDesc[lang.code] = { ...emptyLangContent }
                    // Try to fallback name/description from base product if EN/ID
                    if (lang.code === 'en' || lang.code === 'id') {
                        // @ts-ignore
                        fullDesc[lang.code].name = p.name
                        // @ts-ignore
                        fullDesc[lang.code].description = p.description || ''
                    }
                }
            })

            return {
                ...p,
                translations: fullDesc
            }
        })

        const savedDrafts = localStorage.getItem('mangala_product_drafts')
        if (savedDrafts) {
            try {
                const parsedDrafts = JSON.parse(savedDrafts) as ExtendedProduct[]
                // Merge strategies could be complex, simplicity for now: use drafts if ID matches
                parsedDrafts.forEach(draft => {
                    const index = mergedProducts.findIndex(p => p.id === draft.id)
                    if (index !== -1) {
                        mergedProducts[index] = draft
                    } else {
                        mergedProducts.push(draft)
                    }
                })
            } catch (e) {
                console.error('Error loading product drafts:', e)
            }
        }

        setProducts(mergedProducts)
        setIsLoading(false)
    }, [])

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('mangala_product_drafts', JSON.stringify(products))
        }
    }, [products, isLoading])

    // Update converted price preview when price or language changes
    useEffect(() => {
        const updatePrice = async () => {
            if (!editingProduct || !editingProduct.price) {
                setConvertedPrice('')
                return
            }

            // IDR is base
            // Map LanguageCode to Currency
            const langCurrencyMap: Record<LanguageCode, 'USD' | 'SAR' | 'CNY' | 'JPY' | 'EUR' | 'KRW' | 'IDR'> = {
                en: 'USD',
                id: 'IDR',
                ar: 'SAR',
                zh: 'CNY',
                ja: 'JPY',
                es: 'EUR',
                fr: 'EUR',
                ko: 'KRW'
            }

            const target = langCurrencyMap[currentLang]
            if (target === 'IDR') {
                setConvertedPrice(editingProduct.price) // Already IDR formatted ideally
                return
            }

            try {
                // Assuming price string format "Rp...", extract digits
                const numericPrice = editingProduct.price.replace(/[^0-9]/g, '')
                if (!numericPrice) return

                const converted = await convertIDRToCurrency(numericPrice, target)
                setConvertedPrice(converted)
            } catch (e) {
                console.error('Price conversion failed', e)
                setConvertedPrice('Error')
            }
        }
        updatePrice()
    }, [editingProduct?.price, currentLang])

    const handleEdit = (product: ExtendedProduct) => {
        setEditingProduct(JSON.parse(JSON.stringify(product))) // Deep copy
        setTempImage(null)
        setTempVideo(null)
        setView('editor')
        setCurrentLang('en') // Reset to English
    }

    const handleNew = () => {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1
        setEditingProduct({
            id: newId,
            slug: '',
            name: '',
            categories: ['Furniture'],
            price: '',
            image: '',
            description: '', // Legacy field
            details: [], // Legacy field
            variants: [],
            translations: createEmptyTranslations()
        })
        setTempImage(null)
        setTempVideo(null)
        setView('editor')
        setCurrentLang('en')
    }

    const handleAssetUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
        const file = e.target.files?.[0]
        if (!file) return

        const maxSize = type === 'image' ? 5 * 1024 * 1024 : 50 * 1024 * 1024 // 5MB image, 50MB video
        if (file.size > maxSize) {
            setMessage({ type: 'error', text: `${type === 'image' ? 'Image' : 'Video'} size too large` })
            return
        }

        const reader = new FileReader()
        reader.onloadend = () => {
            const base64 = reader.result as string
            const fileName = file.name.replace(/\s+/g, '-').toLowerCase()
            const path = `/images/products/${fileName}`

            if (type === 'image') {
                setEditingProduct(p => p ? { ...p, image: path } : null)
                setTempImage({ path: `public${path}`, content: base64 })
            } else {
                setEditingProduct(p => p ? { ...p, video: path } : null)
                setTempVideo({ path: `public${path}`, content: base64 })
            }
            setMessage({ type: 'success', text: `${type === 'image' ? 'Image' : 'Video'} prepared. Will be uploaded on Deploy.` })
        }
        reader.readAsDataURL(file)
    }

    const handleSaveProduct = () => {
        if (!editingProduct || !editingProduct.slug) {
            setMessage({ type: 'error', text: 'Slug is required' })
            return
        }
        // Sync root name/desc with EN translation for list view consistency
        const syncedProduct = {
            ...editingProduct,
            name: editingProduct.translations.en.name || editingProduct.name,
            description: editingProduct.translations.en.description || editingProduct.description
        }

        const exists = products.find(p => p.id === syncedProduct.id)
        let updatedProducts: ExtendedProduct[]
        if (exists) {
            updatedProducts = products.map(p => p.id === syncedProduct.id ? syncedProduct : p)
        } else {
            updatedProducts = [...products, syncedProduct]
        }

        setProducts(updatedProducts)
        setView('list')
        setMessage({ type: 'success', text: 'Product saved locally. Click "Deploy Changes" to make it live.' })
    }

    const handleDeploy = async () => {
        setIsSaving(true)
        setMessage(null)

        try {
            setMessage({ type: 'success', text: 'Deploying changes to GitHub...' })

            const imagesToUpload = [
                ...(tempImage ? [tempImage] : []),
                ...(tempVideo ? [tempVideo] : [])
            ]

            // Separate Data
            // 1. Products List (Slim)
            const productsList = products.map(({ translations, ...rest }) => rest)

            // 2. Descriptions Map (Full)
            const descriptionsMap: Record<string, MultiLanguageDescription> = {}
            products.forEach(p => {
                descriptionsMap[p.slug] = p.translations
            })

            const deployResponse = await fetch('/api/admin/deploy-products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    products: productsList,
                    productDescriptions: descriptionsMap,
                    assets: imagesToUpload,
                    commitMessage: `Update products via admin (${new Date().toISOString().split('T')[0]})`
                })
            })

            const deployResult = await deployResponse.json()

            if (deployResponse.ok && deployResult.deployed) {
                localStorage.removeItem('mangala_product_drafts')
                setTempImage(null)
                setTempVideo(null)
                setMessage({
                    type: 'success',
                    text: '✅ Changes deployed! Vercel is rebuilding your site. Refresh in 2 mins.'
                })
            } else if (deployResponse.ok && !deployResult.deployed) {
                setMessage({
                    type: 'success',
                    text: 'No changes detected to deploy.'
                })
            } else {
                throw new Error(deployResult.error || deployResult.details || 'Auto-deploy failed')
            }
        } catch (error) {
            console.error('Deploy error:', error)
            setMessage({ type: 'error', text: `Auto-deploy failed: ${error instanceof Error ? error.message : 'Unknown error'}` })
        } finally {
            setIsSaving(false)
        }
    }

    const handleMagicFill = async () => {
        if (!magicFillText.trim()) {
            setMessage({ type: 'error', text: 'Please enter raw text.' })
            return
        }

        setIsGenerating(true)
        setMessage(null)

        try {
            const response = await fetch('/api/admin/generate-product-full', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    rawText: magicFillText,
                    model: selectedModel
                })
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || 'Magic Fill failed')
            }

            // Result structure: { slug, price, categories, translations: { en: ..., id: ... } }

            setEditingProduct(p => {
                if (!p) return null
                const newP = { ...p }
                if (result.slug) newP.slug = result.slug
                if (result.price) newP.price = result.price
                if (result.categories) newP.categories = result.categories

                // Merge translations
                if (result.translations) {
                    // @ts-ignore
                    Object.keys(result.translations).forEach(lang => {
                        // @ts-ignore
                        if (newP.translations[lang]) {
                            // @ts-ignore
                            newP.translations[lang] = { ...newP.translations[lang], ...result.translations[lang] }
                        }
                    })
                }

                // Update root name if EN updated
                if (newP.translations.en.name) newP.name = newP.translations.en.name

                return newP
            })

            setShowAIModal(false)
            setMagicFillText('')
            setMessage({ type: 'success', text: '✨ Magic Fill complete! Check all language tabs.' })

        } catch (error) {
            console.error('Magic Fill error:', error)
            setMessage({ type: 'error', text: `Magic Fill failed: ${error instanceof Error ? error.message : 'Unknown error'}` })
        } finally {
            setIsGenerating(false)
        }
    }

    const deleteProduct = (id: number) => {
        if (window.confirm('Delete this product? (Permanent after Sync)')) {
            setProducts(products.filter(p => p.id !== id))
        }
    }

    // --- Detail & Variant Helpers ---

    // Update translation field
    const updateTrans = (field: keyof typeof emptyLangContent, value: any) => {
        if (!editingProduct) return
        setEditingProduct({
            ...editingProduct,
            translations: {
                ...editingProduct.translations,
                [currentLang]: {
                    ...(editingProduct.translations[currentLang] || {}),
                    [field]: value
                }
            }
        })
    }

    // Details Helper (Language Specific)
    const addDetail = () => {
        if (!editingProduct) return
        const currentDetails = editingProduct.translations[currentLang]?.details || []
        updateTrans('details', [...currentDetails, ''])
    }

    const updateDetail = (index: number, value: string) => {
        if (!editingProduct) return
        const newDetails = [...(editingProduct.translations[currentLang]?.details || [])]
        newDetails[index] = value
        updateTrans('details', newDetails)
    }

    const removeDetail = (index: number) => {
        if (!editingProduct) return
        const newDetails = (editingProduct.translations[currentLang]?.details || []).filter((_, i) => i !== index)
        updateTrans('details', newDetails)
    }

    // Root Variant Helpers (Shared across all languages typically, as price/dimensions are usually numbers/universal, but dimensions CAN be localized. For now, assuming variants are universal or English named)
    // To support translated variant names, we'd need structured variants in translations. 
    // Current schema: Product.variants is array of { name, price, dimensions }.
    // Let's keep variants universal for now as per `products.ts` schema.

    const addVariant = () => {
        if (!editingProduct) return
        const newVariant: ProductVariant = { name: '', price: editingProduct.price, dimensions: '' }
        setEditingProduct({
            ...editingProduct,
            variants: [...(editingProduct.variants || []), newVariant]
        })
    }

    const updateVariant = (index: number, field: keyof ProductVariant, value: string) => {
        if (!editingProduct || !editingProduct.variants) return
        const updatedVariants = [...editingProduct.variants]
        updatedVariants[index] = { ...updatedVariants[index], [field]: value }
        setEditingProduct({ ...editingProduct, variants: updatedVariants })
    }

    const removeVariant = (index: number) => {
        if (!editingProduct || !editingProduct.variants) return
        const updatedVariants = editingProduct.variants.filter((_, i) => i !== index)
        setEditingProduct({ ...editingProduct, variants: updatedVariants })
    }

    // --- Filtering ---
    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.slug.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const sortedProducts = [...filteredProducts].reverse()
    const totalItems = sortedProducts.length
    const totalPages = itemsPerPage === 'all' ? 1 : Math.ceil(totalItems / itemsPerPage)
    const indexOfLastItem = currentPage * (itemsPerPage === 'all' ? totalItems : itemsPerPage)
    const indexOfFirstItem = indexOfLastItem - (itemsPerPage === 'all' ? totalItems : itemsPerPage)
    const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem)

    useEffect(() => { setCurrentPage(1) }, [searchTerm, itemsPerPage])


    if (isLoading) {
        return (
            <div className="admin-loading-screen-wrap">
                <div className="loader"></div>
                <p>Loading Products...</p>
                <style>{`
                    .admin-loading-screen-wrap {
                        height: 100vh; display: flex; flex-direction: column;
                        align-items: center; justify-content: center;
                        background: #f8f9fa; color: #8B7355;
                    }
                    .loader {
                        border: 4px solid #f3f3f3; border-top: 4px solid #8B7355;
                        border-radius: 50%; width: 40px; height: 40px;
                        animation: spin 1s linear infinite; margin-bottom: 20px;
                    }
                    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                `}</style>
            </div>
        )
    }

    return (
        <div className="admin-dashboard admin-blog-manager">
            <Helmet>
                <title>{view === 'list' ? 'Product Manager' : 'Edit Product'} | Mangala Admin</title>
            </Helmet>

            <header className="admin-header">
                <div className="admin-header-title">
                    <button onClick={() => view === 'list' ? navigate('/admin/dashboard') : setView('list')} className="back-link">
                        <ArrowLeft size={18} />
                    </button>
                    <h1>{view === 'list' ? 'PRODUCT MANAGER' : 'EDIT PRODUCT'}</h1>
                </div>

                <div className="admin-user-nav">
                    {view === 'list' ? (
                        <button onClick={handleDeploy} className="save-btn" disabled={isSaving}>
                            {isSaving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                            <span>{isSaving ? 'Deploying...' : 'Deploy Changes'}</span>
                        </button>
                    ) : (
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {editingProduct?.slug && (
                                <a
                                    href={`/product/${editingProduct.slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="preview-btn"
                                    style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '10px 16px', borderRadius: '8px', background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white', textDecoration: 'none' }}
                                >
                                    <Eye size={16} /> Live View
                                </a>
                            )}
                            <button onClick={handleSaveProduct} className="save-btn">
                                <Check size={16} />
                                <span>Done Editing</span>
                            </button>
                        </div>
                    )}
                </div>
            </header>

            <main className="admin-main">
                {message && (
                    <div className={`admin-msg ${message.type}`}>
                        {message.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
                        <span>{message.text}</span>
                        <X size={14} className="close-msg" onClick={() => setMessage(null)} />
                    </div>
                )}

                {view === 'list' ? (
                    <>
                        <div className="manager-toolbar">
                            <div className="search-box">
                                <Search size={18} />
                                <input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            </div>
                            <button className="create-post-btn" onClick={handleNew}>
                                <Plus size={18} />
                                <span style={{ marginLeft: '5px' }}>New Product</span>
                            </button>
                        </div>

                        <div className="posts-table-card card">
                            <table className="posts-table">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th>Media</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map(product => (
                                        <tr key={product.id}>
                                            <td>
                                                <div className="post-title-cell">
                                                    <span className="post-title-text">{product?.name}</span>
                                                    <span className="post-slug-text">{product?.slug}</span>
                                                </div>
                                            </td>
                                            <td>{product?.price}</td>
                                            <td>
                                                {product?.categories?.map(cat => (
                                                    <span key={cat} className="cat-badge" style={{ marginRight: '4px' }}>{cat}</span>
                                                ))}
                                            </td>
                                            <td>
                                                <div style={{ display: 'flex', gap: '5px' }}>
                                                    {product?.image && <ImageIcon size={16} color="#8B7355" />}
                                                    {product?.video && <Video size={16} color="#8B7355" />}
                                                </div>
                                            </td>
                                            <td className="actions-cell">
                                                <button className="action-btn edit" onClick={() => handleEdit(product)} title="Edit"> <Edit size={16} /> </button>
                                                <button className="action-btn delete" onClick={() => deleteProduct(product.id)} title="Delete"> <Trash2 size={16} /> </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Pagination Controls ... (Simplified for brevity, assuming existing users can handle it) */}
                            <div className="pagination-wrapper">
                                <div className="pagination-info">
                                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalItems)} of {totalItems} entries
                                </div>
                                <div className="pagination-controls">
                                    <div className="items-per-page">
                                        <span>Show:</span>
                                        {[10, 20, 50, 'all'].map(size => (
                                            <button
                                                key={size}
                                                className={`size-btn ${itemsPerPage === size ? 'active' : ''}`}
                                                onClick={() => setItemsPerPage(size as any)}
                                            >
                                                {size === 'all' ? 'All' : size}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="page-btns">
                                        <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="nav-btn">Prev</button>
                                        <span className="page-num">Page {currentPage} of {totalPages}</span>
                                        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="nav-btn">Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="post-editor-container">
                        <div className="editor-header-actions">
                            <button className="ai-generate-btn" onClick={() => setShowAIModal(true)} disabled={isGenerating}>
                                <Sparkles size={18} />
                                <span>{isGenerating ? 'Processing...' : 'Magic Fill AI (Multi-Lang)'}</span>
                            </button>
                        </div>

                        {/* Shared Data Section */}
                        <section className="editor-section card compact">
                            <h2 className="editor-h2"><Package size={16} /> Core Data (Shared)</h2>
                            <div className="editor-grid-compact">
                                <div className="input-group-compact">
                                    <label>Slug (URL Identifier)</label>
                                    <input type="text" value={editingProduct?.slug || ''} onChange={e => setEditingProduct(p => p ? { ...p, slug: e.target.value } : null)} />
                                </div>
                                <div className="input-group-compact">
                                    <label>Price (IDR)</label>
                                    <input type="text" value={editingProduct?.price || ''} onChange={e => setEditingProduct(p => p ? { ...p, price: e.target.value } : null)} placeholder="Rp..." />
                                </div>
                                <div className="input-group-compact span-2">
                                    <label>Categories</label>
                                    <input type="text" value={editingProduct?.categories.join(', ') || ''} onChange={e => setEditingProduct(p => p ? { ...p, categories: e.target.value.split(',').map(s => s.trim()) } : null)} />
                                </div>
                                <div className="input-group-compact span-2">
                                    <label>Image</label>
                                    <div className="input-with-action">
                                        <input type="text" value={editingProduct?.image || ''} readOnly style={{ background: '#f5f5f5' }} />
                                        <label className="action-input-btn">
                                            <ImageIcon size={16} /> Upload
                                            <input type="file" hidden accept="image/*" onChange={(e) => handleAssetUpload(e, 'image')} />
                                        </label>
                                    </div>
                                    {editingProduct?.image && (
                                        <div style={{ marginTop: '10px' }}>
                                            <img src={editingProduct.image} alt="Preview" style={{ height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                                        </div>
                                    )}
                                </div>
                                <div className="input-group-compact span-2">
                                    <label>Video</label>
                                    <div className="input-with-action">
                                        <input type="text" value={editingProduct?.video || ''} readOnly style={{ background: '#f5f5f5' }} />
                                        <label className="action-input-btn">
                                            <Video size={16} /> Upload Video
                                            <input type="file" hidden accept="video/*" onChange={(e) => handleAssetUpload(e, 'video')} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Language Specific Section */}
                        <section className="editor-section card compact" style={{ borderTop: '4px solid #8B7355' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                <h2 className="editor-h2"><Globe size={16} /> Localized Content</h2>
                                <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>
                                    Active Language: <strong style={{ color: '#8B7355' }}>{LANGUAGES.find(l => l.code === currentLang)?.label}</strong>
                                </span>
                            </div>

                            <div className="language-tabs">
                                {LANGUAGES.map(lang => (
                                    <button
                                        key={lang.code}
                                        className={`tab-btn ${currentLang === lang.code ? 'active' : ''}`}
                                        onClick={() => setCurrentLang(lang.code)}
                                    >
                                        <span style={{ marginRight: '6px' }}>{lang.flag}</span>
                                        {lang.label}
                                    </button>
                                ))}
                            </div>

                            <div className="editor-grid-compact">
                                <div className="input-group-compact span-2">
                                    <label>Product Name ({currentLang.toUpperCase()})</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.translations[currentLang]?.name || ''}
                                        onChange={e => updateTrans('name', e.target.value)}
                                    />
                                </div>

                                <div className="input-group-compact">
                                    <label>Preview Price ({LANGUAGES.find(l => l.code === currentLang)?.label})</label>
                                    <input type="text" value={convertedPrice} readOnly style={{ background: '#f9f9f9', color: '#8B7355', fontWeight: 'bold' }} />
                                </div>

                                <div className="input-group-compact span-3">
                                    <label>Description ({currentLang.toUpperCase()})</label>
                                    <textarea
                                        rows={4}
                                        className="content-textarea"
                                        value={editingProduct?.translations[currentLang]?.description || ''}
                                        onChange={e => updateTrans('description', e.target.value)}
                                    />
                                </div>

                                <div className="input-group-compact span-3">
                                    <label>Image Caption (SEO)</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.translations[currentLang]?.caption || ''}
                                        onChange={e => updateTrans('caption', e.target.value)}
                                    />
                                </div>

                                <div className="input-group-compact span-3">
                                    <label>Key Features / Details ({currentLang.toUpperCase()})</label>
                                    <div className="keypoints-list">
                                        {(editingProduct?.translations[currentLang]?.details || []).map((detail, index) => (
                                            <div key={index} className="keypoint-item">
                                                <span className="keypoint-number">{index + 1}</span>
                                                <input
                                                    type="text"
                                                    value={detail}
                                                    onChange={(e) => updateDetail(index, e.target.value)}
                                                    className="keypoint-input"
                                                    placeholder="Feature detail..."
                                                />
                                                <button onClick={() => removeDetail(index)} className="remove-btn"> <X size={16} /> </button>
                                            </div>
                                        ))}
                                    </div>
                                    <button type="button" onClick={addDetail} className="add-section-btn small" style={{ marginTop: '10px', width: 'fit-content' }}>
                                        + Add Detail
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section className="editor-section card compact">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                <h2 className="editor-h2"><Layers size={16} /> Variants (Global)</h2>
                                <button type="button" onClick={addVariant} className="create-post-btn" style={{ padding: '5px 10px', fontSize: '12px' }}>
                                    <Plus size={14} /> Add Variant
                                </button>
                            </div>
                            {editingProduct?.variants && editingProduct.variants.length > 0 ? (
                                <div className="variants-list">
                                    {editingProduct.variants.map((variant, index) => (
                                        <div key={index} className="variant-item">
                                            <input type="text" placeholder="Variant Name" value={variant.name} onChange={(e) => updateVariant(index, 'name', e.target.value)} className="variant-input" />
                                            <input type="text" placeholder="Price" value={variant.price} onChange={(e) => updateVariant(index, 'price', e.target.value)} className="variant-input" />
                                            <input type="text" placeholder="Dimensions" value={variant.dimensions || ''} onChange={(e) => updateVariant(index, 'dimensions', e.target.value)} className="variant-input" />
                                            <button onClick={() => removeVariant(index)} className="action-btn delete" style={{ color: 'red' }}> <X size={16} /> </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p style={{ color: '#888', fontStyle: 'italic', fontSize: '14px' }}>No variants added.</p>
                            )}
                        </section>
                    </div>
                )}
            </main>

            {showAIModal && (
                <div className="ai-modal-overlay" onClick={() => setShowAIModal(false)}>
                    <div className="ai-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="ai-modal-header">
                            <h2><Sparkles size={24} /> Magic Fill AI</h2>
                            <button className="ai-modal-close" onClick={() => setShowAIModal(false)}> <X size={20} /> </button>
                        </div>
                        <div className="ai-modal-body">
                            <div className="editor-info-box" style={{ marginBottom: '20px' }}>
                                <strong>Multi-Language Generation:</strong>
                                <p>AI will analyze your text and automatically generate translations for all 8 languages (En, Id, Ar, Zh, Ja, Es, Fr, Ko).</p>
                            </div>
                            <textarea
                                value={magicFillText}
                                onChange={(e) => setMagicFillText(e.target.value)}
                                placeholder="Paste raw product text here..."
                                rows={8}
                                disabled={isGenerating}
                            />
                            <div className="input-group" style={{ marginTop: '15px' }}>
                                <label>AI Model</label>
                                <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} disabled={isGenerating} className="ai-model-select">
                                    <optgroup label="Groq (Fast)">
                                        <option value="llama-3.3-70b-versatile">Llama 3.3 70B (Recommended)</option>
                                        <option value="mixtral-8x7b-32768">Mixtral 8x7B</option>
                                    </optgroup>
                                    <optgroup label="OpenRouter (Premium)">
                                        <option value="openai/gpt-4o">GPT-4o (Best Quality)</option>
                                        <option value="anthropic/claude-3-5-sonnet">Claude 3.5 Sonnet</option>
                                        <option value="deepseek/deepseek-r1">DeepSeek R1</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="ai-modal-footer">
                            <button className="back-link" onClick={() => setShowAIModal(false)}>Cancel</button>
                            <button className="ai-generate-btn" onClick={handleMagicFill} disabled={isGenerating || !magicFillText.trim()}>
                                {isGenerating ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
                                <span>{isGenerating ? 'Generating...' : 'Generate All Languages'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminProductManager
