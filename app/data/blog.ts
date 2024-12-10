import { BasePostService } from '~/utils/postServer'

export type BlogPostFrontmatter = {
  title: string
  publishedDate: string
  image: string
  excerpt: string
}

export const blogPostService = new BasePostService<BlogPostFrontmatter>({
  path: '/app/posts/blog',
})
