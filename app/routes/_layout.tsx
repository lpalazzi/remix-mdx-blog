import { Outlet } from 'react-router'
import { MetaFunction } from 'react-router'
import { getMetaForRoute } from '~/utils/meta'

export const meta: MetaFunction = (args) => {
  return getMetaForRoute(args, {})
}

export default function AppLayout() {
  return (
    <div className="flex flex-col justify-between font-sans text-base text-black">
      <div className="min-h-screen w-full">
        <div className="flex flex-row items-center justify-center bg-primary px-6 py-4 text-white">
          <h1 className="text-2xl font-semibold">remix-mdx-blog</h1>
        </div>
        <Outlet />
      </div>
      <div className="flex items-center justify-center bg-black/10 py-6 text-sm text-black/50">
        remix-mdx-blog
      </div>
    </div>
  )
}
