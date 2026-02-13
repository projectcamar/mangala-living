import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

interface GenerateDescriptionRequest {
    name: string;
    category: string;
    keywords?: string;
    model?: string;
    language?: string;
}

const SYSTEM_PROMPT = `You are a professional copywriter for Mangala Living, a premium industrial furniture manufacturer.
Your task is to write a compelling, SEO-friendly product description.

Features of Mangala Living products:
- Industrial style (metal + wood)
- High durability and quality
- Custom designs available
- Perfect for cafes, restaurants, hotels, and modern homes including minimalism, japandi, and scandinavian style.

Output format:
Return ONLY the description text. Do not include quotes or "Here is the description".
Keep it between 50-100 words.
Focus on: Aesthetics, Durability, and Usage context.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, category, keywords, model = 'llama-3.3-70b-versatile', language = 'id' }: GenerateDescriptionRequest = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Product name is required' });
        }

        // Determine API
        const isOpenRouter = model.includes('/');
        const apiUrl = isOpenRouter ? OPENROUTER_API_URL : GROQ_API_URL;
        const apiKey = isOpenRouter ? OPENROUTER_API_KEY : GROQ_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: 'API key not configured' });
        }

        const headers: Record<string, string> = {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        };

        if (isOpenRouter) {
            headers['HTTP-Referer'] = 'https://mangalaliving.com';
            headers['X-Title'] = 'Mangala Living Product Generator';
        }

        const prompt = `Write a product description for:
Product Name: ${name}
Category: ${category}
Keywords/Features: ${keywords || 'Industrial, Sturdy, Premium'}
Language: ${language === 'id' ? 'Indonesian (Bahasa Indonesia)' : 'English'}

Tone: Professional, Premium, Persuasive.`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                model,
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 200,
            }),
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const data = await response.json();
        const description = data.choices[0]?.message?.content?.trim();

        return res.status(200).json({ success: true, description });

    } catch (error) {
        console.error('Generate description error:', error);
        return res.status(500).json({ error: 'Failed to generate description' });
    }
}
