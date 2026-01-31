import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import {
    Plus, Edit, Trash2, Search, ArrowLeft, Save,
    FileText, AlertCircle, Loader2, Check, X,
    Type
} from 'lucide-react'
import { BLOG_POSTS, type BlogPost } from '../data/blog'
import './Admin.css'

const AdminBlogManager: React.FC = () => {
    const [view, setView] = useState<'list' | 'editor'>('list')
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    // Source strings kept for regex-based updates
    const [blogSource, setBlogSource] = useState('')

    // Editor state
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchSources = async () => {
            try {
                const res = await fetch('/api/admin/blog')
                if (!res.ok) throw new Error('Failed to fetch blog sources')
                const data = await res.json()
                setBlogSource(data.blogSource)

                // We use the imported BLOG_POSTS as state initial value
                setPosts([...BLOG_POSTS])
            } catch (err: any) {
                setMessage({ type: 'error', text: err.name === 'Error' ? err.message : 'Failed to fetch sources' })
            } finally {
                setIsLoading(false)
            }
        };
        fetchSources()
    }, [])

    const handleEdit = (post: BlogPost) => {
        setEditingPost({ ...post })
        setView('editor')
    }

    const handleNew = () => {
        const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1
        const today = new Date().toISOString().split('T')[0]

        setEditingPost({
            id: newId,
            slug: '',
            title: '',
            category: 'Tips and Trick',
            excerpt: '',
            image: '',
            date: today,
            author: 'Helmi Ramdan'
        })
        setView('editor')
    }

    const handleSavePost = () => {
        if (!editingPost || !editingPost.slug || !editingPost.title) {
            setMessage({ type: 'error', text: 'Slug and Title are required' })
            return
        }

        // Update posts list
        const exists = posts.find(p => p.id === editingPost.id)
        let updatedPosts: BlogPost[]
        if (exists) {
            updatedPosts = posts.map(p => p.id === editingPost.id ? editingPost : p)
        } else {
            updatedPosts = [...posts, editingPost]
        }

        setPosts(updatedPosts)
        setView('list')
        setMessage({ type: 'success', text: 'Post updated in local state. Click "Sync to Files" to persist change to disk.' })
    }

    const handleSyncToFiles = async () => {
        setIsSaving(true)
        setMessage(null)

        try {
            const arrayStartTag = 'export const BLOG_POSTS: BlogPost[] = ['
            const startIdx = blogSource.indexOf(arrayStartTag)
            if (startIdx === -1) throw new Error('Could not find BLOG_POSTS array in source file')

            const newPostsJson = JSON.stringify(posts, null, 2)
            const newBlogSource = blogSource.replace(
                /(export const BLOG_POSTS: BlogPost\[\] = )\[[\s\S]*?\](\n\s*\/\/|\n\s*export|\s*$)/,
                `$1${newPostsJson}$2`
            )

            const response = await fetch('/api/admin/blog', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    blogSource: newBlogSource
                })
            })

            if (response.ok) {
                setBlogSource(newBlogSource)
                setMessage({ type: 'success', text: 'Sync successful! Changes saved to src/data/blog.ts' })
            } else {
                throw new Error('Failed to update source files on server')
            }
        } catch (err: any) {
            setMessage({ type: 'error', text: err.name === 'Error' ? err.message : 'An error occurred during sync' })
        } finally {
            setIsSaving(false)
        }
    }

    const deletePost = (id: number) => {
        if (window.confirm('Delete this post? (Permanent after Sync)')) {
            setPosts(posts.filter(p => p.id !== id))
        }
    }

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.slug.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (isLoading) {
        return (
            <div className="admin-loading-screen-wrap">
                <div className="loader"></div>
                <p>Syncing Cloud Data...</p>
                <style>{`
                    .admin-loading-screen-wrap {
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background: #f8f9fa;
                        color: #8B7355;
                    }
                    .loader {
                        border: 4px solid #f3f3f3;
                        border-top: 4px solid #8B7355;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;
                        animation: spin 1s linear infinite;
                        margin-bottom: 20px;
                    }
                    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                `}</style>
            </div>
        )
    }

    return (
        <div className="admin-dashboard admin-blog-manager">
            <Helmet>
                <title>{view === 'list' ? 'Blog Manager' : 'Edit Post'} | Mangala Admin</title>
            </Helmet>

            <header className="admin-header">
                <div className="admin-header-title">
                    <button onClick={() => view === 'list' ? navigate('/admin/dashboard') : setView('list')} className="back-link">
                        <ArrowLeft size={18} />
                    </button>
                    <h1>{view === 'list' ? 'BLOG MANAGER' : 'EDIT ARTICLE'}</h1>
                </div>

                <div className="admin-user-nav">
                    {view === 'list' ? (
                        <button onClick={handleSyncToFiles} className="save-btn" disabled={isSaving}>
                            {isSaving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                            <span>{isSaving ? 'Syncing...' : 'Sync to Files'}</span>
                        </button>
                    ) : (
                        <button onClick={handleSavePost} className="save-btn">
                            <Check size={16} />
                            <span>Done Editing</span>
                        </button>
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
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button className="create-post-btn" onClick={handleNew}>
                                <Plus size={18} />
                                <span>New Article</span>
                            </button>
                        </div>

                        <div className="posts-table-card card">
                            <table className="posts-table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...filteredPosts].reverse().map(post => (
                                        <tr key={post.id}>
                                            <td>
                                                <div className="post-title-cell">
                                                    <FileText size={16} />
                                                    <span>{post.title}</span>
                                                </div>
                                            </td>
                                            <td><span className="cat-badge">{post.category}</span></td>
                                            <td>{post.date}</td>
                                            <td className="actions-cell">
                                                <button className="action-btn edit" onClick={() => handleEdit(post)} title="Edit Content">
                                                    <Edit size={16} />
                                                </button>
                                                <button className="action-btn delete" onClick={() => deletePost(post.id)} title="Delete Post">
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : (
                    <div className="post-editor-container">
                        <section className="editor-section card">
                            <h2 className="editor-h2"><Type size={18} /> Metadata Editor</h2>
                            <div className="editor-grid">
                                <div className="input-group">
                                    <label>Article Title</label>
                                    <input
                                        type="text"
                                        value={editingPost?.title || ''}
                                        onChange={e => setEditingPost(p => p ? { ...p, title: e.target.value } : null)}
                                        placeholder="Headline of the article"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>URL Slug</label>
                                    <input
                                        type="text"
                                        value={editingPost?.slug || ''}
                                        onChange={e => setEditingPost(p => p ? { ...p, slug: e.target.value } : null)}
                                        placeholder="e.g. tips-memilih-furniture"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Category</label>
                                    <select
                                        value={editingPost?.category || 'Tips and Trick'}
                                        onChange={e => setEditingPost(p => p ? { ...p, category: e.target.value } : null)}
                                    >
                                        <option>Tips and Trick</option>
                                        <option>Workshop & Production</option>
                                        <option>Commercial Furniture</option>
                                        <option>About Furniture</option>
                                        <option>Furniture Information</option>
                                        <option>Furniture Guide</option>
                                        <option>Design Inspiration</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label>Date</label>
                                    <input
                                        type="date"
                                        value={editingPost?.date || ''}
                                        onChange={e => setEditingPost(p => p ? { ...p, date: e.target.value } : null)}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Featured Image URL</label>
                                    <input
                                        type="text"
                                        value={editingPost?.image || ''}
                                        onChange={e => setEditingPost(p => p ? { ...p, image: e.target.value } : null)}
                                        placeholder="https://..."
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Author</label>
                                    <input
                                        type="text"
                                        value={editingPost?.author || ''}
                                        onChange={e => setEditingPost(p => p ? { ...p, author: e.target.value } : null)}
                                    />
                                </div>
                                <div className="input-group full">
                                    <label>Meta Excerpt (Used for SEO and Card Preview)</label>
                                    <textarea
                                        rows={3}
                                        value={editingPost?.excerpt || ''}
                                        onChange={e => setEditingPost(p => p ? { ...p, excerpt: e.target.value } : null)}
                                    />
                                </div>
                            </div>
                        </section>

                        <div className="editor-notice">
                            <AlertCircle size={20} />
                            <div>
                                <strong>SEO Mode Active</strong>
                                <p>Content sections are automatically generated based on the Slug and Title using Mangala's AI-Optimized Fallback System. Custom section editing is currently disabled to prevent breaking fallback logic.</p>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <style>{`
                .close-msg { cursor: pointer; margin-left: auto; opacity: 0.5; }
                .post-editor-container { animation: fadeIn 0.3s ease; }
                .editor-h2 { 
                    display: flex; 
                    align-items: center; 
                    gap: 10px; 
                    margin-bottom: 20px; 
                    color: #2c3e50; 
                    font-size: 1.1rem;
                    border-bottom: 2px solid #8B7355;
                    padding-bottom: 10px;
                }
                .editor-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                .input-group { display: flex; flex-direction: column; gap: 8px; }
                .input-group.full { grid-column: span 2; }
                .input-group label { font-size: 0.85rem; font-weight: 700; color: #444; text-transform: uppercase; letter-spacing: 0.5px; }
                .input-group input, .input-group select, .input-group textarea {
                    padding: 12px;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    font-size: 1rem;
                    outline-color: #8B7355;
                    background: #fff;
                    transition: border 0.2s;
                }
                .input-group input:focus { border-color: #8B7355; }
                
                .editor-notice {
                    margin-top: 30px;
                    background: rgba(139, 115, 85, 0.05);
                    border: 1px solid rgba(139, 115, 85, 0.2);
                    padding: 20px;
                    border-radius: 10px;
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                    color: #5d4d3a;
                }
                .editor-notice strong { display: block; margin-bottom: 5px; font-size: 1rem; }
                .editor-notice p { margin: 0; font-size: 0.9rem; line-height: 1.5; opacity: 0.9; }

                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                
                .admin-blog-manager .manager-toolbar {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 25px;
                  gap: 20px;
                }
                .search-box {
                  flex: 1;
                  display: flex;
                  align-items: center;
                  background: #fff;
                  border-radius: 8px;
                  padding: 12px 15px;
                  gap: 10px;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                }
                .search-box input { border: none; outline: none; width: 100%; font-size: 1rem; }
                .create-post-btn {
                  background: #2C3E50;
                  color: #fff;
                  border: none;
                  padding: 12px 24px;
                  border-radius: 8px;
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                  gap: 8px;
                  font-weight: 600;
                  transition: 0.2s;
                }
                .create-post-btn:hover { background: #34495e; transform: translateY(-1px); }
                
                .posts-table { width: 100%; border-collapse: collapse; text-align: left; }
                .posts-table th { padding: 18px 20px; font-size: 0.85rem; color: #888; text-transform: uppercase; border-bottom: 2px solid #f4f4f4; letter-spacing: 1px; }
                .posts-table td { padding: 18px 20px; border-bottom: 1px solid #f4f4f4; font-size: 0.95rem; }
                .post-title-cell { display: flex; align-items: center; gap: 12px; font-weight: 600; color: #2C3E50; }
                .post-title-cell span { max-width: 400px; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                .cat-badge { background: #f0ede9; color: #8B7355; padding: 5px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
                
                .actions-cell { display: flex; gap: 12px; }
                .action-btn { background: #f8f9fa; border: 1px solid #eee; cursor: pointer; padding: 8px; border-radius: 6px; transition: 0.2s; }
                .action-btn.edit { color: #2980b9; }
                .action-btn.edit:hover { background: #2980b9; color: #fff; }
                .action-btn.delete { color: #c0392b; }
                .action-btn.delete:hover { background: #c0392b; color: #fff; }
                
                .save-btn {
                  background: #8B7355;
                  color: #fff;
                  border: none;
                  padding: 10px 20px;
                  border-radius: 8px;
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  font-weight: 600;
                  transition: all 0.2s;
                  box-shadow: 0 4px 12px rgba(139, 115, 85, 0.2);
                }
                .save-btn:hover:not(:disabled) { background: #7a654a; transform: translateY(-1px); box-shadow: 0 6px 15px rgba(139, 115, 85, 0.3); }
                .save-btn:disabled { opacity: 0.6; cursor: not-allowed; }
                
                .admin-msg { padding: 16px 24px; border-radius: 10px; margin-bottom: 25px; display: flex; align-items: center; gap: 15px; font-weight: 500; }
                .admin-msg.success { background: #e6f4ea; color: #1e7e34; border-left: 5px solid #1e7e34; }
                .admin-msg.error { background: #fce8e8; color: #c53030; border-left: 5px solid #c53030; }
                
                .back-link { background: #fff; border: 1px solid #ddd; color: #444; cursor: pointer; padding: 8px; border-radius: 8px; margin-right: 15px; transition: 0.2s; }
                .back-link:hover { background: #f8f9fa; border-color: #8B7355; color: #8B7355; }
            `}</style>
        </div>
    )
}

export default AdminBlogManager
