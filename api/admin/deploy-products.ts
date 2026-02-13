import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { products, images, commitMessage = 'Update products via admin' } = req.body;

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_REPO = process.env.GITHUB_REPO || 'projectcamar/mangala-living';
    const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

    if (!GITHUB_TOKEN) {
        return res.status(500).json({
            error: 'GitHub token not configured',
            details: 'Please set GITHUB_TOKEN in Vercel environment variables'
        });
    }

    if (!products || !Array.isArray(products)) {
        return res.status(400).json({
            error: 'Invalid request',
            details: 'products array is required'
        });
    }

    try {
        const [owner, repo] = GITHUB_REPO.split('/');
        const filePath = 'src/data/products.ts';

        // Step 0: Upload Images if present
        if (images && Array.isArray(images) && images.length > 0) {
            for (const img of images) {
                // img: { path: 'public/images/products/filename.jpg', content: 'base64...' }
                if (!img.path || !img.content) continue;

                // Remove data:image/png;base64, prefix if present
                const content = img.content.split(',')[1] || img.content;

                const uploadUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${img.path}`;

                // Check if file exists to get SHA (for update)
                const checkResponse = await fetch(uploadUrl, {
                    headers: {
                        'Authorization': `Bearer ${GITHUB_TOKEN}`,
                        'Accept': 'application/vnd.github.v3+json',
                        'User-Agent': 'Mangala-Admin-Bot'
                    }
                });

                let sha: string | undefined;
                if (checkResponse.ok) {
                    const data = await checkResponse.json();
                    sha = data.sha;
                }

                await fetch(uploadUrl, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${GITHUB_TOKEN}`,
                        'Accept': 'application/vnd.github.v3+json',
                        'Content-Type': 'application/json',
                        'User-Agent': 'Mangala-Admin-Bot'
                    },
                    body: JSON.stringify({
                        message: `Upload image: ${img.path.split('/').pop()}`,
                        content: content,
                        branch: GITHUB_BRANCH,
                        ...(sha ? { sha } : {})
                    })
                });
            }
        }

        // Step 1: Get current file content and SHA
        const getFileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${GITHUB_BRANCH}`;
        const getFileResponse = await fetch(getFileUrl, {
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Mangala-Admin-Bot'
            }
        });

        if (!getFileResponse.ok) {
            throw new Error(`Failed to fetch file from GitHub: ${getFileResponse.statusText}`);
        }

        const fileData = await getFileResponse.json();
        const currentContent = Buffer.from(fileData.content, 'base64').toString('utf8');
        const sha = fileData.sha;

        // Step 2: Generate new content with updated ALL_PRODUCTS array
        // We need to preserve interfaces and other exports
        const newProductsJson = JSON.stringify(products, null, 2);

        // Regex to replace the array content. 
        // Matches "export const ALL_PRODUCTS: Product[] = [" until the closing "]"
        const newContent = currentContent.replace(
            /(export const ALL_PRODUCTS: Product\[\] = )\[[\s\S]*?\](\s*$)/,
            `$1${newProductsJson}$2`
        );

        // Check if there are actual changes
        if (newContent === currentContent) {
            return res.status(200).json({
                success: true,
                message: 'No changes detected',
                deployed: false
            });
        }

        // Step 3: Commit and push the updated file
        const updateFileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
        const updateFileResponse = await fetch(updateFileUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
                'User-Agent': 'Mangala-Admin-Bot'
            },
            body: JSON.stringify({
                message: commitMessage,
                content: Buffer.from(newContent).toString('base64'),
                sha: sha,
                branch: GITHUB_BRANCH
            })
        });

        if (!updateFileResponse.ok) {
            const errorData = await updateFileResponse.json();
            throw new Error(`Failed to update file on GitHub: ${errorData.message || updateFileResponse.statusText}`);
        }

        const updateResult = await updateFileResponse.json();

        return res.status(200).json({
            success: true,
            message: 'Changes committed and pushed successfully. Vercel will auto-deploy.',
            deployed: true,
            commitUrl: updateResult.commit?.html_url
        });
    } catch (error: any) {
        console.error('[AUTO_DEPLOY_ERROR]', error);
        return res.status(500).json({
            error: 'Failed to auto-deploy',
            details: error.message
        });
    }
}
