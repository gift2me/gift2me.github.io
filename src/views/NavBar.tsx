// NavBar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation();
  return (
    <nav>
      <div className="logo">S&G</div>
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/bridal-shower' ? 'active' : ''}>
          <Link to="/bridal-shower">Chá da Samanta</Link>
        </li>
        <li className={location.pathname === '/marriage' ? 'active' : ''}>
          <Link to="/marriage">Nosso Casamento</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
