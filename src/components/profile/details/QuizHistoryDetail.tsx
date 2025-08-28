import styled from '@emotion/styled';
import type { DetailQuizLog } from '@@types/index.ts';

const QuizDetailContainer = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

const Question = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const OptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

const OptionItem = styled.li<{
  isCorrect: boolean;
  isSelected: boolean;
}>`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  background-color: ${({ isSelected, isCorrect }) => (isSelected ? (isCorrect ? '#d4edda' : '#f8d7da') : '#fff')};
  color: ${({ isSelected, isCorrect }) => (isSelected ? (isCorrect ? '#155724' : '#721c24') : '#333')};
`;

const Result = styled.div`
  font-weight: bold;
  color: ${({ isCorrect }: { isCorrect: boolean }) => (isCorrect ? '#28a745' : '#dc3545')};
`;

interface QuizHistoryDetailProps {
  quizLog: DetailQuizLog;
}

const QuizHistoryDetail = ({ quizLog }: QuizHistoryDetailProps) => {
  const { quiz, selectedAnswer, isCorrect } = quizLog;
  const options = [quiz.option1, quiz.option2, quiz.option3, quiz.answer].sort(() => Math.random() - 0.5);

  return (
    <QuizDetailContainer>
      <Question>{quiz.question}</Question>
      <OptionList>
        {options.map((option, index) => {
          const isSelected = option === selectedAnswer;
          const isCorrectOption = option === quiz.answer;
          return (
            <OptionItem key={index} isSelected={isSelected} isCorrect={isCorrectOption}>
              {option}
            </OptionItem>
          );
        })}
      </OptionList>
      <Result isCorrect={isCorrect}>{isCorrect ? '정답입니다!' : `오답입니다. (정답: ${quiz.answer})`}</Result>
    </QuizDetailContainer>
  );
};

export default QuizHistoryDetail;
