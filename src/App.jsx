import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/Login';
import Interview from './pages/Interview';
import Jobs from './pages/Jobs';
import Institution from './pages/Institution';
import Drive from './pages/Drive';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
};

export default App;
