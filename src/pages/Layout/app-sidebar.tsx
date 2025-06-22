import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/pages/layout/nav-group'
import { NavUser } from '@/pages/layout/nav-user'
import { TeamSwitcher } from '@/pages/layout/team-switcher'
import { sidebarData } from './data/sidebar-data'
import { pages, Route } from '@/router'
import { NavCollapsible, NavItem } from './types'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const navGroup = routesToNavGroup(pages)
  return (
    <Sidebar collapsible='icon' variant='floating' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavGroup key={navGroup.title} {...navGroup} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}



function routesToNavGroup(routes: Route[]) {
  return {
    title: 'base',
    items: routes?.map(routeToNavItem) ?? []
  }
}

function routeToNavItem(route: Route): NavItem {
  if (route.children) {
    return {
      title: route.title || '',
      icon: route.Icon,
      items: route.children.map(routeToNavItem)
    } as NavCollapsible
  }

  return {
    title: route.title || '',
    icon: route.Icon,
    url: route.path || '',
  }
}



