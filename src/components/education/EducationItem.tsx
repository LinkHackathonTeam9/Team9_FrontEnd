import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-size: 16px;
  box-sizing: border-box;
`;

interface EducationItemProps {
  category: string;
}

function EducationItem({ category }: EducationItemProps) {
  return <Container>{category}</Container>;
}

export default EducationItem;
