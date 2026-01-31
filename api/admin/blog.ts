import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

// This API is intended for LOCAL development use to manage blog posts
// In a real production environment with Vercel, fs.writeFileSync will not persist
// and might not even work depending on the environment.
// For this project, we are assuming it's used as a local CMS during dev.

const BLOG_DATA_PATH = path.resolve(process.cwd(), 'src/data/blog.ts');
const BLOG_CONTENT_PATH = path.resolve(process.cwd(), 'src/data/blogContent.ts');

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { method } = req;

    // Simple Auth Check (using the same token mechanism as leads)
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        switch (method) {
            case 'GET':
                // The frontend already has access to the data via imports, 
                // but this could be used to get the raw file content if needed.
                return res.status(200).json({ message: 'Use imports for reading data' });

            case 'POST':
            case 'PUT':
                const { posts, contents } = req.body;

                if (posts) {
                    const postsContent = `export interface BlogPost {
  id: number
  slug: string
  title: string
  category: string
  excerpt: string
  image: string
  date: string
  author?: string
}

export const BLOG_POSTS: BlogPost[] = ${JSON.stringify(posts, null, 2)}

export const getPostBySlug = (slug: string) => BLOG_POSTS.find(p => p.slug === slug)
`;
                    fs.writeFileSync(BLOG_DATA_PATH, postsContent);
                }

                if (contents) {
                    // Note: This is a simplified overwrite. 
                    // In a real scenario, we'd need to handle the imports and helper functions in blogContent.ts
                    // For now, we will read the existing file and only replace the BLOG_CONTENTS array part
                    let existingContent = fs.readFileSync(BLOG_CONTENT_PATH, 'utf8');

                    const startMarker = 'const BLOG_CONTENTS: BlogContent[] = [';
                    const startIndex = existingContent.indexOf(startMarker);

                    if (startIndex !== -1) {
                        const newContentsString = `const BLOG_CONTENTS: BlogContent[] = ${JSON.stringify(contents, null, 2)}`;
                        // This is a bit risky without a proper parser, but for this specific structure it works
                        // We find the end of the array by looking for the last ]; before export default 
                        const endIndex = existingContent.lastIndexOf('];');

                        if (endIndex > startIndex) {
                            const updatedFile = existingContent.substring(0, startIndex) +
                                newContentsString +
                                existingContent.substring(endIndex + 2);
                            fs.writeFileSync(BLOG_CONTENT_PATH, updatedFile);
                        }
                    }
                }

                return res.status(200).json({ success: true, message: 'Blog data updated successfully' });

            default:
                res.setHeader('Allow', ['GET', 'POST', 'PUT']);
                return res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error: any) {
        console.error('[BLOG API] Error:', error);
        return res.status(500).json({ error: error.message || 'Failed to update blog data' });
    }
}
