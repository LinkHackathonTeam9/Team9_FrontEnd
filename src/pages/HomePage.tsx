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
  gap: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const UserStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const UserCharacterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const UserStatusContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  return (
    <Container>
      <ContentWrapper>
        <UserStatusWrapper>
          <UserCharacterWrapper>
            <img src="https://placehold.co/300x300" alt="character" />
          </UserCharacterWrapper>
          <UserStatusContentWrapper>
            <p>레벨 표시</p>
            <p>현재 경험치 표시</p>
          </UserStatusContentWrapper>
        </UserStatusWrapper>
      </ContentWrapper>
      <BottomNavBar />
    </Container>
  );
};

export default HomePage;
