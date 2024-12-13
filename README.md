# remix-mdx-blog

A template for a simple blog website using MDX. Built using Vite + React Router (Remix).

## Stack and Dependencies

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [@mdx-js/react](https://mdxjs.com/packages/react/)
- [TailwindCSS](https://tailwindcss.com/)
- [fast-glob](https://www.npmjs.com/package/fast-glob)

## How to Use

- Blog posts are stored in the [app/posts/blog](app/posts/blog) folder as `.mdx` files.
- To add a blog post, simply add another `.mdx` file to that folder using the sample files as a reference.
  - The filename of the blog post will be used as the slug for the route.
  - The `frontmatter` object should match the `BlogPostFrontmatter` type defined in [app/services/blog.server.ts](app/services/blog.server.ts).
- React components that are passed to the `MDXProvider` in [app/posts/blog/\_layout.tsx](app/posts/blog/_layout.tsx) are used for mapping MDX components.

## How it Works

- Routes for each blog post are generated dynamically in [app/routes.ts](app/routes.ts) using [fast-glob](https://www.npmjs.com/package/fast-glob). See the [React Router docs](https://reactrouter.com/start/framework/routing) for details on how to use this file.
- The [BasePostService](app/utils/basePostService.ts) base class is used to fetch posts and their frontmatter data.

## Install and Run

Install the dependencies:

```bash
npm install
```

Start the development server with HMR:

```bash
npm run dev
```

The blog will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

Run the production build:

```bash
npm start
```

## Deployment

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```
