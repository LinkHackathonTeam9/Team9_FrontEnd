import { useEffect, useState } from 'react';
import useHome from '@hooks/useHome.tsx';
import BottomNavBar from '@components/common/BottomNavBar';
import ProgressBar from '@components/home/ProgressBar.tsx';
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

const UserStatusWrapper = styled.div`
  border: 1px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 10px;
  padding: 40px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  aspect-ratio: 1 / 1;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
  gap: 10px;
`;

const UserCharacterWrapper = styled.div`
  width: 200px;
  height: 200px;
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

const UserCharacterNameText = styled.p`
  font-size: 16px;
  color: ${GGAMJA_COLOR.LIGHT_BROWN};
  margin-top: 8px;
  line-height: 1.5;
`;

const UserStatusContentWrapper = styled.div`
  border: 1px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 5px 15px 5px;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
`;

const UserLevelContentTitle = styled.p`
  font-size: 16px;
  color: ${GGAMJA_COLOR.LIGHT_BROWN};
  margin: 0;
  padding: 0 0 20px 0;
  line-height: 1.5;
  text-align: center;
  width: 100%;
`;

const UserStatusContentTitle = styled.p`
  font-size: 16px;
  color: ${GGAMJA_COLOR.LIGHT_BROWN};
  line-height: 1.5;
  padding: 10px 0 10px 0;
  margin: 0;
`;

const HomePage = () => {
  const { fetchHome } = useHome();
  const [nickname, setNickname] = useState<string>('');
  const [points, setPoints] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const [startPoint, setStartPoint] = useState<number>(0);
  const [endPoint, setEndPoint] = useState<number>(0);
  const [characterName, setCharacterName] = useState<string>('');
  const [characterUrl, setCharacterUrl] = useState<string>('');

  useEffect(() => {
    const HomeLoading = async () => {
      const userInfo = await fetchHome();
      setNickname(userInfo.nickname);
      setPoints(userInfo.points);
      setLevel(userInfo.level.level);
      setStartPoint(userInfo.level.startPoint);
      setEndPoint(userInfo.level.endPoint);
      setCharacterName(userInfo.level.characterName);
      setCharacterUrl(userInfo.level.characterUrl);
    };
    HomeLoading();
  }, []);

  return (
    <PageWrapper>
      <Container>
        <Header>
          <PageTitle>홈</PageTitle>
          {/* <PageSubtitle></PageSubtitle> */}
        </Header>
        <UserStatusWrapper>
          <UserCharacterWrapper>
            <UserCharacterImage src={characterUrl} alt="캐릭터" />
          </UserCharacterWrapper>
          <UserNicknameText>이름 : {nickname}</UserNicknameText>
          <UserCharacterNameText>{characterName}</UserCharacterNameText>
          <UserStatusContentWrapper>
            <UserLevelContentTitle>레벨 {level}</UserLevelContentTitle>
            <UserStatusContentTitle>현재 경험치</UserStatusContentTitle>
            <UserStatusContentTitle>
              {points} / {endPoint}
            </UserStatusContentTitle>
            <ProgressBar startPoint={startPoint} endPoint={endPoint} totalPoint={points} />
          </UserStatusContentWrapper>
        </UserStatusWrapper>
        <BottomNavBar />
      </Container>
    </PageWrapper>
  );
};

export default HomePage;
