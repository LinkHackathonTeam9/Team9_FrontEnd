import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '@pages/HomePage';
import EducationPage from '@pages/EducationPage';
import QuizPage from '@pages/QuizPage';
import ProfilePage from '@pages/ProfilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
