import { Link } from 'react-router'
import { PostMeta } from '~/utils/basePostService'
import { BlogPostFrontmatter } from '~/data/blog'

export const BlogPostCard: React.FC<{
  meta: PostMeta<BlogPostFrontmatter>
}> = ({ meta }) => {
  const { frontmatter, slug } = meta
  return (
    <div>
      <Link to={`/blog/${slug}`} prefetch="intent">
        <img
          src={frontmatter.image}
          className="h-[200px] w-full rounded object-cover md:h-[200px]"
          width={1200}
          height={800}
        />
      </Link>
      <div className="mb-2 mt-4">
        <Link
          to={`/blog/${slug}`}
          prefetch="intent"
          className="flex flex-row items-center justify-start gap-2 text-lg font-semibold hover:underline"
        >
          {frontmatter.title}
        </Link>
        <p className="mb-2 mt-1 text-sm opacity-85">
          {frontmatter.publishedDate}
        </p>
        <p className="line-clamp-5 text-base">{frontmatter.excerpt}</p>
      </div>
    </div>
  )
}
