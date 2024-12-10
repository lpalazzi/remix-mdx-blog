import { blogPostService } from '~/data/blog'
import { Route } from './+types/_route'
import { MaxWidth } from '~/components'
import { BlogPostCard } from './BlogPostCard'

export async function loader() {
  const blogPosts = blogPostService.getAllPosts()
  return { blogPosts }
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { blogPosts } = loaderData
  return (
    <MaxWidth className="py-8">
      <h2 className="mb-4 text-2xl font-medium">Blog posts</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-10">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} meta={post} />
        ))}
      </div>
    </MaxWidth>
  )
}
