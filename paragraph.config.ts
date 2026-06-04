import { Client } from "@paragraphcms/client"

const apiKey = process.env.PARAGRAPH_API_KEY

if (!apiKey) {
  throw new Error("PARAGRAPH_API_KEY environment variable is not set")
}

export const client = new Client({ apiKey })
