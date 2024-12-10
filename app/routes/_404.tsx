import { data, Outlet } from 'react-router'
import { Route } from './+types/_404'

export function loader({ params }: Route.LoaderArgs) {
  const path = params['*']
  throw data(`Page not found: ${path}`, { status: 404 })
}

export default function Index() {
  return <Outlet />
}
