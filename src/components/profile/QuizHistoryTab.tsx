import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import type { PaginationResponse, QuizLog } from '@@types/index.ts';
import InfiniteScroll from 'react-infinite-scroll-component';
import { defaultPaginationValue } from '@@types/defaultValues.ts';
import useQuizLog from '@hooks/useQuizLog.tsx';
import { CARD_CATEGORY_KO, categoryMaterialIcons } from '@utils/index.ts';

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

export const QuizScore = styled.span<{ isCorrect: boolean }>`
  font-weight: 700;
  color: ${({ isCorrect }) => (isCorrect ? '#22c55e' : '#ef4444')};
`;

interface QuizHistoryTabProps {
  isActive: boolean;
}

const QuizHistoryTab = ({ isActive }: QuizHistoryTabProps) => {
  const [response, setResponse] = useState<PaginationResponse<QuizLog[]>>(defaultPaginationValue);
  const [quizlogs, setQuizlogs] = useState<QuizLog[]>([]);
  const { getQuizLogs } = useQuizLog();

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    const nextPage = response.pageable.pageNumber + 1;
    const res = await getQuizLogs(nextPage, response.pageable.pageSize);
    setQuizlogs((prev) => [...prev, ...res.content]);
    setResponse(res);
  };

  return (
    <TabContent isActive={isActive}>
      <InfiniteScroll next={fetchMoreData} hasMore={!response.last} loader={null} dataLength={quizlogs.length}>
        {quizlogs.map((item, index) => (
          <HistoryItem key={index}>
            <HistoryIcon className="material-symbols-outlined">{categoryMaterialIcons[item.category]}</HistoryIcon>
            <HistoryDetails>
              <h3>{CARD_CATEGORY_KO[item.category]} 퀴즈 완료!</h3>
              <p>
                {item.date.split('T')[0]} ・ <QuizScore isCorrect={item.isCorrect}>{item.isCorrect ? '정답' : '오답'}</QuizScore>
              </p>
            </HistoryDetails>
          </HistoryItem>
        ))}
      </InfiniteScroll>
    </TabContent>
  );
};

export default QuizHistoryTab;
