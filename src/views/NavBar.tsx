// NavBar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo.png';

function NavBar() {
  const location = useLocation();
  return (
    <nav>
      <img className="logo" src={logo} alt="Logo" />
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Nosso Casamento</Link>
        </li>
        {/* <li className={location.pathname === '/bridal-shower' ? 'active' : ''}>
          <Link to="/bridal-shower">Chá da Samanta</Link>
        </li> */}
        {/* <li className={location.pathname === '/marriage' ? 'active' : ''}>
          <Link to="/marriage">Nosso Casamento</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
