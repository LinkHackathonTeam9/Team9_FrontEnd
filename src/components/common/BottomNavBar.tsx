import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.nav`
  width: 100vw;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ddd;
`;

const BottomNavBar = () => {
  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/quiz">Quiz</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </Container>
  );
};

export default BottomNavBar;
