import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import {
    Plus, Edit, Trash2, Search, ArrowLeft, Save,
    FileText, AlertCircle, Loader2, Check
} from 'lucide-react'
import { BLOG_POSTS, type BlogPost } from '../data/blog'
import './Admin.css'

const AdminBlogManager: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        setPosts(BLOG_POSTS)
    }, [])

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.slug.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSave = async () => {
        setIsSaving(true)
        setMessage(null)

        try {
            // Mock generation of TS source (simplified)
            // Note: In a real editor, we would re-generate the entire file structure
            const blogSource = `import { type BlogPost } from './blog';\n\nexport const BLOG_POSTS: BlogPost[] = ${JSON.stringify(posts, null, 2)};`

            const response = await fetch('/api/admin/blog', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    blogSource,
                    // We keep contentSource undefined for now as we haven't implemented the full section editor
                })
            })

            if (response.ok) {
                setMessage({ type: 'success', text: 'Blog source files updated! Please commit and push to deploy.' })
            } else {
                throw new Error('Failed to update source files')
            }
        } catch (err: any) {
            setMessage({ type: 'error', text: err.message || 'An error occurred' })
        } finally {
            setIsSaving(false)
        }
    }

    const deletePost = (id: number) => {
        if (window.confirm('Are you sure you want to delete this post? This change is permanent after you Save.')) {
            setPosts(posts.filter(p => p.id !== id))
        }
    }

    return (
        <div className="admin-dashboard admin-blog-manager">
            <Helmet>
                <title>Blog Manager | Mangala Admin</title>
            </Helmet>

            <header className="admin-header">
                <div className="admin-header-title">
                    <button onClick={() => navigate('/admin/dashboard')} className="back-link">
                        <ArrowLeft size={18} />
                    </button>
                    <h1>BLOG <span style={{ color: '#8B7355' }}>MANAGER</span></h1>
                </div>

                <div className="admin-user-nav">
                    <button
                        onClick={handleSave}
                        className="save-btn"
                        disabled={isSaving}
                    >
                        {isSaving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                        <span>{isSaving ? 'Saving...' : 'Save All Changes'}</span>
                    </button>
                </div>
            </header>

            <main className="admin-main">
                {message && (
                    <div className={`admin-msg ${message.type}`}>
                        {message.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
                        <span>{message.text}</span>
                    </div>
                )}

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
                    <button className="create-post-btn" onClick={() => navigate('/admin/blog/new')}>
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
                            {filteredPosts.map(post => (
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
                                        <button className="action-btn edit" title="Edit Content">
                                            <Edit size={16} />
                                        </button>
                                        <button
                                            className="action-btn delete"
                                            title="Delete Post"
                                            onClick={() => deletePost(post.id)}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            <style>{`
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
          padding: 10px 15px;
          gap: 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .search-box input {
          border: none;
          outline: none;
          width: 100%;
          font-size: 0.95rem;
        }
        .create-post-btn {
          background: #2C3E50;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          transition: 0.2s;
        }
        .create-post-btn:hover {
          background: #34495e;
        }
        .posts-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .posts-table th {
          padding: 15px 20px;
          font-size: 0.85rem;
          color: #888;
          text-transform: uppercase;
          border-bottom: 2px solid #f4f4f4;
        }
        .posts-table td {
          padding: 15px 20px;
          border-bottom: 1px solid #f4f4f4;
          font-size: 0.95rem;
        }
        .post-title-cell {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          color: #2C3E50;
        }
        .cat-badge {
          background: rgba(139, 115, 85, 0.1);
          color: #8B7355;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .actions-cell {
          display: flex;
          gap: 10px;
        }
        .action-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 4px;
          transition: 0.2s;
        }
        .action-btn.edit { color: #2980b9; }
        .action-btn.edit:hover { background: rgba(41, 128, 185, 0.1); }
        .action-btn.delete { color: #c0392b; }
        .action-btn.delete:hover { background: rgba(192, 57, 43, 0.1); }
        
        .save-btn {
          background: #8B7355;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
        }
        .save-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        
        .admin-msg {
          padding: 15px 20px;
          border-radius: 8px;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .admin-msg.success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .admin-msg.error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        
        .back-link {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          padding: 5px;
          margin-right: 15px;
        }
      `}</style>
        </div>
    )
}

export default AdminBlogManager
