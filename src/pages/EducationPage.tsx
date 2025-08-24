import BottomNavBar from '@components/common/BottomNavBar';
import styled from '@emotion/styled';
import EducationItem from '@components/education/EducationItem.tsx';

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
  // todo fetch categories from server
  const dummyCategories = ['경제', '과학', 'IT', '교양', '어학', '기타'];

  return (
    <Container>
      {dummyCategories.map((category) => (
        <EducationItem category={category} key={category} />
      ))}
      <BottomNavBar />
    </Container>
  );
};

export default EducationPage;
