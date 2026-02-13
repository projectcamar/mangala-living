import type { VercelRequest, VercelResponse } from '@vercel/node'
import Groq from 'groq-sdk'

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    if (!process.env.GROQ_API_KEY) {
        return res.status(500).json({ error: 'GROQ_API_KEY not configured' })
    }

    try {
        const { rawText, model = 'llama-3.3-70b-versatile' } = req.body

        const systemPrompt = `You are an expert furniture product manager for Mangala Living, a premium industrial furniture workshop in Indonesia.
    Extract and generate product details from the raw text provided.
    
    You MUST output a valid JSON object with this EXACT structure (no markdown, no extra text):
    {
      "name": "Product Name",
      "slug": "product-slug",
      "price": "IDR 2.500.000",
      "categories": ["Category 1", "Category 2"],
      "details": ["Detail 1", "Detail 2"],
      "descriptions": {
         "en": { "name": "", "caption": "", "shortCaption": "", "description": "", "metaDescription": "", "imageAlt": "" },
         "id": { "name": "", "caption": "", "shortCaption": "", "description": "", "metaDescription": "", "imageAlt": "" },
         "ar": { "name": "", "caption": "", "shortCaption": "", "description": "", "metaDescription": "", "imageAlt": "" },
         "zh": { "name": "", "caption": "", "shortCaption": "", "description": "", "metaDescription": "", "imageAlt": "" },
         "ja": { "name": "", "caption": "", "shortCaption": "", "description": "", "metaDescription": "", "imageAlt": "" },
         "es": { "name": "", "caption": "", "shortCaption": "", "description": "", "metaDescription": "", "imageAlt": "" },
         "fr": { "name": "", "caption": "", "shortCaption": "", "description": "", "metaDescription": "", "imageAlt": "" },
         "ko": { "name": "", "caption": "", "shortCaption": "", "description": "", "metaDescription": "", "imageAlt": "" }
      }
    }
    
    GUIDELINES:
    1. Slug: lowercase, kebab-case.
    2. Price: Format as "IDR X.XXX.XXX". If no price found, estimate based on similar industrial furniture (e.g., Chair ~1.5M, Table ~3-5M).
    3. Details: Technical specs (dimensions, material, finish).
    4. Descriptions:
       - Generate high-quality marketing copy for EACH language.
       - "name": Localized product name.
       - "caption": Catchy caption for social media.
       - "description": 2-3 paragraphs. Mention "Mangala Living", "Bekasi Workshop", "Industrial Design".
       - "metaDescription": SEO optimized, under 160 chars.
       - "imageAlt": Descriptive alt text for SEO.
    `

        const completion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: rawText }
            ],
            model: model,
            temperature: 0.3,
        })

        const content = completion.choices[0]?.message?.content || '{}'
        // Clean up if the AI returned markdown code blocks
        const jsonStr = content.replace(/```json\n?|```/g, '').trim()
        const data = JSON.parse(jsonStr)

        return res.status(200).json(data)
    } catch (error: any) {
        console.error('Generate Product Full error:', error)
        return res.status(500).json({ error: 'Failed to generate product details', details: error.message })
    }
}
