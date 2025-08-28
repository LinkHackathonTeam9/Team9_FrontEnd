import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { GGAMJA_COLOR } from '../styles/Colors.ts';
import { Link } from 'react-router-dom';
import type { Card, Quiz } from '@@types/index.ts';
import { defaultCardValue, defaultQuizValue } from '@@types/defaultValues.ts';
import useTodayQuiz from '@hooks/useTodayQuiz.tsx';
import useCard from '@hooks/useCard.tsx';
import { CARD_CATEGORY_KO } from '@utils/index.ts';

const PageWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #faf8f5;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  min-height: 100vh;
`;

const QuizContainer = styled.main`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`;

const QuestionBox = styled.div`
  background-color: white;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 30px;
  box-shadow: 4px 4px 0px ${GGAMJA_COLOR.DARK_BROWN};
  text-align: center;
`;

const CategoryTag = styled.span`
  display: inline-block;
  background-color: #eae3dc;
  color: ${GGAMJA_COLOR.LIGHT_BROWN};
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const QuestionText = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;
`;

const AnswerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const AnswerButton = styled.button<{ isCorrect?: boolean; isSelected?: boolean }>`
  background-color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  padding: 16px;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  box-shadow: 4px 4px 0px ${GGAMJA_COLOR.DARK_BROWN};
  cursor: pointer;
  width: 100%;
  text-align: center;

  ${({ isCorrect }) =>
    isCorrect &&
    `
    background-color: #22C55E;
    border-color: #16A34A;
    box-shadow: 4px 4px 0px #16A34A;
    color: white;
    font-weight: 700;
  `}

  ${({ isCorrect, isSelected }) =>
    !isCorrect &&
    isSelected &&
    `
    background-color: #EF4444;
    border-color: #DC2626;
    box-shadow: 4px 4px 0px #DC2626;
    color: white;
    font-weight: 700;
  `}
`;

const ExplanationBox = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: white;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
  box-shadow: 4px 4px 0px ${GGAMJA_COLOR.DARK_BROWN};
  text-align: left;
`;

const ExplanationTitle = styled.h3`
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
  color: ${GGAMJA_COLOR.DARK_BROWN};
`;

const ExplanationText = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${GGAMJA_COLOR.LIGHT_BROWN};
`;

const HomeButtonBox = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const HomeButton = styled(Link)`
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

const QuizPage = () => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizData, setQuizData] = useState<Quiz>(defaultQuizValue);
  const [cardData, setCardData] = useState<Card>(defaultCardValue);

  const { fetchTodayQuiz, submitTodayQuizAnswer } = useTodayQuiz();
  const { fetchCard } = useCard();

  const handleAnswerClick = (answer: string) => {
    if (!isAnswered) {
      setIsAnswered(true);
      setSelectedAnswer(answer);
      submitTodayQuizAnswer(quizData.todayQuizId, answer);
    }
  };

  const getQuizData = async () => {
    const quiz = await fetchTodayQuiz();
    setQuizData(quiz);

    const card = await fetchCard(quiz.cardId);
    setCardData(card);
  };

  useEffect(() => {
    getQuizData();
  }, []);

  useEffect(() => {
    if (isAnswered) {
      const timer = setTimeout(() => {
        setShowExplanation(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnswered]);

  return (
    <PageWrapper>
      <QuizContainer>
        <QuestionBox>
          <CategoryTag>{CARD_CATEGORY_KO[cardData.category]}</CategoryTag>
          <QuestionText>{quizData.question}</QuestionText>
        </QuestionBox>

        <AnswerGrid>
          {quizData.options.map((option) => {
            const isCorrect = option === quizData.answer;
            const isSelected = option === selectedAnswer;
            return (
              <AnswerButton
                key={option}
                onClick={() => handleAnswerClick(option)}
                disabled={isAnswered}
                isCorrect={isAnswered && isCorrect}
                isSelected={isSelected}
              >
                {option}
              </AnswerButton>
            );
          })}
        </AnswerGrid>

        <ExplanationBox show={showExplanation}>
          <ExplanationTitle>해설</ExplanationTitle>
          <ExplanationText>{cardData.meaning}</ExplanationText>
        </ExplanationBox>

        <HomeButtonBox show={showExplanation}>
          <HomeButton to={'/home'}>홈으로 돌아가기</HomeButton>
        </HomeButtonBox>
      </QuizContainer>
    </PageWrapper>
  );
};

export default QuizPage;
