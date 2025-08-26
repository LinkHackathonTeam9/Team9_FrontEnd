import BottomNavBar from '@components/common/BottomNavBar';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const InfoCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProfilePage = () => {
  return (
    <Container>
      <ContentWrapper>
        <InfoCard>3 학습한 카드</InfoCard>
        <InfoCard>1 완료한 퀴즈</InfoCard>
      </ContentWrapper>
      <BottomNavBar />
    </Container>
  );
};

export default ProfilePage;
