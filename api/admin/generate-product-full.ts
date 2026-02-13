
export const config = {
    runtime: 'edge', // Use Edge runtime for faster cold starts
};

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const SYSTEM_PROMPT = `You are an expert product content generator for Mangala Living, a premium industrial furniture brand.
Your task is to take raw input text (specs, notes, or existing description) and generate a complete, structured JSON object containing product details and translations for 8 languages.

Input: Raw text about a furniture product.
Output: A JSON object with the following structure:

{
  "slug": "url-friendly-kebab-case-slug-in-english",
  "price": "Price string if found (e.g. 'Rp3.500.000'), else empty string",
  "categories": ["Category1", "Category2"], // Infer from context (e.g., 'Living Room', 'Storage', 'Seating')
  "translations": {
    "en": {
      "name": "Product Name in English",
      "description": "Compelling marketing description in English (2-3 paragraphs). Focus on premium quality, industrial style, and durability.",
      "details": ["Bullet point 1", "Bullet point 2", "Dimensions: ..."],
      "caption": "Short SEO caption for image (1 sentence)",
      "shortCaption": "Very short caption",
      "metaDescription": "SEO meta description (150 chars max)",
      "imageAlt": "SEO optimization image alt text"
    },
    "id": { /* Indonesian translation of above */ },
    "ar": { /* Arabic translation */ },
    "zh": { /* Chinese (Simplified) translation */ },
    "ja": { /* Japanese translation */ },
    "es": { /* Spanish translation */ },
    "fr": { /* French translation */ },
    "ko": { /* Korean translation */ }
  }
}

Languages required:
- en: English
- id: Indonesian (Bahasa Indonesia) - Native, natural tone
- ar: Arabic (Modern Standard)
- zh: Chinese (Simplified)
- ja: Japanese (Polite/Formal)
- es: Spanish
- fr: French
- ko: Korean

Style Guidelines:
- Brand Voice: Premium, Industrial, Handcrafted, Durable, Authentic.
- "Mangala Living" should be mentioned in the description naturally.
- Highlight "Handcrafted in Bekasi workshop since 1999" where appropriate.
- Dimensions should be in Metric (cm).
- For missing details, infer reasonable defaults for industrial furniture or leave generic.

Return ONLY VALID JSON. No markdown formatting.`;

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    try {
        const { rawText, model = 'llama-3.3-70b-versatile' } = await req.json();

        if (!rawText) {
            return new Response(JSON.stringify({ error: 'Raw text is required' }), { status: 400 });
        }

        let apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
        let apiKey = GROQ_API_KEY;
        let headers: Record<string, string> = {
            'Authorization': `Bearer ${GROQ_API_KEY}`,
            'Content-Type': 'application/json'
        };

        // Fallback or specific model handling
        if (model.startsWith('google/') || model.startsWith('anthropic/') || model.startsWith('openai/') || model.startsWith('deepseek/')) {
            apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
            apiKey = OPENROUTER_API_KEY;
            headers = {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': 'https://mangala-living.com',
                'X-Title': 'Mangala Living Admin'
            };
        }

        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'API Key not configured' }), { status: 500 });
        }

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                model,
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    { role: 'user', content: `Generate full product data for:\n\n${rawText}` }
                ],
                temperature: 0.4, // Slightly higher for creativity in translations
                max_tokens: 3000, // Increased for 8 languages
                response_format: { type: "json_object" }
            }),
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`AI API error: ${response.status} ${errText}`);
        }

        const data = await response.json();
        let content = data.choices[0]?.message?.content?.trim();

        // Basic cleanup
        if (content.startsWith('```json')) {
            content = content.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        } else if (content.startsWith('```')) {
            content = content.replace(/^```\s*/, '').replace(/\s*```$/, '');
        }

        let parsedData;
        try {
            parsedData = JSON.parse(content);
        } catch (e) {
            console.error('JSON Parse Error:', content);
            throw new Error('AI failed to generate valid JSON. Try again.');
        }

        return new Response(JSON.stringify(parsedData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error: any) {
        console.error('Magic Fill Error:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
