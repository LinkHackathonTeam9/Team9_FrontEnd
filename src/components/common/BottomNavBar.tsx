import { NavLink } from 'react-router-dom';

const BottomNavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/quiz">Quiz</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
};

export default BottomNavBar;
