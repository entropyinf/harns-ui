import React from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

interface DashboardLayoutProps {
	children?: React.ReactNode;
}

export default function ({ children }: DashboardLayoutProps) {
	return (
		<Container>
			<Navbar />
			<MainContent>
				<Sidebar />
				<ContentArea>
					{children}
					<Outlet />
				</ContentArea>
			</MainContent>
		</Container>
	);
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.background};
`;  