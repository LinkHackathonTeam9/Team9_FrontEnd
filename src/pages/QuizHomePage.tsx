import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import BottomNavBar from '@components/common/BottomNavBar';

import { GGAMJA_COLOR } from '../styles/Colors.ts';
const PageWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #faf8f5;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const ContentContainer = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
`;

const QuizIcon = styled.span`
  font-size: 80px;
  color: ${GGAMJA_COLOR.GREEN};
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 32px;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${GGAMJA_COLOR.LIGHT_BROWN};
  line-height: 1.6;
  margin-bottom: 40px;
`;

const QuizStartButton = styled(Link)`
  display: inline-block;
  background-color: ${GGAMJA_COLOR.GREEN};
  color: white;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 20px;
  padding: 16px 40px;
  text-decoration: none;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
  cursor: pointer;
`;

const QuizHomePage = () => {
  return (
    <PageWrapper>
      <ContentContainer>
        <QuizIcon className="material-symbols-outlined">quiz</QuizIcon>
        <Title>퀴즈를 시작해보세요!</Title>
        <Subtitle>오늘의 퀴즈를 풀고 지식을 넓혀보세요.</Subtitle>
        <QuizStartButton to="/quiz">퀴즈 시작</QuizStartButton>
      </ContentContainer>
      <BottomNavBar />
    </PageWrapper>
  );
};

export default QuizHomePage;
