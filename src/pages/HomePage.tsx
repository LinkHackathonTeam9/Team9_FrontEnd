import { useEffect, useState } from 'react';
import { Cookies, useCookies } from 'react-cookie';
import dayjs from 'dayjs';
import useHome from '@hooks/useHome.tsx';
import BottomNavBar from '@components/common/BottomNavBar';
import ProgressBar from '@components/home/ProgressBar.tsx';
import AttendanceCalendar from '@components/home/AttendanceCalender.tsx';
import Modal from '@components/common/Modal.tsx';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
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
  position: relative;
  display: flex;
  justify-content: center;
`;

const floating = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const UserCharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${floating} 1.5s ease-in-out infinite;
`;

const SpeechBubble = styled.div<{ top: string; left: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  background-color: ${GGAMJA_COLOR.DARK_BROWN};
  color: white;
  padding: 10px 15px;
  border-radius: 15px;
  opacity: 0;
  transition: all 0.3s;
  z-index: 10;
  width: max-content;
  transform: translate(-50%, -50%);

  &.visible {
    opacity: 1;
  }
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

const encouragingMessages = [
  '오늘도 힘내세요!',
  '잘하고 있어요!',
  '최고예요!',
  '응원할게요!',
  '멋져요!',
  '포기하지 마세요!',
  '오늘 하루도 화이팅!',
  '넌 할 수 있어!',
  '매일매일 성장하는 당신을 응원해요!',
  '지금처럼만 꾸준히!',
];

const HomePage = () => {
  const { fetchHome } = useHome();
  const [nickname, setNickname] = useState<string>('');
  const [points, setPoints] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const [startPoint, setStartPoint] = useState<number>(0);
  const [endPoint, setEndPoint] = useState<number>(0);
  const [characterName, setCharacterName] = useState<string>('');
  const [characterUrl, setCharacterUrl] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [realtimeCookies] = useCookies();
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [bubbleMessage, setBubbleMessage] = useState('');
  const [bubblePosition, setBubblePosition] = useState({ top: '0px', left: '0px' });

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

  useEffect(() => {
    if (isValidPopup()) {
      openPopup();
    }
  }, [realtimeCookies]);

  useEffect(() => {
    const interval = setInterval(() => {
      const messageIndex = Math.floor(Math.random() * encouragingMessages.length);
      setBubbleMessage(encouragingMessages[messageIndex]);

      const angle = (5 * Math.PI) / 4 + Math.random() * (Math.PI / 2);
      const radius = 120;
      const x = 100 + radius * Math.cos(angle);
      const y = 100 + radius * Math.sin(angle);

      setBubblePosition({
        top: `${y}px`,
        left: `${x}px`,
      });

      setBubbleVisible(true);

      setTimeout(() => {
        setBubbleVisible(false);
      }, 5000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const isValidPopup = () => {
    const cookies = new Cookies();
    const cookie = cookies.get(`close_popup`);

    return !cookie;
  };

  const openPopup = () => {
    setIsOpen(true);
    // 팝업창 open 시 배경 스크롤 금지 코드
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsOpen(false);
    // 팝업창 close 시 배경 스크롤 금지 해제 코드
    document.body.style.overflow = 'auto';
  };

  const closePopupForDay = () => {
    const cookies = new Cookies();
    const expireDate = dayjs().add(1, 'day').startOf('day').toDate();
    cookies.set(`close_popup`, 'true', { path: '/', expires: expireDate });
    closePopup();
  };

  return (
    <PageWrapper>
      <Container>
        <Header>
          <PageTitle>홈</PageTitle>
          {/* <PageSubtitle></PageSubtitle> */}
        </Header>
        <UserStatusWrapper>
          <UserCharacterWrapper>
            <SpeechBubble
              top={bubblePosition.top}
              left={bubblePosition.left}
              className={bubbleVisible ? 'visible' : ''}
            >
              {bubbleMessage}
            </SpeechBubble>
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
        <Modal isOpen={isOpen} onClose={closePopupForDay}>
          <AttendanceCalendar />
        </Modal>
        <BottomNavBar />
      </Container>
    </PageWrapper>
  );
};

export default HomePage;
