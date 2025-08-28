import { Route, Routes } from 'react-router-dom';
import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignupPage';
import HomePage from '@pages/HomePage';
import EducationPage from '@pages/EducationPage';
import QuizHomePage from '@pages/QuizHomePage.tsx';
import ProfilePage from '@pages/ProfilePage';
import QuizPage from '@pages/QuizPage.tsx';
import StatisticsPage from '@pages/StatisticsPage.tsx';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/quiz-home" element={<QuizHomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
      <Global styles={globalStyles} />
    </>
  );
}

export default App;
