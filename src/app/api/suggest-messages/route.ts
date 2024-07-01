import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextResponse } from 'next/server'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
})

export const runtime = 'edge' 
export async function POST(req: Request) {

  try {
    const prompt = "Create a list of three open-ended and engaging questions formulated as a single string. Each question should be seperated by '||' These messages are for anonymous social messaging platforms like Qooh.me"
    const { messages } = await req.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-instruct', 
    max_tokens: 400,// replace with the fine-tuned model
    stream: true,
    messages,
  })

  const stream = OpenAIStream(response)
  
  return new StreamingTextResponse(stream)
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
        const {name, status,headers, message} = error
        return NextResponse.json({
            name, status, headers, message
        },{status})
        
    }else{
        console.log("An unexpected error occurred", error)
        throw error
    }
    
  }
}

// import { openai } from '@ai-sdk/openai';
// import { StreamingTextResponse, streamText } from 'ai';

// // Allow streaming responses up to 30 seconds
// export const maxDuration = 30;

// export async function POST(req: Request) {
//   const { messages } = await req.json();

//   const result = await streamText({
//     model: openai('gpt-4-turbo'),
//     messages,
//   });

//   return result.toAIStreamResponse();
// }
