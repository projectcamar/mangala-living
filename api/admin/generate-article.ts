import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

interface GenerateArticleRequest {
    prompt: string;
    category?: string;
    model?: string; // Model ID from dropdown
}

interface ArticleContent {
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    introduction: string;
    sections: Array<{
        heading: string;
        content: string;
    }>;
    conclusion: string;
}

const SYSTEM_PROMPT = `You are an expert content writer for Mangala Living, a premium industrial furniture manufacturer serving cafes, restaurants, hotels, and offices since 1999.

Your task is to generate high-quality, SEO-optimized blog articles about furniture, interior design, and commercial space solutions.

IMPORTANT: You MUST respond with ONLY a valid JSON object, no additional text before or after. The JSON must follow this exact structure:

{
  "title": "Article title (max 60 characters, SEO-friendly)",
  "slug": "url-friendly-slug-lowercase-with-hyphens",
  "excerpt": "Brief summary (max 160 characters for meta description)",
  "category": "One of: Tips and Trick, Workshop & Production, Commercial Furniture, About Furniture, Furniture Information, Furniture Guide, Design Inspiration",
  "introduction": "Engaging opening paragraph (2-3 sentences)",
  "sections": [
    {
      "heading": "Section heading",
      "content": "Section content (2-4 paragraphs, use <strong> for bold, <em> for italic, <br> for line breaks)"
    }
  ],
  "conclusion": "Compelling closing paragraph with call-to-action"
}

LANGUAGE SUPPORT:
Mangala Living serves customers in multiple languages. Write the article in the language requested by the user:
- **Indonesian (Bahasa Indonesia)** - Default if not specified
- **English** - For international customers
- **Spanish (Español)** - For Latin American markets
- **Chinese (中文)** - For Chinese-speaking customers
- **Japanese (日本語)** - For Japanese customers
- **Korean (한국어)** - For Korean customers
- **French (Français)** - For French-speaking customers
- **Arabic (العربية)** - For Arabic-speaking customers

If the user's prompt is in a specific language, respond in that language. If the user explicitly requests a language (e.g., "in English", "dalam bahasa Jepang"), use that language.

CONTENT GUIDELINES:
- Use professional yet friendly tone
- Include specific details about Mangala Living: 25+ years experience, 1000+ projects, workshop in Bekasi
- Mention target customers: cafe, restaurant, hotel, office
- Include practical tips and actionable advice
- Use HTML tags for formatting: <strong>, <em>, <br>
- Create 3-5 sections minimum (you can create more if needed)
- Each section should be substantial (150-300 words)
- Focus on industrial furniture, custom design, durability, and cost-effectiveness
- Include relevant keywords naturally

SECTION VARIETY (adapt to language):
You can create as many sections as needed to cover the topic comprehensively. Common section types:
- "Why [Topic] is Important?" / "Mengapa [Topic] Penting?" / "なぜ[Topic]が重要か？"
- "Practical Guide & Best Practices" / "Panduan Praktis & Best Practices"
- "Comparison & Data" / "Perbandingan & Data"
- "Mangala Living Solutions" / "Solusi Mangala Living"
- "FAQ" / "よくある質問"
- "Next Steps" / "Langkah Selanjutnya"

Remember: Output ONLY the JSON object, nothing else.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { prompt, category, model = 'llama-3.3-70b-versatile' }: GenerateArticleRequest = req.body;

        if (!prompt || prompt.trim().length === 0) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Determine which API to use based on model
        const isOpenRouter = model.includes('/');
        const apiUrl = isOpenRouter ? OPENROUTER_API_URL : GROQ_API_URL;
        const apiKey = isOpenRouter ? OPENROUTER_API_KEY : GROQ_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: `API key not configured for ${isOpenRouter ? 'OpenRouter' : 'Groq'}`
            });
        }

        // Prepare headers
        const headers: Record<string, string> = {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        };

        // Add OpenRouter-specific headers
        if (isOpenRouter) {
            headers['HTTP-Referer'] = 'https://mangalaliving.com';
            headers['X-Title'] = 'Mangala Living Blog Generator';
        }

        // Call AI API
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                model,
                messages: [
                    {
                        role: 'system',
                        content: SYSTEM_PROMPT
                    },
                    {
                        role: 'user',
                        content: `Generate a blog article about: ${prompt}${category ? `\nPreferred category: ${category}` : ''}`
                    }
                ],
                temperature: 0.7,
                max_tokens: 4000,
                ...(isOpenRouter ? {} : { response_format: { type: 'json_object' } })
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Groq API error:', errorData);
            return res.status(response.status).json({
                error: 'AI generation failed',
                details: errorData
            });
        }

        const data = await response.json();
        const aiResponse = data.choices[0]?.message?.content;

        if (!aiResponse) {
            return res.status(500).json({ error: 'No response from AI' });
        }

        // Parse AI response
        let articleContent: ArticleContent;
        try {
            articleContent = JSON.parse(aiResponse);
        } catch (parseError) {
            console.error('Failed to parse AI response:', aiResponse);
            return res.status(500).json({
                error: 'Invalid AI response format',
                rawResponse: aiResponse
            });
        }

        // Validate required fields
        if (!articleContent.title || !articleContent.slug || !articleContent.introduction) {
            return res.status(500).json({
                error: 'AI response missing required fields',
                received: articleContent
            });
        }

        return res.status(200).json({
            success: true,
            article: articleContent
        });

    } catch (error) {
        console.error('Generate article error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}
