import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/pages/layout/nav-group'
import { pages, Route } from '@/router'
import { NavCollapsible, NavItem } from './types'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const navGroup = routesToNavGroup(pages)
	return (
		<Sidebar collapsible='icon' variant='floating' {...props}>
			<SidebarHeader>
				HARNS
			</SidebarHeader>
			<SidebarContent>
				<NavGroup key={navGroup.title} {...navGroup} />
			</SidebarContent>
			<SidebarFooter>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}



function routesToNavGroup(routes: Route[]) {
	return {
		title: 'MENUS',
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



