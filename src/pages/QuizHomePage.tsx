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

const Icon = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
`;

const QuizButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const QuizHomePage = () => {
  // todo replace icon with actual image
  // todo implement quiz start logic

  return (
    <Container>
      <ContentWrapper>
        <Icon src="/assets/quiz_icon.png" alt="Quiz Icon" />
        <Title>퀴즈를 시작해보세요!</Title>
        <Subtitle>오늘의 퀴즈를 풀고 지식을 넓혀보세요.</Subtitle>
        <QuizButton onClick={() => alert('퀴즈 시작!')}>퀴즈 시작</QuizButton>
      </ContentWrapper>
      <BottomNavBar />
    </Container>
  );
};

export default QuizHomePage;
