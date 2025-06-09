import styled from 'styled-components';
import { FaBell, FaUserCircle } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <NavContainer>
      <Logo>Harns</Logo>
      <NavRight>
        <NotificationIcon>
          <FaBell />
          <Badge>3</Badge>
        </NotificationIcon>
        <UserProfile>
          <FaUserCircle size={24} />
          <UserName>Admin User</UserName>
        </UserProfile>
      </NavRight>
    </NavContainer>
  );
};

const NavContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NotificationIcon = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${({ theme }) => theme.colors.warning};
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const UserName = styled.span`
  font-weight: 500;
`;