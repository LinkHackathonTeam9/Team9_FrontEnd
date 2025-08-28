import React, { useState } from 'react';
import styled from '@emotion/styled';
import type { Card } from '@@types/index.ts';
import { CARD_CATEGORY_KO } from '@utils/index.ts';
import useCard from '@hooks/useCard.tsx';

const CardScene = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 400px;
`;

const CardContainer = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'none')};
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
`;

const CardFront = styled(CardFace)`
  background-color: #f8f9fa;
  justify-content: space-between;
`;

const CardBack = styled(CardFace)`
  background-color: #e9ecef;
  transform: rotateY(180deg);
  gap: 10px;
  overflow-y: auto;
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

const CardDifficulty = styled.span``;

const CardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: auto 0;
  color: #343a40;
`;

const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  align-self: center;
  width: 80%;

  &:hover {
    background-color: #0056b3;
  }
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

interface FlippableCardProps {
  onClose: () => void;
  cardData: Card;
  learned: boolean;
}

const FlippableCard: React.FC<FlippableCardProps> = ({ onClose, cardData, learned }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { completeCard } = useCard();
  const closeText = learned ? '닫기' : '학습 완료';

  const completeAndClose = async () => {
    if (!learned) {
      await completeCard(cardData.id);
    }
    onClose();
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardScene>
      <CardContainer isFlipped={isFlipped}>
        <CardFront>
          <CardHeader>
            <CardCategory>{CARD_CATEGORY_KO[cardData.category]}</CardCategory>
            <CardDifficulty>{cardData.difficulty}</CardDifficulty>
          </CardHeader>
          <CardTitle>{cardData.title}</CardTitle>
          <ActionButton onClick={handleFlip}>뜻 확인하기</ActionButton>
        </CardFront>

        <CardBack>
          <CardHeader>
            <CardCategory>{CARD_CATEGORY_KO[cardData.category]}</CardCategory>
          </CardHeader>
          <InfoTitle>해설</InfoTitle>
          <CardDescription>{cardData.meaning}</CardDescription>
          <ActionButton onClick={completeAndClose}>{closeText}</ActionButton>
        </CardBack>
      </CardContainer>
    </CardScene>
  );
};

export default FlippableCard;
