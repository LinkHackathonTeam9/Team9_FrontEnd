import styled from '@emotion/styled';
import { CARD_CATEGORY_KO } from '@utils/index';
import type { CardCategory } from '@@types/index';
import { GGAMJA_COLOR } from '../../styles/Colors';

interface CategoryData {
  category: CardCategory;
  accuracy: number;
}

interface StatsGraphProps {
  data: CategoryData[];
}

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: end;
  justify-content: space-around;
  gap: 8px;
  padding: 20px 0;
`;

const GraphItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
  height: 100%;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

const CharacterImage = styled.img<{ barHeight: number }>`
  width: 100%;
  max-width: 30px;
  height: 100%;
  max-height: 30px;
  object-fit: contain;
  margin-bottom: ${({ barHeight }) => (barHeight === 0 ? '0px' : '-10px')};
  z-index: 1;
`;

const Bar = styled.div<{ height: number }>`
  width: 100%;
  max-width: 20px;
  background-color: ${GGAMJA_COLOR.GREEN};
  border-radius: 8px;
  height: ${({ height }) => height}%;
  transition: height 0.3s ease;
  min-height: 0;
`;

const CategoryName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  text-align: center;
  text-orientation: mixed;
`;

const AccuracyText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  text-align: center;
`;

const StatsGraph = ({ data }: StatsGraphProps) => {
  return (
    <Container>
      {data.map((item, index) => (
        <GraphItem key={index}>
          <BarContainer>
            <CharacterImage src="https://ggamja-images.s3.ap-northeast-2.amazonaws.com/level1.png" barHeight={item.accuracy} />
            <Bar height={item.accuracy} />
          </BarContainer>
          <CategoryName>{CARD_CATEGORY_KO[item.category]}</CategoryName>
          <AccuracyText>{item.accuracy}%</AccuracyText>
        </GraphItem>
      ))}
    </Container>
  );
};

export default StatsGraph;
