import styled from '@emotion/styled';

const CountingCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 116px;
  background-color: #ffffff;
  border-radius: 15px;
  border: 1px solid #e1ded7;
`;

interface CountingCardProps {
  count: number;
  label: string;
  category: 'learned' | 'quiz' | 'attendance' | 'level';
}

const CountingCard = ({ count, label, category }: CountingCardProps) => {
  return (
    <CountingCardContainer>
      <div>{count}</div>
      <div>{label}</div>
    </CountingCardContainer>
  );
};

export default CountingCard;
