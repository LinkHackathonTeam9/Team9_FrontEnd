import { useEffect, useState } from 'react';
import BottomNavBar from '@components/common/BottomNavBar.tsx';
import StatsGraph from '@components/statistics/StatsGrpah.tsx';
import useStatistics from '@hooks/useStatistics.tsx';
import type { CategoryStatistics } from '@hooks/useStatistics.tsx';
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
  const { fetchStatistics } = useStatistics();
  const [categoryData, setCategoryData] = useState<CategoryStatistics[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStatistics = async () => {
      try {
        const statisticsData = await fetchStatistics();
        setCategoryData(statisticsData.categoryStats);
      } catch (error) {
        console.error('통계 데이터 로딩 실패:', error);
        // 에러 시 기본 데이터 설정
        setCategoryData([
          { category: '역사', accuracy: 92, imageUrl: '/images/categories/history.png' },
          { category: '속담', accuracy: 65, imageUrl: '/images/categories/proverb.png' },
          { category: '지리', accuracy: 25, imageUrl: '/images/categories/geography.png' },
          { category: '수도', accuracy: 0, imageUrl: '/images/categories/capital.png' },
        ]);
      } finally {
        setIsLoading(false);
      }
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
          <StatisticsContent>{isLoading ? <div>로딩 중...</div> : <StatsGraph data={categoryData} />}</StatisticsContent>
          <StatisticsTitle>채붕이님, 이번 달에는 ...</StatisticsTitle>
          <StatisticsContent>
            <StatisticsTextContainer isSurpassed={true}>
              <StatisticsCategory>속담</StatisticsCategory> 분야에 강하시네요!
            </StatisticsTextContainer>
            <StatisticsTextContainer isSurpassed={false}>
              <StatisticsCategory>수도</StatisticsCategory> 분야를 조금 더 공부해보아요!
            </StatisticsTextContainer>
          </StatisticsContent>
        </StatisticsContentWrapper>
        <BottomNavBar />
      </Container>
    </PageWrapper>
  );
};

export default StatisticsPage;
