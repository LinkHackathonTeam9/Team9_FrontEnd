import styled from '@emotion/styled';

const quizHistoryData = [
  {
    icon: 'lightbulb',
    title: '상식 퀴즈 완료!',
    date: '2025년 8월 28일',
    score: '8 / 10',
  },
  {
    icon: 'menu_book',
    title: '속담 퀴즈 완료!',
    date: '2025년 8월 26일',
    score: '10 / 10',
  },
  {
    icon: 'account_balance',
    title: '수도 퀴즈 완료!',
    date: '2025년 8월 25일',
    score: '6 / 10',
  },
];

export const TabContent = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

export const HistoryItem = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 2px solid #4d403d;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 4px 4px 0px #4d403d;
`;

export const HistoryIcon = styled.span`
  font-size: 24px;
  color: #84cc16;
  background-color: #eae3dc;
  border-radius: 50%;
  padding: 10px;
  margin-right: 16px;
`;

export const HistoryDetails = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  p {
    font-size: 13px;
    color: #8b7e74;
  }
`;

export const QuizScore = styled.span`
  font-weight: 700;
  color: #84cc16;
`;

interface QuizHistoryTabProps {
  isActive: boolean;
}

const QuizHistoryTab = ({ isActive }: QuizHistoryTabProps) => {
  return (
    <TabContent isActive={isActive}>
      {quizHistoryData.map((item, index) => (
        <HistoryItem key={index}>
          <HistoryIcon className="material-symbols-outlined">{item.icon}</HistoryIcon>
          <HistoryDetails>
            <h3>{item.title}</h3>
            <p>
              {item.date} ・ <QuizScore>점수: {item.score}</QuizScore>
            </p>
          </HistoryDetails>
        </HistoryItem>
      ))}
    </TabContent>
  );
};

export default QuizHistoryTab;
