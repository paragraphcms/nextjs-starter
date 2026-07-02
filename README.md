# ParagraphCMS Next.js Starter

Ten README jest krótką dokumentacją projektu ParagraphCMS dla przykładu Next.js Starter. Projekt pokazuje podstawowy blog w App Routerze: `/blog` listuje wpisy z ParagraphCMS, a `/blog/[slug]` renderuje treść przez `@paragraphcms/parser-react`.

Oficjalny kontekst: [ParagraphCMS Next.js Quickstart](https://paragraphcms.com/docs/quickstart/nextjs).

## Konfiguracja

1. Skopiuj `.env.example` do `.env`.
2. Ustaw `PARAGRAPH_API_KEY` kluczem API z ParagraphCMS.
3. Wpisy powinny mieć slug, bo `generateStaticParams()` buduje z nich trasy.

## Uruchomienie

```bash
pnpm install
pnpm dev
```

Build i start produkcyjny:

```bash
pnpm build
pnpm start
```

## Najważniejsze pliki

- `paragraph.config.ts` - wspólny klient ParagraphCMS.
- `app/blog/page.tsx` - lista wpisów.
- `app/blog/[slug]/page.tsx` - statyczne strony wpisów.
- `components/blog/` - komponenty listy i pojedynczego wpisu.
