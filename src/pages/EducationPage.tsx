import BottomNavBar from '@components/common/BottomNavBar';
import styled from '@emotion/styled';
import EducationItem from '@components/education/EducationItem';
import { CARD_CATEGORY_KO } from '@utils/index';
import { CARD_CATEGORY } from '@@types/index';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 20px;
`;

const EducationPage = () => {
  return (
    <Container>
      {Object.values(CARD_CATEGORY).map((category) => (
        <EducationItem category={CARD_CATEGORY_KO[category]} key={category} />
      ))}
      <BottomNavBar />
    </Container>
  );
};

export default EducationPage;
