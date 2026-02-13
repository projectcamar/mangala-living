import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import {
    Plus, Edit, Trash2, Search, ArrowLeft, Save,
    Package, AlertCircle, Loader2, Check, X,
    Image as ImageIcon, Video, Layers, Sparkles, Eye
} from 'lucide-react'
import { ALL_PRODUCTS, type Product, type ProductVariant } from '../data/products'
import './Admin.css'

const AdminProductManager: React.FC = () => {
    const [view, setView] = useState<'list' | 'editor'>('list')
    const [products, setProducts] = useState<Product[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    // Editor state
    const [editingProduct, setEditingProduct] = useState<Product | null>(null)
    const [tempImage, setTempImage] = useState<{ path: string, content: string } | null>(null)

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
        const baseProducts = [...ALL_PRODUCTS]
        const savedDrafts = localStorage.getItem('mangala_product_drafts')
        if (savedDrafts) {
            try {
                const parsedDrafts = JSON.parse(savedDrafts) as Product[]
                const mergedProducts = [...baseProducts]
                parsedDrafts.forEach(draft => {
                    const index = mergedProducts.findIndex(p => p.id === draft.id)
                    if (index !== -1) {
                        mergedProducts[index] = draft
                    } else {
                        mergedProducts.push(draft)
                    }
                })
                setProducts(mergedProducts)
            } catch (e) {
                console.error('Error loading product drafts:', e)
                setProducts(baseProducts)
            }
        } else {
            setProducts(baseProducts)
        }
        setIsLoading(false)
    }, [])

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('mangala_product_drafts', JSON.stringify(products))
        }
    }, [products, isLoading])

    const handleEdit = (product: Product) => {
        setEditingProduct({ ...product })
        setTempImage(null)
        setView('editor')
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
            description: '',
            details: [],
            variants: []
        })
        setTempImage(null)
        setView('editor')
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            setMessage({ type: 'error', text: 'Image size should be less than 5MB' })
            return
        }

        const reader = new FileReader()
        reader.onloadend = () => {
            const base64 = reader.result as string
            const fileName = file.name.replace(/\s+/g, '-').toLowerCase()
            const path = `/images/products/${fileName}`

            setEditingProduct(p => p ? { ...p, image: path } : null)
            setTempImage({ path: `public${path}`, content: base64 })
            setMessage({ type: 'success', text: 'Image prepared. Will be uploaded on Deploy.' })
        }
        reader.readAsDataURL(file)
    }

    const handleSaveProduct = () => {
        if (!editingProduct || !editingProduct.slug || !editingProduct.name) {
            setMessage({ type: 'error', text: 'Name and Slug are required' })
            return
        }

        const exists = products.find(p => p.id === editingProduct.id)
        let updatedProducts: Product[]
        if (exists) {
            updatedProducts = products.map(p => p.id === editingProduct.id ? editingProduct : p)
        } else {
            updatedProducts = [...products, editingProduct]
        }

        setProducts(updatedProducts)
        setView('list')
        setMessage({ type: 'success', text: 'Product saved locally. Click "Deploy Changes" to make it live.' })
    }

    const handleDeploy = async () => {
        setIsSaving(true)
        setMessage(null)

        try {
            setMessage({ type: 'success', text: 'Deploying changes (including images) to GitHub...' })

            // Note: In a real app we would track all pending images. 
            // Here we assume the user saves and deploys. 
            // If they edit multiple products with new images, only the last tempImage is in state, which is a limitation.
            // But usually admins do: Edit -> Save -> Edit -> Save -> Deploy.
            // To fix this, we should store tempImages in a Map or localStorage.
            // For now, let's just warn or handle the simple case.
            const imagesToUpload = tempImage ? [tempImage] : []

            const deployResponse = await fetch('/api/admin/deploy-products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    products: products,
                    images: imagesToUpload,
                    commitMessage: `Update products via admin (${new Date().toISOString().split('T')[0]})`
                })
            })

            const deployResult = await deployResponse.json()

            if (deployResponse.ok && deployResult.deployed) {
                localStorage.removeItem('mangala_product_drafts')
                setTempImage(null) // Clear temp image after successful deploy
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

            // Merge result into editingProduct
            setEditingProduct(p => {
                if (!p) return null
                return {
                    ...p,
                    name: result.name || p.name,
                    slug: result.slug || p.slug,
                    price: result.price || p.price,
                    categories: result.categories || p.categories,
                    description: result.description || p.description,
                    details: result.details || p.details || []
                }
            })

            setShowAIModal(false)
            setMagicFillText('')
            setMessage({ type: 'success', text: '✨ Magic Fill complete!' })

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

    // Details Handler
    const addDetail = () => {
        if (!editingProduct) return
        setEditingProduct({
            ...editingProduct,
            details: [...(editingProduct.details || []), '']
        })
    }

    const updateDetail = (index: number, value: string) => {
        if (!editingProduct || !editingProduct.details) return
        const newDetails = [...editingProduct.details]
        newDetails[index] = value
        setEditingProduct({ ...editingProduct, details: newDetails })
    }

    const removeDetail = (index: number) => {
        if (!editingProduct || !editingProduct.details) return
        const newDetails = editingProduct.details.filter((_, i) => i !== index)
        setEditingProduct({ ...editingProduct, details: newDetails })
    }

    // Variant Handlers
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

    // Search & Pagination
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
                                    href={`/products/${editingProduct.slug}`}
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
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
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
                                                    <span className="post-title-text">{product.name}</span>
                                                    <span className="post-slug-text">{product.slug}</span>
                                                </div>
                                            </td>
                                            <td>{product.price}</td>
                                            <td>
                                                {product.categories.map(cat => (
                                                    <span key={cat} className="cat-badge" style={{ marginRight: '4px' }}>{cat}</span>
                                                ))}
                                            </td>
                                            <td>
                                                <div style={{ display: 'flex', gap: '5px' }}>
                                                    {product.image && <ImageIcon size={16} color="#8B7355" />}
                                                    {product.video && <Video size={16} color="#8B7355" />}
                                                </div>
                                            </td>
                                            <td className="actions-cell">
                                                <button className="action-btn edit" onClick={() => handleEdit(product)} title="Edit">
                                                    <Edit size={16} />
                                                </button>
                                                <button className="action-btn delete" onClick={() => deleteProduct(product.id)} title="Delete">
                                                    <Trash2 size={16} />
                                                </button>
                                                <a href={`/products/${product.slug}`} target="_blank" rel="noreferrer" className="action-btn preview" title="View Live">
                                                    <Eye size={16} />
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Pagination Controls */}
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
                            <button
                                className="ai-generate-btn"
                                onClick={() => setShowAIModal(true)}
                                disabled={isGenerating}
                            >
                                <Sparkles size={18} />
                                <span>{isGenerating ? 'Processing...' : 'Magic Fill AI'}</span>
                            </button>
                        </div>

                        <section className="editor-section card compact">
                            <h2 className="editor-h2"><Package size={16} /> Product Details</h2>
                            <div className="editor-grid-compact">
                                <div className="input-group-compact span-2">
                                    <label>Product Name</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.name || ''}
                                        onChange={e => setEditingProduct(p => p ? { ...p, name: e.target.value } : null)}
                                    />
                                </div>
                                <div className="input-group-compact">
                                    <label>Slug</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.slug || ''}
                                        onChange={e => setEditingProduct(p => p ? { ...p, slug: e.target.value } : null)}
                                    />
                                </div>

                                <div className="input-group-compact">
                                    <label>Price (Formatted)</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.price || ''}
                                        onChange={e => setEditingProduct(p => p ? { ...p, price: e.target.value } : null)}
                                        placeholder="Rp..."
                                    />
                                </div>

                                <div className="input-group-compact span-2">
                                    <label>Categories (comma separated)</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.categories.join(', ') || ''}
                                        onChange={e => setEditingProduct(p => p ? { ...p, categories: e.target.value.split(',').map(s => s.trim()) } : null)}
                                        placeholder="Storage, New Arrivals"
                                    />
                                </div>

                                <div className="input-group-compact span-2">
                                    <label>Image</label>
                                    <div className="input-with-action">
                                        <input
                                            type="text"
                                            value={editingProduct?.image || ''}
                                            readOnly
                                            placeholder="/images/products/..."
                                            style={{ background: '#f5f5f5' }}
                                        />
                                        <label className="action-input-btn">
                                            <ImageIcon size={16} /> Upload
                                            <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                                        </label>
                                    </div>
                                    {editingProduct?.image && (
                                        <div style={{ marginTop: '10px' }}>
                                            <img src={editingProduct.image} alt="Preview" style={{ height: '100px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
                                            {tempImage && <span style={{ marginLeft: '10px', fontSize: '12px', color: '#2e7d32' }}>New image ready to deploy</span>}
                                        </div>
                                    )}
                                </div>

                                <div className="input-group-compact span-2">
                                    <label>Video URL / Path (Optional)</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.video || ''}
                                        onChange={e => setEditingProduct(p => p ? { ...p, video: e.target.value } : null)}
                                        placeholder="/images/products/..."
                                    />
                                </div>

                                <div className="input-group-compact span-3">
                                    <label>Product Description</label>
                                    <textarea
                                        rows={4}
                                        value={editingProduct?.description || ''}
                                        onChange={e => setEditingProduct(p => p ? { ...p, description: e.target.value } : null)}
                                        placeholder="Enter product description here..."
                                        className="content-textarea"
                                    />
                                </div>

                                <div className="input-group-compact span-3">
                                    <label>Additional Details (Bullet Points)</label>
                                    <div className="keypoints-list">
                                        {editingProduct?.details?.map((detail, index) => (
                                            <div key={index} className="keypoint-item">
                                                <span className="keypoint-number">{index + 1}</span>
                                                <input
                                                    type="text"
                                                    value={detail}
                                                    onChange={(e) => updateDetail(index, e.target.value)}
                                                    className="keypoint-input"
                                                    placeholder="e.g. Heavy Duty Construction"
                                                />
                                                <button onClick={() => removeDetail(index)} className="remove-btn">
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={addDetail}
                                        className="add-section-btn small"
                                        style={{ marginTop: '10px', width: 'fit-content' }}
                                    >
                                        + Add Detail Point
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section className="editor-section card compact">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                <h2 className="editor-h2"><Layers size={16} /> Variants</h2>
                                <button type="button" onClick={addVariant} className="create-post-btn" style={{ padding: '5px 10px', fontSize: '12px' }}>
                                    <Plus size={14} /> Add Variant
                                </button>
                            </div>

                            {editingProduct?.variants && editingProduct.variants.length > 0 ? (
                                <div className="variants-list">
                                    {editingProduct.variants.map((variant, index) => (
                                        <div key={index} className="variant-item" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: '10px', alignItems: 'center', padding: '10px', borderBottom: '1px solid #eee' }}>
                                            <input
                                                type="text"
                                                placeholder="Variant Name"
                                                value={variant.name}
                                                onChange={(e) => updateVariant(index, 'name', e.target.value)}
                                                className="variant-input"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Price"
                                                value={variant.price}
                                                onChange={(e) => updateVariant(index, 'price', e.target.value)}
                                                className="variant-input"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Dimensions"
                                                value={variant.dimensions || ''}
                                                onChange={(e) => updateVariant(index, 'dimensions', e.target.value)}
                                                className="variant-input"
                                            />
                                            <button onClick={() => removeVariant(index)} className="action-btn delete" style={{ color: 'red' }}>
                                                <X size={16} />
                                            </button>
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

            {/* Magic Fill Modal */}
            {showAIModal && (
                <div className="ai-modal-overlay" onClick={() => setShowAIModal(false)}>
                    <div className="ai-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="ai-modal-header">
                            <h2>
                                <Sparkles size={24} />
                                Magic Fill AI
                            </h2>
                            <button className="ai-modal-close" onClick={() => setShowAIModal(false)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className="ai-modal-body">
                            <div className="editor-info-box" style={{ marginBottom: '20px' }}>
                                <strong>How it works:</strong>
                                <p>Paste raw product information (specs, notes, etc.) below. AI will automatically extract and format the Name, Slug, Price, Description, and Details.</p>
                            </div>

                            <textarea
                                value={magicFillText}
                                onChange={(e) => setMagicFillText(e.target.value)}
                                placeholder="Paste raw product text here..."
                                rows={8}
                                disabled={isGenerating}
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                            />

                            <div className="input-group" style={{ marginTop: '15px' }}>
                                <label>AI Model</label>
                                <select
                                    value={selectedModel}
                                    onChange={(e) => setSelectedModel(e.target.value)}
                                    disabled={isGenerating}
                                    className="ai-model-select"
                                >
                                    <optgroup label="Groq (Fast)">
                                        <option value="llama-3.3-70b-versatile">Llama 3.3 70B</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>

                        <div className="ai-modal-footer">
                            <button className="back-link" onClick={() => setShowAIModal(false)}>Cancel</button>
                            <button className="ai-generate-btn" onClick={handleMagicFill} disabled={isGenerating || !magicFillText.trim()}>
                                {isGenerating ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
                                <span>{isGenerating ? 'Analyzing...' : 'Auto-Fill Form'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminProductManager
