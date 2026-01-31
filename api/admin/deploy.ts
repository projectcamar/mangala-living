import type { VercelRequest, VercelResponse } from '@vercel/node';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { commitMessage = 'Update blog posts via admin' } = req.body;

    // Security: Verify this is an authenticated admin request
    // You should add proper authentication here

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_REPO = process.env.GITHUB_REPO || 'projectcamar/mangala-living';
    const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

    if (!GITHUB_TOKEN) {
        return res.status(500).json({
            error: 'GitHub token not configured',
            details: 'Please set GITHUB_TOKEN in Vercel environment variables'
        });
    }

    try {
        // Configure git with token
        const repoUrl = `https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git`;

        // Execute git commands
        await execAsync('git config user.email "admin@mangalaliving.com"');
        await execAsync('git config user.name "Mangala Admin Bot"');
        await execAsync('git add .');

        // Check if there are changes to commit
        const { stdout: statusOutput } = await execAsync('git status --porcelain');

        if (!statusOutput.trim()) {
            return res.status(200).json({
                success: true,
                message: 'No changes to commit',
                deployed: false
            });
        }

        await execAsync(`git commit -m "${commitMessage}"`);
        await execAsync(`git push ${repoUrl} ${GITHUB_BRANCH}`);

        return res.status(200).json({
            success: true,
            message: 'Changes committed and pushed successfully. Vercel will auto-deploy.',
            deployed: true
        });
    } catch (error: any) {
        console.error('[AUTO_DEPLOY_ERROR]', error);
        return res.status(500).json({
            error: 'Failed to auto-deploy',
            details: error.message
        });
    }
}
