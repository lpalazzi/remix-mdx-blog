# remix-mdx-blog

A template for a simple blog website using MDX. Built using Vite + React Router (Remix).

## Stack

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [@mdx-js/react](https://mdxjs.com/packages/react/)
- [TailwindCSS](https://tailwindcss.com/)

## How to Use

- Routes are configured in [app/routes.ts](app/routes.ts). See the [React Router docs](https://reactrouter.com/start/framework/routing) for details on how to use this file.
- MDX files for blog posts are kept in the [app/posts/blog](app/posts/blog) folder. To add a blog post, simply add another `.mdx` file to that folder and it will automatically add a route for that post using the filename as the route's slug.
- Specify React components to use for mapping MDX components in the `MDXProvider` in [app/posts/blog/_layout.tsx](app/posts/blog/_layout.tsx).

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

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
