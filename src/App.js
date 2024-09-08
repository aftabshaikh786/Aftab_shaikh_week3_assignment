import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LogActivityPage from './pages/LogActivityPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log-activity" element={<LogActivityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
