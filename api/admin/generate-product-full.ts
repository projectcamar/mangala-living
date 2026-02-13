import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

interface GenerateProductRequest {
    sourceText?: string;
    category?: string;
    model?: string;
    language?: string;
}

const SYSTEM_PROMPT = `You are a professional copywriter for Mangala Living, a premium industrial furniture manufacturer.
Your task is to generate complete product data from a source text or minimal input.

Features of Mangala Living products:
- Industrial style (metal + wood)
- High durability and quality
- Custom designs available
- Perfect for cafes, restaurants, hotels, and modern homes including minimalism, japandi, and scandinavian style.

Output format (JSON ONLY, no markdown):
{
  "name": "Product Name",
  "slug": "product-name-slug",
  "description": "50-100 words compelling description",
  "productDetails": ["Feature 1", "Feature 2", "Feature 3"]
}

Rules:
- Slug must be lowercase, hyphenated, URL-friendly
- Description: Professional, Premium, Persuasive tone
- Product Details: 3-5 key features, concise bullet points
- Return ONLY valid JSON, no additional text`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { sourceText, category, model = 'llama-3.3-70b-versatile', language = 'id' }: GenerateProductRequest = req.body;

        if (!sourceText && !category) {
            return res.status(400).json({ error: 'Source text or category is required' });
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

        const prompt = sourceText
            ? `Generate complete product data from this source text:\n\n${sourceText}\n\nCategory: ${category || 'Furniture'}\nLanguage: ${language === 'id' ? 'Indonesian (Bahasa Indonesia)' : 'English'}`
            : `Generate product data for a ${category} item.\nLanguage: ${language === 'id' ? 'Indonesian (Bahasa Indonesia)' : 'English'}`;

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
                max_tokens: 500,
            }),
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const data = await response.json();
        const content = data.choices[0]?.message?.content?.trim();

        // Parse JSON from content
        let productData;
        try {
            // Remove markdown code blocks if present
            const jsonText = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            productData = JSON.parse(jsonText);
        } catch (parseError) {
            console.error('JSON parse error:', parseError);
            return res.status(500).json({ error: 'Failed to parse AI response', rawContent: content });
        }

        return res.status(200).json({ success: true, ...productData });

    } catch (error) {
        console.error('Generate product error:', error);
        return res.status(500).json({ error: 'Failed to generate product data' });
    }
}
