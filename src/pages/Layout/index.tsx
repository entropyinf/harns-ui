import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

export default function () {
	return (
		<div className='flex h-full'>
			<div>
				<SidebarProvider>
					<AppSidebar />
				</SidebarProvider>
			</div>
			<div className='p-1'>
				<Outlet />
			</div>
		</div>
	);
};


