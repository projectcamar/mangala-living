import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Basic security check: verify if the request comes from an authenticated source
    // In a real app, we would verify a JWT or session token here.
    // For now, we'll check for a basic custom header if provided, or rely on the process.env check.
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer mangala_admin_session_')) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
        return res.status(500).json({ error: 'Resend API key not configured' });
    }

    try {
        const resend = new Resend(RESEND_API_KEY);

        // Fetch last 100 emails from Resend
        // Note: Resend API for listing emails might require specific permissions or might be restricted to specific plans.
        // If the SDK version doesn't support .emails.list(), we fallback to a fetch call.
        let emailList: any = [];
        try {
            const response = await resend.emails.list();
            emailList = response.data || [];
        } catch (err) {
            console.error('[LEADS API] SDK error, trying fetch fallack:', err);
            const fetchResp = await fetch('https://api.resend.com/emails', {
                headers: { 'Authorization': `Bearer ${RESEND_API_KEY}` }
            });
            const fetchData = await fetchResp.json();
            emailList = fetchData.data || [];
        }

        // Parse emails into leads
        // We look for subjects starting with "Mangala Notification:"
        const leads = emailList
            .filter((email: any) => email.subject && email.subject.startsWith('Mangala Notification:'))
            .map((email: any) => {
                const type = email.subject.replace('Mangala Notification: ', '').toLowerCase().replace(/_/g, ' ');

                // Basic parsing of lead data (we don't have the body here without another API call per email, 
                // so we derive what we can or mock the fine details for the UI while keeping the "Real" count and timing)
                return {
                    id: email.id,
                    name: 'Visitor', // We'd need to fetch email content for the real name
                    email: email.to[0],
                    type: type.charAt(0).toUpperCase() + type.slice(1),
                    time: new Date(email.created_at).getTime(),
                    dateString: new Date(email.created_at).toLocaleString(),
                    status: 'Delivered'
                };
            })
            .sort((a: any, b: any) => b.time - a.time);

        // Aggregate data for charts
        const leadsByType = leads.reduce((acc: any, lead: any) => {
            acc[lead.type] = (acc[lead.type] || 0) + 1;
            return acc;
        }, {});

        // Last 7 days distribution
        const last7Days = Array.from({ length: 7 }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toLocaleDateString('en-US', { weekday: 'short' });
            const count = leads.filter((l: any) => new Date(l.time).toDateString() === d.toDateString()).length;
            return { name: dateStr, count };
        }).reverse();

        return res.status(200).json({
            success: true,
            data: {
                leads: leads.slice(0, 20), // Top 20 for the table
                totalLeads: leads.length,
                leadDistribution: Object.entries(leadsByType).map(([name, value]) => ({ name, value })),
                trends: last7Days
            }
        });

    } catch (error) {
        console.error('[LEADS API] Error fetching leads:', error);
        return res.status(500).json({ error: 'Failed to retrieve real-time lead data' });
    }
}
