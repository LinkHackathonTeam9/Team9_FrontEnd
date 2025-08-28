import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

/*
  New Theme Variables:
  --primary-color: #84CC16; (lime green)
  --text-secondary: #8B7E74;
  --border-color: #4D403D;
*/

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 2px solid #4d403d;
  font-family: 'Noto Sans KR', sans-serif;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #8b7e74;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  &.active {
    color: #84cc16;
    font-weight: 700;
  }
`;

const Icon = styled.span`
  font-size: 24px;
`;

const Label = styled.span`
  margin-top: 4px;
`;

const BottomNavBar = () => {
  return (
    <NavContainer>
      <StyledNavLink to="/home">
        <Icon className="material-symbols-outlined">home</Icon>
        <Label>홈</Label>
      </StyledNavLink>
      <StyledNavLink to="/education">
        <Icon className="material-symbols-outlined">school</Icon>
        <Label>학습</Label>
      </StyledNavLink>
      <StyledNavLink to="/quiz-home">
        <Icon className="material-symbols-outlined">quiz</Icon>
        <Label>퀴즈</Label>
      </StyledNavLink>
      <StyledNavLink to="/profile">
        <Icon className="material-symbols-outlined">person</Icon>
        <Label>프로필</Label>
      </StyledNavLink>
    </NavContainer>
  );
};

export default BottomNavBar;
