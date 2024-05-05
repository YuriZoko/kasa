import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/header.js'
import Footer from './assets/footer.js'
import Home from './pages/home';
import Page404 from './pages/404';
import APropos from './pages/a-propos';
import Logement from './pages/logement/index.js';

const RoutesComponent = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
    </Router>
  );
};

export default RoutesComponent;
