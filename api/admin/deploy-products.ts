import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Octokit } from '@octokit/rest'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const REPO_OWNER = 'Las-Bekasi'
const REPO_NAME = 'mangala-living'
const BRANCH = 'main' // or 'master', check your repo

const octokit = new Octokit({
    auth: GITHUB_TOKEN,
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    if (!GITHUB_TOKEN) {
        return res.status(500).json({ error: 'GITHUB_TOKEN not configured' })
    }

    try {
        const { products, descriptions, images, video } = req.body

        // 1. Upload Images to public/images/products/
        if (images && Array.isArray(images)) {
            for (const img of images) {
                if (img.content && img.filename) {
                    // Check if it's a base64 content (new upload)
                    const content = img.content.split(',')[1] // Remove data:image/jpeg;base64,

                    await octokit.repos.createOrUpdateFileContents({
                        owner: REPO_OWNER,
                        repo: REPO_NAME,
                        path: `public/images/products/${img.filename}`,
                        message: `Upload product image: ${img.filename}`,
                        content: content,
                        branch: BRANCH,
                    })
                }
            }
        }

        // 2. Upload Video to public/images/products/ (if any)
        if (video && video.content && video.filename) {
            const content = video.content.split(',')[1] // Remove data:video/mp4;base64,

            await octokit.repos.createOrUpdateFileContents({
                owner: REPO_OWNER,
                repo: REPO_NAME,
                path: `public/images/products/${video.filename}`,
                message: `Upload product video: ${video.filename}`,
                content: content,
                branch: BRANCH,
            })
        }

        // 3. Update src/data/products.ts
        // We need to format the TS file content manually
        const productsTsContent = `import { Product } from './product-types'\n\nexport const ALL_PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)}`

        // Get current SHA for products.ts
        const { data: currentProductsFile } = await octokit.repos.getContent({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            path: 'src/data/products.ts',
            ref: BRANCH,
        })

        if (!Array.isArray(currentProductsFile)) {
            await octokit.repos.createOrUpdateFileContents({
                owner: REPO_OWNER,
                repo: REPO_NAME,
                path: 'src/data/products.ts',
                message: 'Update products data via Admin',
                content: Buffer.from(productsTsContent).toString('base64'),
                sha: currentProductsFile.sha,
                branch: BRANCH,
            })
        }

        // 4. Update src/data/product-descriptions.json
        const descriptionsJsonContent = JSON.stringify(descriptions, null, 2)

        // Get current SHA for product-descriptions.json
        let descriptionsSha: string | undefined
        try {
            const { data: currentDescFile } = await octokit.repos.getContent({
                owner: REPO_OWNER,
                repo: REPO_NAME,
                path: 'src/data/product-descriptions.json',
                ref: BRANCH,
            })
            if (!Array.isArray(currentDescFile)) {
                descriptionsSha = currentDescFile.sha
            }
        } catch (e) {
            // File might not exist yet, which is fine
        }

        await octokit.repos.createOrUpdateFileContents({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            path: 'src/data/product-descriptions.json',
            message: 'Update product descriptions via Admin',
            content: Buffer.from(descriptionsJsonContent).toString('base64'),
            sha: descriptionsSha,
            branch: BRANCH,
        })

        return res.status(200).json({ success: true, message: 'Products deployed successfully' })
    } catch (error: any) {
        console.error('Deploy error:', error)
        return res.status(500).json({ error: 'Failed to deploy products', details: error.message })
    }
}
