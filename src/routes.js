import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/app';
import Home from './pages/home';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} /> {}
        <Route path="/app" element={<App />} /> {}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
