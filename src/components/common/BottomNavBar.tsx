import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const BottomNavBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 68px;
  background-color: #fbf8f1;
  border-top: 1px solid #e1ded7;
`;

const BottomNavBar = () => {
  return (
    <BottomNavBarContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/quiz">Quiz</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </BottomNavBarContainer>
  );
};

export default BottomNavBar;
