import { MetaDescriptor } from 'react-router'
import ogImage from '~/assets/sample.jpg'

export function getMetaForRoute(
  args: { location: { pathname: string } },
  options?: {
    title?: string
    description?: string
    type?: 'article' | 'website'
    image?: string
  },
): MetaDescriptor[] {
  const { title, description, type = 'website', image } = options || {}

  const BASE_URL = 'https://remix-mdx-blog.com'
  const defaultDescription =
    'A template for building a blog website using Remix/React Router and MDX'

  return [
    {
      title: `${title ? `${title} | ` : ''}remix-mdx-blog`,
    },
    {
      property: 'og:title',
      content: `${title ? `${title} | ` : ''}remix-mdx-blog`,
    },
    {
      property: 'og:type',
      content: type,
    },
    {
      property: 'og:site_name',
      content: 'remix-mdx-blog',
    },
    {
      name: 'description',
      content: description ? description : defaultDescription,
    },
    {
      property: 'og:description',
      content: description ? description : defaultDescription,
    },
    {
      property: 'og:url',
      content: `${BASE_URL}${args.location.pathname}`,
    },
    {
      property: 'og:image',
      content: `${BASE_URL}${image ? image : ogImage}`,
    },
  ]
}
