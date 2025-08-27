import BottomNavBar from '@components/common/BottomNavBar';
import styled from '@emotion/styled';
import { GGAMJA_COLOR } from '../styles/Colors.ts';

const PageWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
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
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: ${GGAMJA_COLOR.DARK_BROWN};
`;

const PageSubtitle = styled.p`
  font-size: 16px;
  color: ${GGAMJA_COLOR.LIGHT_BROWN};
  margin-top: 8px;
  line-height: 1.5;
`;

const UserStatusWrapper = styled.div`
  border: 1px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 10px;
  padding: 40px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  aspect-ratio: 1 / 1;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
  gap: 20px;
`;

const UserCharacterWrapper = styled.div`
  width: 250px;
  height: 250px;
`;

const UserCharacterImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const UserNicknameText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${GGAMJA_COLOR.DARK_BROWN};
`;

const UserStatusContentWrapper = styled.div`
  border: 1px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
`;

const UserStatusContentTitle = styled.p`
  font-size: 16px;
  color: ${GGAMJA_COLOR.LIGHT_BROWN};
  margin-top: 8px;
  line-height: 1.5;
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <PageTitle>홈</PageTitle>
          {/* <PageSubtitle></PageSubtitle> */}
        </Header>
        <UserStatusWrapper>
          <UserCharacterWrapper>
            <UserCharacterImage src="https://placehold.co/250x250" alt="character" />
          </UserCharacterWrapper>
          <UserNicknameText>닉네임</UserNicknameText>
          <UserStatusContentWrapper>
            <UserStatusContentTitle>레벨 표시</UserStatusContentTitle>
            <UserStatusContentTitle>현재 경험치 표시</UserStatusContentTitle>
          </UserStatusContentWrapper>
        </UserStatusWrapper>
        <BottomNavBar />
      </Container>
    </PageWrapper>
  );
};

export default HomePage;
