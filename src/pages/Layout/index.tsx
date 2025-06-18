import { pages } from '@/router';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './sidebar';

export default function () {
	return (
		<UI.Box>
			<Sidebar pages={pages} />
			<UI.Outlet>
				<Outlet />
			</UI.Outlet>
		</UI.Box>
	);
};

namespace UI {
	export const Box = styled.div`
		display: flex;
		height: 100%;
	`
	export const Outlet = styled.div`
		padding: 1rem;
	`
}




