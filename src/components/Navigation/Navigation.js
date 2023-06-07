import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/sms">SMS</Link>
        </li>
        <li>
          <Link to="/about">Sobre nosotros</Link>
        </li>
        <li>
          <Link to="/contact">Contáctanos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
