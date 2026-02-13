import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

interface GenerateProductRequest {
    sourceText?: string;
    category?: string;
    model?: string;
}

const SYSTEM_PROMPT = `You are a professional multilanguage copywriter for Mangala Living, a premium industrial furniture manufacturer.
Your task is to generate complete product data in ALL 8 LANGUAGES simultaneously from a source text or minimal input.

Features of Mangala Living products:
- Industrial style (metal + wood)
- High durability and quality
- Custom designs available
- Perfect for cafes, restaurants, hotels, and modern homes including minimalism, japandi, and scandinavian style.

OUTPUT FORMAT - You MUST return JSON in this EXACT structure (no markdown code blocks):
{
  "slug": "product-name-slug",
  "translations": {
    "id": {
      "name": "Nama Produk dalam Bahasa Indonesia",
      "description": "Deskripsi 50-100 kata dalam Bahasa Indonesia",
      "productDetails": ["Fitur 1", "Fitur 2", "Fitur 3"]
    },
    "en": {
      "name": "Product Name in English",
      "description": "50-100 words description in English",
      "productDetails": ["Feature 1", "Feature 2", "Feature 3"]
    },
    "ar": {
      "name": "اسم المنتج بالعربية",
      "description": "وصف 50-100 كلمة بالعربية",
      "productDetails": ["ميزة 1", "ميزة 2", "ميزة 3"]
    },
    "zh": {
      "name": "中文产品名称",
      "description": "50-100字中文描述",
      "productDetails": ["特点1", "特点2", "特点3"]
    },
    "ja": {
      "name": "日本語の製品名",
      "description": "50〜100語の日本語説明",
      "productDetails": ["特徴1", "特徴2", "特徴3"]
    },
    "es": {
      "name": "Nombre del producto en español",
      "description": "Descripción de 50-100 palabras en español",
      "productDetails": ["Característica 1", "Característica 2", "Característica 3"]
    },
    "fr": {
      "name": "Nom du produit en français",
      "description": "Description de 50-100 mots en français",
      "productDetails": ["Caractéristique 1", "Caractéristique 2", "Caractéristique 3"]
    },
    "ko": {
      "name": "한국어 제품명",
      "description": "50~100단어 한국어 설명",
      "productDetails": ["특징 1", "특징 2", "특징 3"]
    }
  }
}

CRITICAL RULES:
- Generate content for ALL 8 languages: id, en, ar, zh, ja, es, fr, ko
- Slug must be lowercase, hyphenated, URL-friendly (in English)
- Descriptions: Professional, Premium, Persuasive tone (50-100 words per language)
- Product Details: 3-5 key features per language, concise bullet points
- Each language must have native, natural translations (not literal word-for-word)
- Return ONLY valid JSON, absolutely NO markdown code blocks or extra text`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { sourceText, category, model = 'llama-3.3-70b-versatile' }: GenerateProductRequest = req.body;

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
            ? `Generate complete product data in ALL 8 LANGUAGES from this source text:\n\n${sourceText}\n\nCategory: ${category || 'Furniture'}\n\nIMPORTANT: Generate natural, professional translations for ALL 8 languages (id, en, ar, zh, ja, es, fr, ko). Use the exact JSON structure specified in the system prompt.`
            : `Generate product data for a ${category} item in ALL 8 LANGUAGES.\n\nIMPORTANT: Generate natural, professional translations for ALL 8 languages (id, en, ar, zh, ja, es, fr, ko). Use the exact JSON structure specified in the system prompt.`;

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
                max_tokens: 2000, // Increased for 8 languages
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

        // Validate that we have all 8 languages
        const requiredLanguages = ['id', 'en', 'ar', 'zh', 'ja', 'es', 'fr', 'ko'];
        const hasAllLanguages = productData.translations && requiredLanguages.every(
            lang => productData.translations[lang]?.name
        );

        if (!hasAllLanguages) {
            console.warn('Warning: AI did not generate all 8 languages', productData);
        }

        return res.status(200).json({ success: true, ...productData });

    } catch (error) {
        console.error('Generate product error:', error);
        return res.status(500).json({ error: 'Failed to generate product data' });
    }
}
