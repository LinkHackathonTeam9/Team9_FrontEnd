import React, { useState } from 'react';
import styled from '@emotion/styled';

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

// Dummy Data
const dummyCardData = {
  category: 'JavaScript',
  title: 'JavaScript의 호이스팅(Hoisting)에 대해 설명해주세요.',
  answer:
    '호이스팅은 변수 및 함수 선언이 해당 스코프의 최상단으로 끌어올려지는 것처럼 동작하는 것을 의미합니다. var 키워드로 선언된 변수와 함수 선언문이 해당됩니다.',
  difficulty: '중급',
  description:
    'var 변수는 선언만 끌어올려지고 할당은 제자리에 남아 undefined로 초기화됩니다. let과 const는 TDZ(Temporal Dead Zone)의 영향을 받아 호이스팅이 다르게 동작합니다.',
};

interface FlippableCardProps {
  onClose: () => void;
}

const FlippableCard: React.FC<FlippableCardProps> = ({ onClose }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardScene>
      <CardContainer isFlipped={isFlipped}>
        <CardFront>
          <CardHeader>
            <CardCategory>{dummyCardData.category}</CardCategory>
            <CardDifficulty>{dummyCardData.difficulty}</CardDifficulty>
          </CardHeader>
          <CardTitle>{dummyCardData.title}</CardTitle>
          <ActionButton onClick={handleFlip}>정답 확인하기</ActionButton>
        </CardFront>

        <CardBack>
          <CardHeader>
            <CardCategory>{dummyCardData.category}</CardCategory>
          </CardHeader>
          <InfoTitle>정답</InfoTitle>
          <CardText>{dummyCardData.answer}</CardText>
          <InfoTitle>해설</InfoTitle>
          <CardDescription>{dummyCardData.description}</CardDescription>
          <ActionButton onClick={onClose}>학습 완료</ActionButton>
        </CardBack>
      </CardContainer>
    </CardScene>
  );
};

export default FlippableCard;
