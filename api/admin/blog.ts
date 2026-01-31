import type { VercelRequest, VercelResponse } from '@vercel/node';
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Simple check for dev mode (or some admin flag)
    // In Vercel, fs.writeFile will fail or be ephemeral, which is intended for this "Static CMS" workflow
    // The user will use this locally to update files, then commit/push.

    const BLOG_FILE = path.join(process.cwd(), 'src', 'data', 'blog.ts');
    const BLOG_CONTENT_FILE = path.join(process.cwd(), 'src', 'data', 'blogContent.ts');

    try {
        if (req.method === 'GET') {
            const blogSource = await fs.readFile(BLOG_FILE, 'utf8');
            const contentSource = await fs.readFile(BLOG_CONTENT_FILE, 'utf8');

            return res.status(200).json({ blogSource, contentSource });
        }

        if (req.method === 'POST') {
            const { blogSource, contentSource } = req.body;

            if (blogSource) {
                await fs.writeFile(BLOG_FILE, blogSource, 'utf8');
            }
            if (contentSource) {
                await fs.writeFile(BLOG_CONTENT_FILE, contentSource, 'utf8');
            }

            return res.status(200).json({ success: true, message: 'Source files updated successfully' });
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (error: any) {
        console.error('[BLOG_API_ERROR]', error);
        return res.status(500).json({ error: 'Failed to process request', details: error.message });
    }
}
