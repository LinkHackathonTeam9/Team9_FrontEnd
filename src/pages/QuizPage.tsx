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

const QuizButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
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
  // todo fetch quiz data from server

  return (
    <Container>
      <ContentWrapper>
        <Title>퀴즈 문제 부분입니다.</Title>
        <Subtitle>퀴즈 카테고리 부분입니다.</Subtitle>
        <QuizButtonContainer>
          <QuizButton>퀴즈 정답 1</QuizButton>
          <QuizButton>퀴즈 정답 2</QuizButton>
          <QuizButton>퀴즈 정답 3</QuizButton>
          <QuizButton>퀴즈 정답 4</QuizButton>
        </QuizButtonContainer>
      </ContentWrapper>
      <BottomNavBar />
    </Container>
  );
};

export default QuizHomePage;
