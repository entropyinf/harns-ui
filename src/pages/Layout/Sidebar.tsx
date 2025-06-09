import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { pages } from '../../router';

export const Sidebar = () => {

	return (
		<SidebarContainer>
			<MenuList>
				{pages.map((item) => (
					<NavItem key={item.path}>
						<NavLink
							to={item.path || "/"}
							style={({ isActive }) => ({
								backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
								color: isActive ? '#fff' : '#a0aec0',
							})}
						>
							{item.icon}
							<span>{item.title}</span>
						</NavLink>
					</NavItem>
				))}
			</MenuList>
		</SidebarContainer>
	);
};

const SidebarContainer = styled.aside`
  width: 240px;
  background-color: ${({ theme }) => theme.colors.sidebar};
  color: #a0aec0;
  height: 100%;
  overflow-y: auto;
  transition: width 0.3s ease;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0;
`;

const NavItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
      color: white;
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
    
    span {
      white-space: nowrap;
    }
  }
`;  