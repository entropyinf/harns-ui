"use client"

import { ChevronRight } from "lucide-react"

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Route } from "@/router"
import { useNavigate } from "react-router-dom"

export function NavMain({
	items,
}: {
	items: Route[]
}) {

	const navigate = useNavigate()

	return (
		<SidebarGroup>
			<SidebarGroupLabel>Harns</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<Collapsible key={item.title} asChild>
						<SidebarMenuItem>
							<SidebarMenuButton asChild tooltip={item.title} onClick={() => navigate('')}>
								<span onClick={() => item.path && navigate(item.path)}>
									{item.Icon && <item.Icon />}
									<span>{item.title}</span>
								</span>
							</SidebarMenuButton>
							{item.children?.length ? (
								<>
									<CollapsibleTrigger asChild>
										<SidebarMenuAction className="data-[state=open]:rotate-90">
											<ChevronRight />
											<span className="sr-only">Toggle</span>
										</SidebarMenuAction>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{item.children?.map((subItem) => (
												<SidebarMenuSubItem key={subItem.title}>
													<SidebarMenuSubButton asChild>
														<span onClick={() => subItem.path && navigate(subItem.path)}>
															{subItem.title}
														</span>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									</CollapsibleContent>
								</>
							) : null}
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	)
}
