import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';


export default function () {
	return (
		<Container>
			<Navbar />
			<MainContent>
				<Sidebar />
				<PageArea>
					<Outlet />
				</PageArea>
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

const PageArea = styled.main`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.background};
`;