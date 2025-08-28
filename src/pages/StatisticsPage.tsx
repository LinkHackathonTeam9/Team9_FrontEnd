import BottomNavBar from '@components/common/BottomNavBar.tsx';
import styled from '@emotion/styled';
import { GGAMJA_COLOR } from '../styles/Colors.ts';

const PageWrapper = styled.div`
  background-color: #faf8f5;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  padding-bottom: 80px;
`;

const Container = styled.div`
  padding: 40px 20px 20px 20px;
`;

const Header = styled.header`
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${GGAMJA_COLOR.DARK_BROWN};
`;

const StatisticsPage = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <PageTitle>이번 달 통계</PageTitle>
        </Header>
        <BottomNavBar />
      </Container>
    </PageWrapper>
  );
};

export default StatisticsPage;
