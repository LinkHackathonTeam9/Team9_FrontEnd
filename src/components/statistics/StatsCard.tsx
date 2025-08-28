import type { CardCategory } from '@@types/index';
import styled from '@emotion/styled';
import { CARD_CATEGORY_KO, categoryMaterialIcons } from '../../utils';
import { GGAMJA_COLOR } from '../../styles/Colors';

const Container = styled.div`
  background-color: white;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
  gap: 5px;
`;

const Icon = styled.span`
  font-size: 30px;
  color: ${GGAMJA_COLOR.DARK_BROWN};
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  margin: 8px 0 4px 0;
`;

const StatsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 12px;
  color: ${GGAMJA_COLOR.LIGHT_BROWN};
`;

interface StatsCardProps {
  category: CardCategory;
  quizLogCount: number;
  cardLogCount: number;
}

const StatsCard = ({ category, quizLogCount, cardLogCount }: StatsCardProps) => {
  return (
    <Container>
      <Icon className="material-symbols-outlined">{categoryMaterialIcons[category] || 'help'}</Icon>
      <CardTitle>{CARD_CATEGORY_KO[category]}</CardTitle>
      <StatsInfo>
        <div>퀴즈: {quizLogCount}회</div>
        <div>학습: {cardLogCount}회</div>
      </StatsInfo>
    </Container>
  );
};

export default StatsCard;
