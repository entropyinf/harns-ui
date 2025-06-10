import styled from 'styled-components';
import List from './List';

export default function DevicePage() {
  return (
    <PageContainer>
      <PageTitle>设备列表</PageTitle>
        <List />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;