import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '@pages/Home.tsx';
import About from '@pages/About.tsx';
import NotFound from '@pages/NotFound.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
