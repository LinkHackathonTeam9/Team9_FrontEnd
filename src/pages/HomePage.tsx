import BottomNavBar from '@components/common/BottomNavBar';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  min-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
`;

const HomePage = () => {
  return (
    <Container>
      <BottomNavBar />
    </Container>
  );
};

export default HomePage;
