import { AppSidebar } from '@/pages/layout/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

export default function () {
	return (
		<div className='flex'>
			<div className='rounded-md shadow-lg'>
				<SidebarProvider>
					<AppSidebar />
				</SidebarProvider>
			</div>
			<div className='p-3'>
				<Outlet />
			</div>
		</div>
	);
};


