import styled from '@emotion/styled';
import type { DetailStudyLog } from '@@types/index.ts';
import { CARD_CATEGORY_KO } from '@utils/index.ts';
import { GGAMJA_COLOR } from '../../../styles/Colors.ts';

const CardScene = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 400px;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f8f9fa;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #6c757d;
`;

const CardCategory = styled.span`
  font-weight: bold;
`;

const InfoTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: #495057;
  margin-bottom: 5px;
`;

const CardDescriptionContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const CardText = styled.div`
  font-size: 1rem;
  color: #212529;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const CardDescription = styled(CardText)``;

const ActionButton = styled.button`
  display: inline-block;
  background-color: ${GGAMJA_COLOR.GREEN};
  color: white;
  font-size: 20px;
  padding: 16px 40px;
  text-decoration: none;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
  cursor: pointer;
`;

interface LearningHistoryDetailProps {
  detailStudylog: DetailStudyLog;
  onClose: () => void;
}

const LearningHistoryDetail = ({ detailStudylog, onClose }: LearningHistoryDetailProps) => {
  return (
    <CardScene>
      <CardContainer>
        <CardFace>
          <CardHeader>
            <CardCategory>{CARD_CATEGORY_KO[detailStudylog.category]}</CardCategory>
          </CardHeader>
          <CardDescriptionContainer>
            <InfoTitle>해설</InfoTitle>
            <CardDescription>{detailStudylog.meaning}</CardDescription>
          </CardDescriptionContainer>
          <ActionButton onClick={onClose}>닫기</ActionButton>
        </CardFace>
      </CardContainer>
    </CardScene>
  );
};

export default LearningHistoryDetail;
