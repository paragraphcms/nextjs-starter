import Link from "next/link"

type BlogPost = {
  id: string
  slug: string
  title: string
}

export function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <main>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
