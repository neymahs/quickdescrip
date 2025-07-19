import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()
    console.log('Received prompt:', prompt)

    if (!prompt) {
      return NextResponse.json({ error: 'No prompt provided' }, { status: 400 })
    }

    const apiKey = process.env.TOGETHER_API_KEY
    if (!apiKey) {
      console.error('Missing Together API Key')
      return NextResponse.json({ error: 'Missing API key' }, { status: 500 })
    }

    const response = await fetch('https://api.together.xyz/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo',
        messages: [
          { role: 'system', content: 'You are an expert product description and Etsy tag generator.' },
          { role: 'user', content: `Write a catchy product description and suggest Etsy tags for: ${prompt}` }
        ],
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    console.log('Raw Together AI response:', JSON.stringify(data, null, 2))

    const text = data.choices?.[0]?.message?.content || 'No response'
    console.log('AI response text:', text)

    return NextResponse.json({ text })
  } catch (error) {
    console.error('Error in /api/generate:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
