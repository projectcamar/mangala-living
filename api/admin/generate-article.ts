import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

interface GenerateArticleRequest {
    prompt: string;
    category?: string;
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

const SYSTEM_PROMPT = `You are an expert content writer for Mangala Living, a premium industrial furniture manufacturer in Indonesia serving cafes, restaurants, hotels, and offices since 1999.

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

CONTENT GUIDELINES:
- Write in Indonesian language (Bahasa Indonesia)
- Use professional yet friendly tone
- Include specific details about Mangala Living: 25+ years experience, 1000+ projects, workshop in Bekasi
- Mention target customers: cafe, restaurant, hotel, office
- Include practical tips and actionable advice
- Use HTML tags for formatting: <strong>, <em>, <br>
- Create 3-5 sections minimum (you can create more if needed)
- Each section should be substantial (150-300 words)
- Focus on industrial furniture, custom design, durability, and cost-effectiveness
- Include relevant keywords naturally

SECTION VARIETY:
You can create as many sections as needed to cover the topic comprehensively. Common section types:
- "Mengapa [Topic] Penting?"
- "Panduan Praktis & Best Practices"
- "Perbandingan & Data"
- "Solusi Mangala Living"
- "FAQ"
- "Langkah Selanjutnya"

Remember: Output ONLY the JSON object, nothing else.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { prompt, category }: GenerateArticleRequest = req.body;

        if (!prompt || prompt.trim().length === 0) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Call Groq API
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile', // Fast and high-quality model
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
                response_format: { type: 'json_object' }
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
