import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

interface ShortcutCardProps {
  category: 'attendance' | 'quiz' | 'education';
  title: string;
  icon: string;
  count: number;
  onClick: () => void;
}

const ShortcutCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 160px;
  background-color: #ffffff;
  border-radius: 15px;
  border: 1px solid #e1ded7;
`;

const ShortcutCard = ({ title, icon, category, count, onClick }: ShortcutCardProps) => {
  const navigate = useNavigate();

  switch (category) {
    case 'attendance':
      count = +1;
      break;
    case 'quiz':
      count = +10;
      break;
    case 'education':
      count = +3;
      break;
    default:
      count = 0;
  }

  return (
    <ShortcutCardContainer onClick={() => navigate(`/${category}`)}>
      <div>{icon}</div>
      <div>{title}</div>
      <div>+{count}점</div>
    </ShortcutCardContainer>
  );
};

export default ShortcutCard;
