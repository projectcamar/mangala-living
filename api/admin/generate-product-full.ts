

export const config = {
    runtime: 'edge', // Use Edge runtime for faster cold starts
};

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const SYSTEM_PROMPT = `You are a data extraction assistant for Mangala Living, a premium furniture brand.
Your task is to extract product details from raw text and format them into a specific JSON structure.

Input: Raw text describing a furniture product (specs, marketing copy, etc.)
Output: JSON object with the following fields:
- name: Product name (Title Case)
- slug: URL-friendly slug (kebab-case)
- price: Price string (e.g., "Rp3.500.000"). If not found, use "".
- categories: Array of strings (e.g., ["Living Room", "Storage"]). Infer from context if not explicit.
- description: A compelling, premium marketing description (2-3 sentences).
- details: Array of strings for bullet points (e.g., ["Material: Teak Wood", "Dimensions: 200x50x50cm"]). Extract key features/specs.

Rules:
- Be precise and professional.
- Use Indonesian language for content unless the input implies otherwise, but default to Indonesian for this market.
- If information is missing, make a reasonable inference or leave blank/generic.
- Return ONLY the JSON object, no markdown code blocks.`;

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

        // Fallback or specific model handling (similar to generate-product-desc)
        if (model.startsWith('google/') || model.startsWith('anthropic/') || model.startsWith('openai/')) {
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
                const prompt = `
        You are an expert furniture product database assistant for "Mangala Living", a premium industrial furniture manufacturer in Indonesia.
        
        Task: Extract product data from the raw text below and generate content for 8 LANGUAGES:
        1. English (en) - Default/Fallback
        2. Indonesian (id)
        3. Chinese (zh)
        4. Arabic (ar)
        5. Japanese (ja)
        6. Spanish (es)
        7. French (fr)
        8. Korean (ko)

        Raw Input:
        "${rawText}"

        Requirements:
        - **Name**: Create a premium, catchy name (e.g., "Hollowline Industrial Bar Chair").
        - **Slug**: URL-friendly slug (e.g., "hollowline-industrial-bar-chair").
        - **Price**: Estimate in IDR (Indonesian Rupiah) if not provided. Format: "Rp2.500.000".
        - **Categories**: Choose from: Chair, Table, Storage, Bed, Accessories, Custom.
        - **Description**: 2-3 paragraphs. Marketing tone. Highlight "Industrial", "Durable", "Handcrafted in Bekasi".
        - **Details**: 4-6 bullet points (Material, Finish, Dimensions hint).

        Output JSON format ONLY:
        {
            "slug": "string",
            "price": "string",
            "categories": ["string"],
            "translations": {
                "en": { "name": "...", "description": "...", "details": ["..."] },
                "id": { "name": "...", "description": "...", "details": ["..."] },
                "zh": { "name": "...", "description": "...", "details": ["..."] },
                "ar": { "name": "...", "description": "...", "details": ["..."] },
                "ja": { "name": "...", "description": "...", "details": ["..."] },
                "es": { "name": "...", "description": "...", "details": ["..."] },
                "fr": { "name": "...", "description": "...", "details": ["..."] },
                "ko": { "name": "...", "description": "...", "details": ["..."] }
            }
        }
        `;

                let data;
                if(groqClient) {
                    const completion = await groqClient.chat.completions.create({
                        messages: [{ role: 'user', content: prompt }],
                        model: model || 'llama-3.3-70b-versatile',
                        temperature: 0.7,
                        max_tokens: 4000,
                        response_format: { type: 'json_object' }
                    });
                    const content = completion.choices[0]?.message?.content;
                    if (!content) throw new Error('No content generated');
                    data = JSON.parse(content);
                } else {
                    // Use fetch for OpenRouter or other non-Groq SDK APIs
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers,
                        body: JSON.stringify({
                            model,
                            messages: [
                                { role: 'user', content: prompt }
                            ],
                            temperature: 0.7, // Lower temperature for more deterministic extraction
                            max_tokens: 4000,
                            response_format: { type: "json_object" } // Force JSON output if supported
                        }),
                    });

                    if(!response.ok) {
            throw new Error(`AI API error: ${response.statusText}`);
        }

            const apiResponse = await response.json();
        let content = apiResponse.choices[0]?.message?.content?.trim();

        // Basic cleanup if markdown blocks are returned despite instructions
        if (content.startsWith('```json')) {
            content = content.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        }
        data = JSON.parse(content);
    }

        // Flatten for the legacy structure if needed, but primarily return the new structure
        // The frontend will handle merging this into the product state
        return new Response(JSON.stringify({
        // Base fields (using English as default)
        slug: data.slug,
        price: data.price,
        categories: data.categories,
        // Legacy top-level fields for fallback
        name: data.translations.en.name,
        description: data.translations.en.description,
        details: data.translations.en.details,
        // New partial structure
        translations: data.translations
    }), {
        headers: { 'Content-Type': 'application/json' }
    });

} catch (error: any) {
    console.error('Magic Fill Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
}
}
