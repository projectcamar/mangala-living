import type { VercelRequest, VercelResponse } from '@vercel/node';
import { IncomingForm } from 'formidable';
import fs from 'fs';

// Configure formidable to parse multipart/form-data
export const config = {
    api: {
        bodyParser: false,
    },
};

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const ALLOWED_VIDEO_TYPES = ['video/mp4', 'video/webm'];
const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_VIDEO_SIZE = 50 * 1024 * 1024; // 50MB

function sanitizeFilename(filename: string): string {
    return filename
        .toLowerCase()
        .replace(/[^a-z0-9.-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

async function parseForm(req: VercelRequest): Promise<{ fields: any; files: any }> {
    return new Promise((resolve, reject) => {
        const form = new IncomingForm({
            maxFileSize: MAX_VIDEO_SIZE,
        });

        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            else resolve({ fields, files });
        });
    });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_REPO = process.env.GITHUB_REPO || 'projectcamar/mangala-living';
    const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

    if (!GITHUB_TOKEN) {
        return res.status(500).json({
            error: 'GitHub token not configured',
            details: 'Please set GITHUB_TOKEN in Vercel environment variables',
        });
    }

    try {
        // Parse the multipart form data
        const { fields, files } = await parseForm(req);

        const file = Array.isArray(files.file) ? files.file[0] : files.file;

        if (!file) {
            return res.status(400).json({
                error: 'No file provided',
                details: 'Please upload a file',
            });
        }

        const fileType = file.mimetype || '';
        const fileSize = file.size || 0;
        const originalFilename = file.originalFilename || 'unnamed';

        // Validate file type
        const isImage = ALLOWED_IMAGE_TYPES.includes(fileType);
        const isVideo = ALLOWED_VIDEO_TYPES.includes(fileType);

        if (!isImage && !isVideo) {
            return res.status(400).json({
                error: 'Invalid file type',
                details: `Only images (${ALLOWED_IMAGE_TYPES.join(', ')}) and videos (${ALLOWED_VIDEO_TYPES.join(', ')}) are allowed`,
            });
        }

        // Validate file size
        const maxSize = isImage ? MAX_IMAGE_SIZE : MAX_VIDEO_SIZE;
        if (fileSize > maxSize) {
            return res.status(400).json({
                error: 'File too large',
                details: `${isImage ? 'Images' : 'Videos'} must be under ${maxSize / 1024 / 1024}MB`,
            });
        }

        // Read the file
        const fileBuffer = fs.readFileSync(file.filepath);
        const base64Content = fileBuffer.toString('base64');

        // Sanitize filename
        const sanitizedFilename = sanitizeFilename(originalFilename);
        const targetPath = `public/images/products/${sanitizedFilename}`;

        // Upload to GitHub
        const [owner, repo] = GITHUB_REPO.split('/');

        // Check if file exists (optional - for overwrite detection)
        const checkUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${targetPath}?ref=${GITHUB_BRANCH}`;
        const checkResponse = await fetch(checkUrl, {
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Mangala-Admin-Bot',
            },
        });

        let sha: string | undefined;
        if (checkResponse.ok) {
            const existingFile = await checkResponse.json();
            sha = existingFile.sha; // Use SHA for overwrite
        }

        // Upload file
        const uploadUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${targetPath}`;
        const uploadResponse = await fetch(uploadUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
                'User-Agent': 'Mangala-Admin-Bot',
            },
            body: JSON.stringify({
                message: `Upload product media: ${sanitizedFilename}`,
                content: base64Content,
                branch: GITHUB_BRANCH,
                ...(sha && { sha }), // Include SHA if file exists (for overwrite)
            }),
        });

        if (!uploadResponse.ok) {
            const errorData = await uploadResponse.json();
            throw new Error(`Failed to upload file to GitHub: ${errorData.message || uploadResponse.statusText}`);
        }

        const uploadResult = await uploadResponse.json();

        // Return the public path
        const publicPath = `/images/products/${sanitizedFilename}`;

        return res.status(200).json({
            success: true,
            message: 'File uploaded successfully',
            path: publicPath,
            filename: sanitizedFilename,
            type: isImage ? 'image' : 'video',
            size: fileSize,
            commitUrl: uploadResult.commit?.html_url,
        });
    } catch (error: any) {
        console.error('[UPLOAD_ERROR]', error);
        return res.status(500).json({
            error: 'Failed to upload file',
            details: error.message,
        });
    }
}
