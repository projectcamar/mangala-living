import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { products, productDescriptions, assets, commitMessage = 'Update products via admin' } = req.body;

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
        const productsFilePath = 'src/data/products.ts';
        const descriptionsFilePath = 'src/data/product-descriptions.json';

        // Step 0: Upload Assets (Images & Videos)
        if (assets && Array.isArray(assets) && assets.length > 0) {
            for (const asset of assets) {
                // asset: { path: 'public/images/products/filename.jpg', content: 'base64...' }
                if (!asset.path || !asset.content) continue;

                // Remove data uri prefix if present (e.g. data:image/png;base64,)
                const content = asset.content.split(',')[1] || asset.content;

                const uploadUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${asset.path}`;

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
                        message: `Upload asset: ${asset.path.split('/').pop()}`,
                        content: content,
                        branch: GITHUB_BRANCH,
                        ...(sha ? { sha } : {})
                    })
                });
            }
        }

        // Step 1: Update src/data/products.ts
        const getProductsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${productsFilePath}?ref=${GITHUB_BRANCH}`, {
            headers: { 'Authorization': `Bearer ${GITHUB_TOKEN}`, 'Accept': 'application/vnd.github.v3+json' }
        });

        if (!getProductsResponse.ok) throw new Error(`Failed to fetch ${productsFilePath}`);

        const productsFileData = await getProductsResponse.json();
        const currentProductsContent = Buffer.from(productsFileData.content, 'base64').toString('utf8');

        const newProductsJson = JSON.stringify(products, null, 2);
        // Regex to match "export const ALL_PRODUCTS: Product[] = [...]"
        // Note: The original file has type annotation.
        const newProductsContent = currentProductsContent.replace(
            /(export const ALL_PRODUCTS: Product\[\] = )\[[\s\S]*?\](\s*$)/,
            `$1${newProductsJson}$2`
        );

        if (newProductsContent !== currentProductsContent) {
            await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${productsFilePath}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: commitMessage,
                    content: Buffer.from(newProductsContent).toString('base64'),
                    sha: productsFileData.sha,
                    branch: GITHUB_BRANCH
                })
            });
        }

        // Step 2: Update src/data/product-descriptions.json (if provided)
        if (productDescriptions) {
            const getDescResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${descriptionsFilePath}?ref=${GITHUB_BRANCH}`, {
                headers: { 'Authorization': `Bearer ${GITHUB_TOKEN}`, 'Accept': 'application/vnd.github.v3+json' }
            });

            // If file doesn't exist on GitHub yet (first time), handle 404
            let descSha: string | undefined;
            if (getDescResponse.ok) {
                const descData = await getDescResponse.json();
                descSha = descData.sha;
            }

            // We overwrite the JSON with the new full object
            const newDescContent = JSON.stringify(productDescriptions, null, 2);

            await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${descriptionsFilePath}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: commitMessage + ' (descriptions)',
                    content: Buffer.from(newDescContent).toString('base64'),
                    sha: descSha,
                    branch: GITHUB_BRANCH
                })
            });
        }

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
