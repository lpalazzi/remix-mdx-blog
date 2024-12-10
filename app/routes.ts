import {
  index,
  layout,
  route,
  type RouteConfig,
} from '@react-router/dev/routes'
import fg from 'fast-glob'

export default [
  layout('./routes/_layout.tsx', [
    layout('./routes/_errors.tsx', [
      // pages
      index('./routes/_index/_route.tsx'),
      // posts
      route(
        '/blog/*',
        './posts/blog/_layout.tsx',
        fg
          .sync('*.mdx', {
            cwd: './app/posts/blog',
          })
          .map((filename) =>
            route(filename.replace(/\.mdx$/, ''), `./posts/blog/${filename}`),
          ),
      ),
      route('/*', './routes/_404.tsx'),
    ]),
  ]),
] satisfies RouteConfig
