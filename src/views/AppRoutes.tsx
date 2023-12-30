import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import BridalShower from './BridalShower';
import Marriage from './Marriage';
import Home from './Home';
import NavBar from './NavBar';

function AppRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bridal-shower" element={<BridalShower />} />
        <Route path="/marriage" element={<Marriage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;