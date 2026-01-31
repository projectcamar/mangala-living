import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
    Plus, Search, Edit2, Trash2, Save, X, ChevronLeft,
    Trash, Eye, AlertCircle, CheckCircle2, Loader2
} from 'lucide-react'
import { BLOG_POSTS, type BlogPost } from '../data/blog'
import { getBlogPostContentLocalized, type BlogContent, type BlogSection } from '../data/blogContent'
import { getAdminToken } from '../utils/adminAuth'
import './Admin.css'

const AdminBlogManager: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [view, setView] = useState<'list' | 'edit'>('list')
    const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS)
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
    const [editingContent, setEditingContent] = useState<BlogContent | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const [saveStatus, setSaveStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

    // Filtered posts based on search
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.slug.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleCreateNew = () => {
        const newId = Math.max(...posts.map(p => p.id), 0) + 1
        const newPost: BlogPost = {
            id: newId,
            slug: '',
            title: '',
            category: 'Tips and Trick',
            excerpt: '',
            image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop',
            date: new Date().toISOString().split('T')[0],
            author: 'Helmi Ramdan'
        }
        const newContent: BlogContent = {
            slug: '',
            sections: [{ paragraphs: ['Start writing your content here...'] }]
        }
        setEditingPost(newPost)
        setEditingContent(newContent)
        setView('edit')
    }

    const handleEdit = (post: BlogPost) => {
        setEditingPost({ ...post })
        // Fetch content from data
        const content = getBlogPostContentLocalized(post.slug, 'id') || { slug: post.slug, sections: [] }
        setEditingContent({ ...content })
        setView('edit')
    }

    const persistChanges = async (updatedPosts: BlogPost[], updatedContents: BlogContent[] | null) => {
        setIsSaving(true)
        setSaveStatus(null)
        try {
            const token = getAdminToken()
            const response = await fetch('/api/admin/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    posts: updatedPosts,
                    contents: updatedContents
                })
            })

            if (!response.ok) throw new Error('API request failed')

            setSaveStatus({ type: 'success', message: 'Blog database updated successfully!' })
            setTimeout(() => setSaveStatus(null), 3000)
        } catch (err: any) {
            setSaveStatus({ type: 'error', message: err.message || 'Failed to sync with filesystem' })
        } finally {
            setIsSaving(false)
        }
    }

    const handleDelete = async (slug: string) => {
        if (!window.confirm('Are you sure you want to delete this post? This action is permanent.')) return

        const newPosts = posts.filter(p => p.slug !== slug)
        await persistChanges(newPosts, null)
        setPosts(newPosts)
    }

    const handleAddSection = () => {
        if (!editingContent) return
        const newSections: BlogSection[] = [...editingContent.sections, { heading: 'New Heading', paragraphs: ['New paragraph content...'] }]
        setEditingContent({ ...editingContent, sections: newSections })
    }

    const handleRemoveSection = (index: number) => {
        if (!editingContent) return
        const newSections = editingContent.sections.filter((_, i) => i !== index)
        setEditingContent({ ...editingContent, sections: newSections })
    }

    const handleUpdateSection = (index: number, updates: Partial<BlogSection>) => {
        if (!editingContent) return
        const newSections = [...editingContent.sections]
        newSections[index] = { ...newSections[index], ...updates }
        setEditingContent({ ...editingContent, sections: newSections })
    }

    const handleSave = async () => {
        if (!editingPost || !editingContent) return

        if (!editingPost.slug) {
            editingPost.slug = editingPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
            editingContent.slug = editingPost.slug
        }

        const newPosts = [...posts]
        const existingIndex = newPosts.findIndex(p => p.id === editingPost.id)

        if (existingIndex !== -1) {
            newPosts[existingIndex] = editingPost
        } else {
            newPosts.push(editingPost)
        }

        await persistChanges(newPosts, [editingContent])

        setPosts(newPosts)
        setView('list')
    }

    return (
        <div className="admin-blog-manager">
            <Helmet>
                <title>Blog Management | Admin | Mangala Living</title>
            </Helmet>

            <div className="manager-header">
                <div className="header-left">
                    <button onClick={onBack} className="back-btn">
                        <ChevronLeft size={18} /> Back to Dashboard
                    </button>
                    <h2>{view === 'list' ? 'Blog Post Management' : 'Editing Article'}</h2>
                </div>
                {view === 'list' && (
                    <button onClick={handleCreateNew} className="create-btn">
                        <Plus size={18} /> Create New Post
                    </button>
                )}
            </div>

            {saveStatus && (
                <div className={`notification ${saveStatus.type}`}>
                    {saveStatus.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                    <span>{saveStatus.message}</span>
                </div>
            )}

            {view === 'list' ? (
                <div className="blog-list-view">
                    <div className="table-controls">
                        <div className="search-box">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search by title or slug..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="blog-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Post Info</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPosts.map(post => (
                                    <tr key={post.id}>
                                        <td className="post-cell">
                                            <div className="post-thumb">
                                                <img src={post.image} alt="" />
                                            </div>
                                            <div className="post-meta">
                                                <span className="post-title">{post.title}</span>
                                                <code className="post-slug">{post.slug}</code>
                                            </div>
                                        </td>
                                        <td><span className="category-pill">{post.category}</span></td>
                                        <td>{post.date}</td>
                                        <td>
                                            <span className="status-badge-live">
                                                <div className="dot"></div>
                                                Published
                                            </span>
                                        </td>
                                        <td className="action-cells">
                                            <button onClick={() => handleEdit(post)} className="icon-btn edit">
                                                <Edit2 size={16} />
                                            </button>
                                            <button onClick={() => handleDelete(post.slug)} className="icon-btn delete">
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="blog-edit-view">
                    <div className="edit-layout">
                        <div className="edit-main">
                            <div className="editor-card">
                                <h3>Post Content (Structured sections)</h3>

                                {editingContent?.sections.map((section, idx) => (
                                    <div key={idx} className="section-editor">
                                        <div className="section-header">
                                            <span>Section #{idx + 1}</span>
                                            <button onClick={() => handleRemoveSection(idx)} className="remove-section-btn">
                                                <Trash size={14} /> Remove
                                            </button>
                                        </div>

                                        <div className="field-group">
                                            <label>Heading</label>
                                            <input
                                                type="text"
                                                value={section.heading || ''}
                                                onChange={(e) => handleUpdateSection(idx, { heading: e.target.value })}
                                                placeholder="Section Heading (Optional)"
                                            />
                                        </div>

                                        <div className="field-group">
                                            <label>Paragraphs (HTML Supported)</label>
                                            {section.paragraphs?.map((p, pIdx) => (
                                                <textarea
                                                    key={pIdx}
                                                    value={p}
                                                    onChange={(e) => {
                                                        const newParas = [...(section.paragraphs || [])]
                                                        newParas[pIdx] = e.target.value
                                                        handleUpdateSection(idx, { paragraphs: newParas })
                                                    }}
                                                    placeholder="Write your paragraph..."
                                                    rows={4}
                                                />
                                            ))}
                                            <button
                                                className="add-sub-btn"
                                                onClick={() => handleUpdateSection(idx, { paragraphs: [...(section.paragraphs || []), ''] })}
                                            >
                                                <Plus size={12} /> Add Paragraph
                                            </button>
                                        </div>

                                        <div className="field-group">
                                            <label>Image URL (Optional)</label>
                                            <div className="image-input-row">
                                                <input
                                                    type="text"
                                                    value={section.image || ''}
                                                    onChange={(e) => handleUpdateSection(idx, { image: e.target.value })}
                                                    placeholder="https://images.unsplash.com/..."
                                                />
                                                {section.image && <div className="preview-mini"><img src={section.image} alt="" /></div>}
                                            </div>
                                        </div>

                                        <div className="field-group">
                                            <label>List Items (Optional)</label>
                                            {section.list?.map((item, lIdx) => (
                                                <div key={lIdx} className="list-input-row">
                                                    <input
                                                        type="text"
                                                        value={item}
                                                        onChange={(e) => {
                                                            const newList = [...(section.list || [])]
                                                            newList[lIdx] = e.target.value
                                                            handleUpdateSection(idx, { list: newList })
                                                        }}
                                                    />
                                                    <button onClick={() => {
                                                        const newList = section.list?.filter((_, i) => i !== lIdx)
                                                        handleUpdateSection(idx, { list: newList })
                                                    }}><X size={14} /></button>
                                                </div>
                                            ))}
                                            <button
                                                className="add-sub-btn"
                                                onClick={() => handleUpdateSection(idx, { list: [...(section.list || []), ''] })}
                                            >
                                                <Plus size={12} /> Add List Item
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <button onClick={handleAddSection} className="add-section-big">
                                    <Plus size={20} /> Add New Content Section
                                </button>
                            </div>
                        </div>

                        <aside className="edit-sidebar">
                            <div className="sidebar-card">
                                <h3>Main Metadata</h3>
                                <div className="field-group">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        value={editingPost?.title}
                                        onChange={(e) => setEditingPost(prev => prev ? { ...prev, title: e.target.value } : null)}
                                    />
                                </div>
                                <div className="field-group">
                                    <label>Slug (URL)</label>
                                    <input
                                        type="text"
                                        value={editingPost?.slug}
                                        onChange={(e) => setEditingPost(prev => prev ? { ...prev, slug: e.target.value } : null)}
                                        placeholder="Auto-generated if empty"
                                    />
                                </div>
                                <div className="field-group">
                                    <label>Category</label>
                                    <select
                                        value={editingPost?.category}
                                        onChange={(e) => setEditingPost(prev => prev ? { ...prev, category: e.target.value } : null)}
                                    >
                                        <option>Tips and Trick</option>
                                        <option>About Furniture</option>
                                        <option>Furniture Information</option>
                                        <option>Export & International</option>
                                        <option>Workshop & Production</option>
                                        <option>Local Area Guide</option>
                                    </select>
                                </div>
                                <div className="field-group">
                                    <label>Featured Image</label>
                                    <input
                                        type="text"
                                        value={editingPost?.image}
                                        onChange={(e) => setEditingPost(prev => prev ? { ...prev, image: e.target.value } : null)}
                                    />
                                    <div className="image-preview">
                                        <img src={editingPost?.image} alt="Featured Preview" />
                                    </div>
                                </div>
                                <div className="field-group">
                                    <label>SEO Excerpt</label>
                                    <textarea
                                        value={editingPost?.excerpt}
                                        onChange={(e) => setEditingPost(prev => prev ? { ...prev, excerpt: e.target.value } : null)}
                                        rows={3}
                                    />
                                </div>
                            </div>

                            <div className="sticky-actions">
                                <button
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    className="save-btn"
                                >
                                    {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                    Sync Changes to File System
                                </button>
                                <button onClick={() => setView('list')} className="cancel-btn">
                                    Cancel
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminBlogManager
