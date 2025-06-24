import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import styled from "styled-components";

export default function Layout() {
	return (
		<div style={{ display: 'flex', height: '100%' }}>
			<Sidebar />
			<SCOutlet>
				<Outlet />
			</SCOutlet>
		</div>
	)
}

const SCOutlet = styled.div`
	margin-left: 0.25rem;
`
