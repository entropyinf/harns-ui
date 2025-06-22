import Cookies from 'js-cookie'
import { cn } from '@/lib/utils'
import { SearchProvider } from '@/context/search-context'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/pages/layout/app-sidebar'
import SkipToMain from '@/components/skip-to-main'
import { Outlet, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { pages, Route } from '@/router'

interface Props {
  children?: React.ReactNode
}

export function AuthenticatedLayout({ children }: Props) {
  const defaultOpen = Cookies.get('sidebar_state') !== 'false'
  const locationTitle = useMemo(() => {
    const map: Record<string, string> = {}

    function fillMap(route:Route) {
      map[route.path || '/'] = route.title || ''
      route.children?.forEach(fillMap)
    }
    pages.forEach(fillMap)
    return map
  }, [])


  const localtion = useLocation()

  return (
    <SearchProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <SkipToMain />
        <AppSidebar />
        <div
          id='content'
          className={cn(
            'ml-auto w-full max-w-full',
            'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
            'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
            'sm:transition-[width] sm:duration-200 sm:ease-linear',
            'flex h-svh flex-col',
            'group-data-[scroll-locked=1]/body:h-full',
            'has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh'
          )}
        >

          <p className='text-xl font-bold m-2 p-4 border-b-1'>
            {locationTitle[localtion.pathname ||'']}
          </p>

          {children ? children : <Outlet />}
        </div>
      </SidebarProvider>
    </SearchProvider>
  )
}
