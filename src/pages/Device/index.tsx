import styled from 'styled-components';

export default function DevicePage() {
	return (
		<PageContainer>
			<PageTitle>Devices</PageTitle>
			<CardsContainer>
				<Card>
					<CardHeader>
						<CardTitle>Total Users</CardTitle>
						<CardIcon>👥</CardIcon>
					</CardHeader>
					<CardValue>1,245</CardValue>
					<CardFooter>+12% from last month</CardFooter>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Revenue</CardTitle>
						<CardIcon>💵</CardIcon>
					</CardHeader>
					<CardValue>$128,450</CardValue>
					<CardFooter>+8% from last month</CardFooter>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>New Orders</CardTitle>
						<CardIcon>📦</CardIcon>
					</CardHeader>
					<CardValue>245</CardValue>
					<CardFooter>+23% from last month</CardFooter>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Conversion Rate</CardTitle>
						<CardIcon>📊</CardIcon>
					</CardHeader>
					<CardValue>24.5%</CardValue>
					<CardFooter>+5% from last month</CardFooter>
				</Card>
			</CardsContainer>
		</PageContainer>
	);
};

const PageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CardIcon = styled.span`
  font-size: 1.5rem;
`;

const CardValue = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardFooter = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.success};
`;  