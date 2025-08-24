import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  z-index: 1001;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 100%;
  height: 160px;
  background-color: #ffffff;
  border-bottom: 1px solid #e1ded7;
`;

const Header = () => {
  return <HeaderContainer>Header</HeaderContainer>;
};

export default Header;
