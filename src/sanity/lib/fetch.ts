import { createClient } from '@sanity/client'



export const client = createClient({
    projectId: "q1y488rr",
    dataset: "production",
    useCdn: true,
    apiVersion: '2025-01-13',
    
  });

  export async function SanityFetch({query, params = {}}: { query: string, params?: Record<string, any> }){

      return await client.fetch(query,params) 
  }