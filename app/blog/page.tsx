import { Blog } from "@/components/blog/blog"
import { client } from "@/paragraph.config"

export default async function Page() {
  const { data, error } = await client.pages.list({
    requiredSlug: true,
  })

  if (error) {
    throw error
  }

  return <Blog posts={data} />
}
