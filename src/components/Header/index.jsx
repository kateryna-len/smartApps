import React from 'react';
import './style.css';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <div className="container">
      <div className="footer_container">
        <div className="logo_container">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
    </div>
  );
}
