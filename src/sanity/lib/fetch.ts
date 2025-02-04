import { createClient } from '@sanity/client'



export const client = createClient({
    projectId: "q1y488rr",
    dataset: "production",
    useCdn: true,
    apiVersion: '2025-01-13',
    
  });
