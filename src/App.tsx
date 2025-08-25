import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '@pages/HomePage';
import EducationPage from '@pages/EducationPage';
import QuizHomePage from '@pages/QuizHomePage.tsx';
import ProfilePage from '@pages/ProfilePage';
import QuizPage from '@pages/QuizPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/quiz-home" element={<QuizHomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
