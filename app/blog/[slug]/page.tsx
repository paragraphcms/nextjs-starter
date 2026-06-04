import { Post } from "@/components/blog/post"
import { client } from "@/paragraph.config"

export const dynamicParams = false

export async function generateStaticParams() {
  const { data, error } = await client.pages.list({
    requiredSlug: true,
  })

  if (error) {
    throw error
  }

  return data
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { data, error } = await client.page.getBySlug(slug)

  if (error) {
    throw error
  }

  return <Post page={data} />
}
