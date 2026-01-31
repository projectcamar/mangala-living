import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import {
    LogOut, Package, FileText, Globe, TrendingUp, Clock, ExternalLink,
    ShieldCheck, Loader2, RefreshCcw, AlertTriangle
} from 'lucide-react'
import { logoutAdmin, getAdminToken } from '../utils/adminAuth'
import { ALL_PRODUCTS } from '../data/products'
import { BLOG_POSTS } from '../data/blog'
import { CATEGORIES } from '../data/categories'
import { VisitorTrafficChart, LeadPieChart, CategoricalBarChart } from '../components/DashboardCharts'
import AdminBlogManager from './AdminBlogManager'
import './Admin.css'

const AdminDashboard: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<'overview' | 'blog'>('overview')
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [dashboardData, setDashboardData] = useState<any>(null)
    const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date())

    const fetchData = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const token = getAdminToken()
            const response = await fetch('/api/admin/leads', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (!response.ok) {
                throw new Error('Failed to fetch lead data')
            }

            const result = await response.json()
            if (result.success) {
                setDashboardData(result.data)
            } else {
                throw new Error(result.error || 'Unknown error occurred')
            }
        } catch (err: any) {
            console.error('Dashboard fetch error:', err)
            setError(err.message || 'Error loading dashboard data')
        } finally {
            setIsLoading(false)
            setLastRefreshed(new Date())
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // Content counts from local data
    const contentStats = {
        products: ALL_PRODUCTS.length,
        articles: BLOG_POSTS.length,
        categories: CATEGORIES.length,
        languages: 8,
    }

    if (error) {
        return (
            <div className="admin-dashboard error-state">
                <div className="error-card">
                    <AlertTriangle size={48} color="#e74c3c" />
                    <h2>Connection Error</h2>
                    <p>{error}</p>
                    <button onClick={fetchData} className="retry-btn">
                        <RefreshCcw size={16} /> Retry Connection
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="admin-dashboard">
            <Helmet>
                <title>Live Dashboard | Admin | Mangala Living</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <header className="admin-header">
                <div className="admin-header-title">
                    <h1>MANGALA <span style={{ color: '#8B7355' }}>LIVING</span></h1>
                    <div className="status-indicator-container">
                        <div className="status-dot online"></div>
                        <span className="status-text">LIVE PANEL</span>
                    </div>
                </div>

                <div className="admin-user-nav">
                    <div className="admin-user-info">
                        <div className="user-avatar"><ShieldCheck size={20} /></div>
                        <div className="user-details">
                            <span className="username">rioanggara</span>
                            <span className="role">Root Admin</span>
                        </div>
                    </div>
                    <button onClick={logoutAdmin} className="logout-btn">
                        <LogOut size={16} />
                        <span>Logout</span>
                    </button>
                </div>
            </header>

            <main className="admin-main">
                <div className="dashboard-section-header">
                    <div className="tab-navigation">
                        <button
                            className={`tab-btn ${currentTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setCurrentTab('overview')}
                        >
                            <TrendingUp size={16} /> Overview
                        </button>
                        <button
                            className={`tab-btn ${currentTab === 'blog' ? 'active' : ''}`}
                            onClick={() => setCurrentTab('blog')}
                        >
                            <FileText size={16} /> Blog Posts
                        </button>
                    </div>
                    <div className="refresh-info">
                        <Clock size={14} />
                        <span>Last updated: {lastRefreshed.toLocaleTimeString()}</span>
                        <button onClick={fetchData} disabled={isLoading} className="icon-btn">
                            <RefreshCcw size={14} className={isLoading ? 'animate-spin' : ''} />
                        </button>
                    </div>
                </div>

                {currentTab === 'blog' ? (
                    <AdminBlogManager onBack={() => setCurrentTab('overview')} />
                ) : (
                    <>
                        <section className="dashboard-grid stats-grid">
                            <div className="stat-card">
                                <div className="stat-icon products"><Package size={24} /></div>
                                <div className="stat-info">
                                    <label>Products</label>
                                    <div className="stat-row">
                                        <span className="stat-value">{contentStats.products}</span>
                                        <span className="stat-change tracking">Static Data</span>
                                    </div>
                                </div>
                            </div>

                            <div className="stat-card highlight">
                                <div className="stat-icon trending"><TrendingUp size={24} /></div>
                                <div className="stat-info">
                                    <label>Total Real Leads</label>
                                    <div className="stat-row">
                                        <span className="stat-value">{isLoading ? '...' : dashboardData?.totalLeads || 0}</span>
                                        <span className="stat-change positive">Live from Resend</span>
                                    </div>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon blog"><FileText size={24} /></div>
                                <div className="stat-info">
                                    <label>Blog Articles</label>
                                    <div className="stat-row">
                                        <span className="stat-value">{contentStats.articles}</span>
                                        <span className="stat-change">Active Posts</span>
                                    </div>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon languages"><Globe size={24} /></div>
                                <div className="stat-info">
                                    <label>Multi-Lang</label>
                                    <div className="stat-row">
                                        <span className="stat-value">{contentStats.languages}</span>
                                        <span className="stat-badge">Global Ready</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {isLoading ? (
                            <div className="loading-data-state">
                                <Loader2 className="animate-spin" size={32} />
                                <p>Retrieving real-time analytical data from Resend...</p>
                            </div>
                        ) : (
                            <>
                                <div className="dashboard-row">
                                    <section className="dashboard-card main-chart">
                                        <div className="card-header">
                                            <div className="title-area">
                                                <h3><TrendingUp size={18} /> Lead Generation Trend</h3>
                                                <p>Actual leads tracked over the last 7 days</p>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <VisitorTrafficChart data={dashboardData?.trends || []} />
                                        </div>
                                    </section>

                                    <aside className="dashboard-sidebar">
                                        <section className="dashboard-card mini-chart">
                                            <div className="card-header">
                                                <h3>Lead Types Distribution</h3>
                                            </div>
                                            <div className="card-content">
                                                <LeadPieChart data={dashboardData?.leadDistribution || []} />
                                            </div>
                                        </section>

                                        <section className="dashboard-card mini-chart">
                                            <div className="card-header">
                                                <h3>Metadata Coverage</h3>
                                            </div>
                                            <div className="card-content">
                                                <CategoricalBarChart data={[
                                                    { name: 'Products', value: contentStats.products },
                                                    { name: 'Articles', value: contentStats.articles },
                                                    { name: 'Categories', value: contentStats.categories }
                                                ]} />
                                            </div>
                                        </section>
                                    </aside>
                                </div>

                                <section className="dashboard-card activity-table-section">
                                    <div className="card-header">
                                        <div className="title-area">
                                            <h3><Clock size={18} /> Real Lead Activity Log</h3>
                                            <p>Latest engagement notifications from Resend</p>
                                        </div>
                                        <button className="view-all-btn">Advanced Logs <ExternalLink size={14} /></button>
                                    </div>
                                    <div className="card-content no-padding">
                                        <div className="table-responsive">
                                            <table className="activity-table">
                                                <thead>
                                                    <tr>
                                                        <th>Lead Identifier</th>
                                                        <th>Type</th>
                                                        <th>Status</th>
                                                        <th>Time Captured</th>
                                                        <th>System ID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {dashboardData?.leads?.length > 0 ? (
                                                        dashboardData.leads.map((lead: any) => (
                                                            <tr key={lead.id}>
                                                                <td className="user-cell">
                                                                    <div className="initial-icon">{lead.type.charAt(0)}</div>
                                                                    <div className="visitor-meta">
                                                                        <span className="visitor-name">{lead.email}</span>
                                                                        <span className="visitor-location">Captured via Resend API</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className={`badge-type ${lead.type.toLowerCase().replace(/\s/g, '-')}`}>
                                                                        {lead.type}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <div className="status-badge-live">
                                                                        <div className="dot"></div>
                                                                        <span>{lead.status}</span>
                                                                    </div>
                                                                </td>
                                                                <td><span className="time-text">{lead.dateString}</span></td>
                                                                <td><code className="id-code">{lead.id.slice(0, 8)}...</code></td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan={5} style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
                                                                No lead notifications found in Resend history for the current period.
                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </section>
                            </>
                        )}
                    </>
                )}
            </main>

            <footer className="admin-dashboard-footer border-top">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Mangala Living Admin • Live Retrieval Version</p>
                    <div className="engine-status">
                        <span className="label">Lead Data Source:</span>
                        <span className="status-indicator">Resend REST API (Production)</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default AdminDashboard
