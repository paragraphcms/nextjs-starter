import type { Page } from "@paragraphcms/client"
import { ParagraphContent } from "@paragraphcms/parser-react"

export function Post({ page }: { page: Page }) {
  return (
    <main>
      <h1>{page.title}</h1>
      <ParagraphContent content={page.content} />
    </main>
  )
}
