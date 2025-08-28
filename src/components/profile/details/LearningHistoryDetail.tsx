import styled from '@emotion/styled';
import type { DetailStudyLog } from '@@types/index.ts';
import { CARD_CATEGORY_KO } from '@utils/index.ts';

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
  font-size: 0.9rem;
  color: #6c757d;
`;

const CardCategory = styled.span`
  font-weight: bold;
`;

const InfoTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: #495057;
  margin-bottom: 5px;
`;

const CardText = styled.div`
  font-size: 1rem;
  color: #212529;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const CardDescription = styled(CardText)`
  flex-grow: 1;
`;

interface LearningHistoryDetailProps {
  detailStudylog: DetailStudyLog;
}

const LearningHistoryDetail = ({ detailStudylog }: LearningHistoryDetailProps) => {
  return (
    <CardScene>
      <CardContainer>
        <CardFace>
          <CardHeader>
            <CardCategory>{CARD_CATEGORY_KO[detailStudylog.category]}</CardCategory>
          </CardHeader>
          <InfoTitle>해설</InfoTitle>
          <CardDescription>{detailStudylog.meaning}</CardDescription>
        </CardFace>
      </CardContainer>
    </CardScene>
  );
};

export default LearningHistoryDetail;
