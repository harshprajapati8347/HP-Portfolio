export type BlogPost = {
  title: string
  url: string
  topic: string
  platform?: string
}

/**
 * Add posts published anywhere (Hashnode, Medium, Dev.to, company blogs, etc.).
 * The homepage Blog section reads this list only — nothing is fetched at build time.
 */
export const blogPosts: BlogPost[] = []
