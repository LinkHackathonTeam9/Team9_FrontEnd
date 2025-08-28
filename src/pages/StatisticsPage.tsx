import { useEffect, useState } from 'react';
import BottomNavBar from '@components/common/BottomNavBar.tsx';
import StatsGraph from '@components/statistics/StatsGrpah.tsx';
import useMonthlyAnalysis from '@hooks/useMonthlyAnalysis.tsx';
import styled from '@emotion/styled';
import { GGAMJA_COLOR } from '../styles/Colors.ts';
import type { CardCategory } from '@@types/index.ts';
import { CARD_CATEGORY_KO } from '@utils/index.ts';

const PageWrapper = styled.div`
  background-color: #faf8f5;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  padding-bottom: 80px;
  height: 100%;
  overflow: auto;
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

const StatisticsContentWrapper = styled.div`
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

const StatisticsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 10px;
  gap: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const StatisticsTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  text-align: left;
`;

const StatisticsTextContainer = styled.div<{ isSurpassed: boolean }>`
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  color: ${GGAMJA_COLOR.DARK_BROWN};
`;

const StatisticsCategory = styled.h3`
  display: inline;
  font-weight: 700;
`;

const StatisticsPage = () => {
  const { fetchMonthlyAnalysis } = useMonthlyAnalysis();
  const [nickname, setNickname] = useState<string>('사용자');
  const [categories, setCategories] = useState<{ category: CardCategory; quizLogCount: number; cardLogCount: number; accuracy: number }[]>([]);
  const [strengths, setStrengths] = useState<string[]>([]);
  const [weaknesses, setWeaknesses] = useState<string[]>([]);
  const [allEqual, setAllEqual] = useState(false);

  useEffect(() => {
    const loadStatistics = async () => {
      const statisticsData = await fetchMonthlyAnalysis();
      setCategories(statisticsData.categories);
      setStrengths(statisticsData.strengths);
      setWeaknesses(statisticsData.weaknesses);
      setAllEqual(statisticsData.allEqual);
    };

    loadStatistics();
  }, []);

  return (
    <PageWrapper>
      <Container>
        <Header>
          <PageTitle>이번 달 통계</PageTitle>
        </Header>
        <StatisticsContentWrapper>
          <StatisticsTitle>카테고리 분석</StatisticsTitle>
          <StatisticsContent></StatisticsContent>
          <StatisticsTitle>정답률 분석</StatisticsTitle>
          <StatisticsContent>
            <StatsGraph data={categories} />
          </StatisticsContent>
          <StatisticsTitle>{nickname}님, 이번 달에는 ...</StatisticsTitle>
          <StatisticsContent>
            {!allEqual
              ? [
                  { data: strengths, isSurpassed: true, message: '분야에 강하시네요!' },
                  { data: weaknesses, isSurpassed: false, message: '분야를 조금 더 공부해보아요!' },
                ].map(
                  ({ data, isSurpassed, message }) =>
                    data.length > 0 && (
                      <StatisticsTextContainer key={message} isSurpassed={isSurpassed}>
                        {data.map((category, index) => (
                          <StatisticsCategory key={index}>
                            {CARD_CATEGORY_KO[category as CardCategory]}
                            {index < data.length - 1 ? ', ' : ''}
                          </StatisticsCategory>
                        ))}
                        {message}
                      </StatisticsTextContainer>
                    ),
                )
              : categories[0].accuracy == 0
                ? '지금 당장 공부하러 가볼까요?'
                : ''}
          </StatisticsContent>
        </StatisticsContentWrapper>
        <BottomNavBar />
      </Container>
    </PageWrapper>
  );
};

export default StatisticsPage;
