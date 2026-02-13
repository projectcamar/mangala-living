import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import {
    Plus, Edit, Trash2, Search, ArrowLeft, Save,
    FileText, AlertCircle, Loader2, Check, X,
    Type, Sparkles, Eye, Upload, Image as ImageIcon, Video
} from 'lucide-react'
import { ALL_PRODUCTS, type Product } from '../data/products'
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
    const [newDetailInput, setNewDetailInput] = useState('')

    // AI Generator state
    const [showAIModal, setShowAIModal] = useState(false)
    const [aiSourceText, setAiSourceText] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)
    const [selectedModel, setSelectedModel] = useState('llama-3.3-70b-versatile')
    const [selectedLanguage, setSelectedLanguage] = useState('id')

    // Pagination state
    const [itemsPerPage, setItemsPerPage] = useState<number | 'all'>(10)
    const [currentPage, setCurrentPage] = useState(1)

    const navigate = useNavigate()

    useEffect(() => {
        // 1. Load from imported ALL_PRODUCTS (base)
        const baseProducts: Product[] = ALL_PRODUCTS.map(p => ({
            ...p,
            status: p.status || 'live',
            description: p.description || '',
            productDetails: p.productDetails || []
        }))

        // 2. Load from localStorage (overrides/new drafts)
        const savedProducts = localStorage.getItem('mangala_product_drafts')
        if (savedProducts) {
            try {
                const parsedDrafts = JSON.parse(savedProducts) as Product[]
                // Merge logic: drafts with same ID as baseProducts override them
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
                console.error('Error loading drafts:', e)
                setProducts(baseProducts)
            }
        } else {
            setProducts(baseProducts)
        }
        setIsLoading(false)
    }, [])

    // Save to localStorage whenever products change
    useEffect(() => {
        if (!isLoading) {
            const drafts = products.filter(p => p.status === 'draft')
            localStorage.setItem('mangala_product_drafts', JSON.stringify(drafts))
        }
    }, [products, isLoading])

    const handleEdit = (product: Product) => {
        setEditingProduct({
            ...product,
            description: product.description || '',
            productDetails: product.productDetails || [],
            status: product.status || 'live'
        })
        setView('editor')
    }

    const handleNew = () => {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1

        setEditingProduct({
            id: newId,
            slug: '',
            name: '',
            categories: [],
            price: '',
            image: '',
            video: '',
            description: '',
            productDetails: [],
            status: 'draft',
            variants: []
        })
        setView('editor')
    }

    const handleSaveProduct = () => {
        if (!editingProduct || !editingProduct.slug || !editingProduct.name) {
            setMessage({ type: 'error', text: 'Slug and Name are required' })
            return
        }

        // New or edited products get 'draft' status
        const productToSave = { ...editingProduct, status: 'draft' as const }

        // Update products list
        const exists = products.find(p => p.id === productToSave.id)
        let updatedProducts: Product[]
        if (exists) {
            updatedProducts = products.map(p => p.id === productToSave.id ? productToSave : p)
        } else {
            updatedProducts = [...products, productToSave]
        }

        setProducts(updatedProducts)
        setView('list')
        setMessage({ type: 'success', text: 'Product saved locally as draft. Click "Deploy Changes" to make it live.' })
    }

    const handleSyncToFiles = async () => {
        setIsSaving(true)
        setMessage(null)

        try {
            setMessage({ type: 'success', text: 'Deploying changes to GitHub...' })

            const deployResponse = await fetch('/api/admin/deploy-products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ products })
            })

            if (!deployResponse.ok) {
                throw new Error('Deploy failed')
            }

            // Mark all products as synced
            const syncedProducts = products.map(p => ({ ...p, status: 'live' as const }))
            setProducts(syncedProducts)
            localStorage.removeItem('mangala_product_drafts')

            setMessage({ type: 'success', text: 'All changes deployed successfully! Vercel will rebuild shortly.' })
        } catch (error) {
            console.error('Sync error:', error)
            setMessage({ type: 'error', text: 'Failed to deploy changes. Check console for details.' })
        } finally {
            setIsSaving(false)
        }
    }

    const handleDelete = (id: number) => {
        if (!confirm('Are you sure you want to delete this product?')) return
        setProducts(products.filter(p => p.id !== id))
        setMessage({ type: 'success', text: 'Product deleted' })
    }

    const handleGenerateProduct = async () => {
        if (!aiSourceText.trim()) {
            setMessage({ type: 'error', text: 'Please enter source text' })
            return
        }

        setIsGenerating(true)
        try {
            const response = await fetch('/api/admin/generate-product-full', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sourceText: aiSourceText,
                    category: editingProduct?.categories[0] || 'Furniture',
                    model: selectedModel,
                    language: selectedLanguage
                })
            })

            if (!response.ok) {
                throw new Error('Failed to generate')
            }

            const result = await response.json()

            if (editingProduct) {
                setEditingProduct({
                    ...editingProduct,
                    name: result.name || editingProduct.name,
                    slug: result.slug || editingProduct.slug,
                    description: result.description || editingProduct.description,
                    productDetails: result.productDetails || editingProduct.productDetails
                })
            }

            setShowAIModal(false)
            setMessage({ type: 'success', text: 'Product data generated successfully!' })
        } catch (error) {
            console.error('AI generation error:', error)
            setMessage({ type: 'error', text: 'Failed to generate product data' })
        } finally {
            setIsGenerating(false)
        }
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        if (!file.type.startsWith('image/')) {
            setMessage({ type: 'error', text: 'Please select an image file' })
            return
        }

        setMessage({ type: 'success', text: 'Image upload will be implemented with GitHub integration...' })
        // TODO: Implement actual file upload to GitHub
        // For now, user should manually upload to /public/images/products and use the path
    }

    const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        if (!file.type.startsWith('video/')) {
            setMessage({ type: 'error', text: 'Please select a video file' })
            return
        }

        setMessage({ type: 'success', text: 'Video upload will be implemented with GitHub integration...' })
        // TODO: Implement actual file upload to GitHub
    }

    const handleAddDetail = () => {
        if (!newDetailInput.trim() || !editingProduct) return

        setEditingProduct({
            ...editingProduct,
            productDetails: [...(editingProduct.productDetails || []), newDetailInput.trim()]
        })
        setNewDetailInput('')
    }

    const handleRemoveDetail = (index: number) => {
        if (!editingProduct) return
        setEditingProduct({
            ...editingProduct,
            productDetails: editingProduct.productDetails?.filter((_, i) => i !== index) || []
        })
    }

    const handlePreview = (slug: string) => {
        window.open(`/products/${slug}`, '_blank')
    }

    // Filter and paginate
    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.slug.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const totalPages = itemsPerPage === 'all' ? 1 : Math.ceil(filteredProducts.length / itemsPerPage)
    const paginatedProducts = itemsPerPage === 'all'
        ? filteredProducts
        : filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    const draftCount = products.filter(p => p.status === 'draft').length

    if (isLoading) {
        return <div className="admin-dashboard"><div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div></div>
    }

    return (
        <div className="admin-dashboard">
            <Helmet>
                <title>Product Manager | Mangala Living Admin</title>
            </Helmet>

            <header className="admin-header">
                <div className="admin-header-title">
                    <h1>💼 PRODUCT MANAGER</h1>
                </div>
                <div className="admin-user-nav">
                    <button className="save-btn" onClick={() => navigate('/admin')}>
                        <ArrowLeft size={16} />
                        Dashboard
                    </button>
                    {view === 'list' && draftCount > 0 && (
                        <button className="save-btn" onClick={handleSyncToFiles} disabled={isSaving}>
                            {isSaving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                            Deploy Changes ({draftCount})
                        </button>
                    )}
                </div>
            </header>

            <main className="admin-main">
                {message && (
                    <div className={`admin-msg ${message.type}`} style={{
                        background: message.type === 'success' ? '#d4edda' : '#f8d7da',
                        border: `1px solid ${message.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                        color: message.type === 'success' ? '#155724' : '#721c24',
                        padding: '12px 16px',
                        borderRadius: '6px',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        {message.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
                        <span>{message.text}</span>
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
                                New Product
                            </button>
                        </div>

                        <div className="posts-table-card">
                            <table className="posts-table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Categories</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedProducts.map(product => (
                                        <tr key={product.id}>
                                            <td>
                                                <div className="post-title-cell">
                                                    <div className="post-thumb">
                                                        {product.image ? (
                                                            <img src={product.image} alt={product.name} />
                                                        ) : (
                                                            <div className="thumb-placeholder"><FileText size={20} /></div>
                                                        )}
                                                    </div>
                                                    <div className="post-title-info">
                                                        <div className="post-title-text">{product.name}</div>
                                                        <div className="post-slug-text">/{product.slug}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {product.categories.map((cat, idx) => (
                                                    <span key={idx} className="cat-badge" style={{ marginRight: '4px' }}>
                                                        {cat}
                                                    </span>
                                                ))}
                                            </td>
                                            <td>{product.price}</td>
                                            <td>
                                                <span className={`status-badge ${product.status || 'live'}`}>
                                                    {product.status === 'draft' ? 'Draft' : 'Live'}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="actions-cell">
                                                    <button className="action-btn preview" onClick={() => handlePreview(product.slug)} title="Preview">
                                                        <Eye size={16} />
                                                    </button>
                                                    <button className="action-btn edit" onClick={() => handleEdit(product)}>
                                                        <Edit size={16} />
                                                    </button>
                                                    <button className="action-btn delete" onClick={() => handleDelete(product.id)}>
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="pagination-wrapper">
                                <div className="pagination-info">
                                    Showing {paginatedProducts.length} of {filteredProducts.length} products
                                </div>
                                <div className="pagination-controls">
                                    <div className="items-per-page">
                                        <span>Show:</span>
                                        {[10, 25, 50, 'all'].map((size) => (
                                            <button
                                                key={size}
                                                className={`size-btn ${itemsPerPage === size ? 'active' : ''}`}
                                                onClick={() => {
                                                    setItemsPerPage(size as number | 'all')
                                                    setCurrentPage(1)
                                                }}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                    {itemsPerPage !== 'all' && (
                                        <div className="page-btns">
                                            <button
                                                className="nav-btn"
                                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                                disabled={currentPage === 1}
                                            >
                                                Previous
                                            </button>
                                            <span>{currentPage} / {totalPages}</span>
                                            <button
                                                className="nav-btn"
                                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                                disabled={currentPage === totalPages}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* AI Modal */}
                        {showAIModal && (
                            <div className="ai-modal-overlay" onClick={() => setShowAIModal(false)}>
                                <div className="ai-modal-content" onClick={(e) => e.stopPropagation()}>
                                    <div className="ai-modal-header">
                                        <h2><Sparkles size={24} /> AI Product Generator</h2>
                                        <button className="ai-modal-close" onClick={() => setShowAIModal(false)}>
                                            <X size={20} />
                                        </button>
                                    </div>
                                    <div className="ai-modal-body">
                                        <label>Source Text (paste product info to auto-fill)</label>
                                        <textarea
                                            rows={6}
                                            value={aiSourceText}
                                            onChange={(e) => setAiSourceText(e.target.value)}
                                            placeholder="Paste any text about the product here. AI will extract name, description, and details..."
                                            disabled={isGenerating}
                                        />

                                        <label style={{ marginTop: '16px' }}>Language</label>
                                        <select
                                            className="ai-model-select"
                                            value={selectedLanguage}
                                            onChange={(e) => setSelectedLanguage(e.target.value)}
                                            disabled={isGenerating}
                                        >
                                            <option value="id">Indonesian</option>
                                            <option value="en">English</option>
                                        </select>

                                        <label>AI Model</label>
                                        <select
                                            className="ai-model-select"
                                            value={selectedModel}
                                            onChange={(e) => setSelectedModel(e.target.value)}
                                            disabled={isGenerating}
                                        >
                                            <optgroup label="Groq (Fast & Free)">
                                                <option value="llama-3.3-70b-versatile">Llama 3.3 70B (Recommended)</option>
                                                <option value="llama-3.1-70b-versatile">Llama 3.1 70B</option>
                                                <option value="mixtral-8x7b-32768">Mixtral 8x7B</option>
                                            </optgroup>
                                            <optgroup label="OpenRouter (Premium)">
                                                <option value="anthropic/claude-3.5-sonnet">Claude 3.5 Sonnet</option>
                                                <option value="openai/gpt-4o">GPT-4O</option>
                                                <option value="google/gemini-pro-1.5">Gemini Pro 1.5</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div className="ai-modal-footer">
                                        <button className="ai-modal-cancel" onClick={() => setShowAIModal(false)} disabled={isGenerating}>
                                            Cancel
                                        </button>
                                        <button className="ai-modal-generate" onClick={handleGenerateProduct} disabled={isGenerating}>
                                            {isGenerating ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
                                            <span>{isGenerating ? 'AI is working...' : 'Generate Product Data'}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Product Editor */}
                        <div className="editor-header-actions">
                            <button className="ai-generate-btn" onClick={() => setShowAIModal(true)}>
                                <Sparkles size={18} />
                                Generate with AI
                            </button>
                        </div>

                        <section className="editor-section card compact">
                            <h2 className="editor-h2"><Type size={16} /> Product Details Editor</h2>
                            <div className="editor-grid-compact">
                                <div className="input-group-compact">
                                    <label>Product Name *</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.name || ''}
                                        onChange={(e) => setEditingProduct(p => p ? { ...p, name: e.target.value } : null)}
                                        placeholder="e.g., Frame Loft Bookshelf"
                                    />
                                </div>

                                <div className="input-group-compact">
                                    <label>Slug *</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.slug || ''}
                                        onChange={(e) => setEditingProduct(p => p ? { ...p, slug: e.target.value } : null)}
                                        placeholder="e.g., frame-loft-bookshelf"
                                    />
                                </div>

                                <div className="input-group-compact">
                                    <label>Price</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.price || ''}
                                        onChange={(e) => setEditingProduct(p => p ? { ...p, price: e.target.value } : null)}
                                        placeholder="e.g., Rp3.500.000"
                                    />
                                </div>

                                <div className="input-group-compact span-2">
                                    <label>Categories (comma-separated)</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.categories.join(', ') || ''}
                                        onChange={(e) => setEditingProduct(p => p ? {
                                            ...p,
                                            categories: e.target.value.split(',').map(c => c.trim()).filter(Boolean)
                                        } : null)}
                                        placeholder="e.g., New Arrivals, Storage"
                                    />
                                </div>

                                <div className="input-group-compact">
                                    <label>Status</label>
                                    <select
                                        value={editingProduct?.status || 'draft'}
                                        onChange={(e) => setEditingProduct(p => p ? {
                                            ...p,
                                            status: e.target.value as 'live' | 'draft'
                                        } : null)}
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="live">Live</option>
                                    </select>
                                </div>

                                <div className="input-group-compact span-3">
                                    <label>Image Path</label>
                                    <div className="input-with-action">
                                        <input
                                            type="text"
                                            value={editingProduct?.image || ''}
                                            onChange={(e) => setEditingProduct(p => p ? { ...p, image: e.target.value } : null)}
                                            placeholder="/images/products/your-image.webp"
                                        />
                                        <label className="action-input-btn" htmlFor="image-upload">
                                            <ImageIcon size={16} />
                                            Upload
                                        </label>
                                        <input
                                            id="image-upload"
                                            type="file"
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            onChange={handleImageUpload}
                                        />
                                    </div>
                                </div>

                                <div className="input-group-compact span-3">
                                    <label>Video Path (Optional)</label>
                                    <div className="input-with-action">
                                        <input
                                            type="text"
                                            value={editingProduct?.video || ''}
                                            onChange={(e) => setEditingProduct(p => p ? { ...p, video: e.target.value } : null)}
                                            placeholder="/images/products/your-video.mp4"
                                        />
                                        <label className="action-input-btn" htmlFor="video-upload">
                                            <Video size={16} />
                                            Upload
                                        </label>
                                        <input
                                            id="video-upload"
                                            type="file"
                                            accept="video/*"
                                            style={{ display: 'none' }}
                                            onChange={handleVideoUpload}
                                        />
                                    </div>
                                </div>

                                <div className="input-group-compact span-3">
                                    <label>Description</label>
                                    <textarea
                                        rows={4}
                                        value={editingProduct?.description || ''}
                                        onChange={(e) => setEditingProduct(p => p ? { ...p, description: e.target.value } : null)}
                                        placeholder="Write a compelling product description..."
                                        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'inherit' }}
                                    />
                                </div>

                                <div className="input-group-compact span-3">
                                    <label>Product Details (Bullet Points)</label>
                                    <div style={{ background: '#f9f9f9', padding: '16px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                                        {editingProduct?.productDetails?.map((detail, idx) => (
                                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                                <span style={{ flex: 1, padding: '8px', background: '#fff', borderRadius: '4px', border: '1px solid #ddd' }}>
                                                    {detail}
                                                </span>
                                                <button
                                                    onClick={() => handleRemoveDetail(idx)}
                                                    style={{ padding: '8px', background: '#ffebee', color: '#c62828', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        ))}
                                        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                                            <input
                                                type="text"
                                                value={newDetailInput}
                                                onChange={(e) => setNewDetailInput(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && handleAddDetail()}
                                                placeholder="Add new detail, e.g., Konstruksi Heavy Duty"
                                                style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                            />
                                            <button
                                                onClick={handleAddDetail}
                                                style={{ padding: '10px 20px', background: '#8B7355', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                                            >
                                                <Plus size={16} />
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                                <button
                                    className="save-btn"
                                    onClick={handleSaveProduct}
                                    style={{ background: '#8B7355', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}
                                >
                                    <Save size={18} />
                                    Save Product
                                </button>
                                <button
                                    onClick={() => setView('list')}
                                    style={{ background: 'transparent', border: '1px solid #ddd', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                                >
                                    <X size={18} />
                                    Cancel
                                </button>
                            </div>
                        </section>
                    </>
                )}
            </main>
        </div>
    )
}

export default AdminProductManager
