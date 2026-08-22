# Harsh Prajapati — SDE Portfolio

Personal developer portfolio built with **TypeScript** and **Next.js 16** (App Router).

**Live:** https://www.iamharsh.in

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Chakra UI v2
- Framer Motion
- Analytics: Google Tag Manager + GA4

## Requirements

- Node.js 20.9+
- pnpm 10

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Content

All repeatable copy lives in [`config/`](config/):

| File | What it controls |
| --- | --- |
| `config/site.ts` | Name, bio, nav, SEO, GTM, contact, section headings |
| `config/projects.ts` | Featured work |
| `config/experience.ts` | Work history |
| `config/skills.ts` | Featured skills + full skill modal |
| `config/blog.ts` | Writing links (title, url, topic, optional platform). Section and nav stay hidden until this list has entries. |
| `config/testimonials.ts` | Testimonials (section hidden when empty) |
| `config/sidebar.ts` | Social links |

Add a blog post by appending to `blogPosts` in `config/blog.ts`:

```ts
{
  title: 'How I ship production Next.js apps',
  url: 'https://hashnode.com/your-post',
  topic: 'Next.js',
  platform: 'Hashnode', // optional
}
```

Optional env: copy `.env.example` to `.env.local` to override `NEXT_PUBLIC_GTM_ID`.

## Connect

- Portfolio: https://www.iamharsh.in
- LinkedIn: https://www.linkedin.com/in/harsh-prajapati-developer/
- GitHub: https://github.com/harshprajapati8347
- Email: harshprajapati0123@gmail.com
