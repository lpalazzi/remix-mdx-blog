import { Link, Outlet, data } from 'react-router'
import { MDXProvider } from '@mdx-js/react'

import { Route } from './+types/_layout'
import { blogPostService } from '~/services/blog.server'
import {
  ArticleP,
  ArticleH1,
  ArticleH2,
  ArticleUL,
  ArticleLI,
} from '~/components/article-ui'
import { MaxWidth } from '~/components/page-ui'

export function loader({ params }: Route.LoaderArgs) {
  const slug = params['*']
  const frontmatter = blogPostService.getFrontmatter(slug)
  if (!frontmatter) {
    throw data(`Blog post not found: ${slug}`, { status: 404 })
  }
  return {
    frontmatter,
  }
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { frontmatter } = loaderData

  return (
    <MDXProvider
      components={{
        p: ArticleP,
        h1: ArticleH1,
        h2: ArticleH2,
        ul: ArticleUL,
        li: ArticleLI,
      }}
    >
      <MaxWidth className="py-12">
        <Link to="/" prefetch="intent" className="hover:underline">
          ← Home
        </Link>
        <div className="mb-8 mt-2">
          <ArticleH1>{frontmatter.title}</ArticleH1>
          <div className="mt-2 text-base font-normal">
            {frontmatter.publishedDate}
          </div>
        </div>
        <Outlet />
      </MaxWidth>
    </MDXProvider>
  )
}
