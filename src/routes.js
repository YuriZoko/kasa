import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/app';
import Home from './pages/home';
import Page404 from './pages/404';
import APropos from './pages/a-propos';
import Logements from './pages/logements';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} /> {}
        <Route path="/app" element={<App />} /> {}
        <Route path="/a-propos" element={<APropos />} /> {}
        <Route path="/logements" element={<Logements />} /> {}
        <Route path="*" element={<Page404 />} /> {}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
