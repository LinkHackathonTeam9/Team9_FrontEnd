import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from '@pages/LoginPage';
import HomePage from '@pages/HomePage';
import EducationPage from '@pages/EducationPage';
import QuizHomePage from '@pages/QuizHomePage.tsx';
import ProfilePage from '@pages/ProfilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/quiz-home" element={<QuizHomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
