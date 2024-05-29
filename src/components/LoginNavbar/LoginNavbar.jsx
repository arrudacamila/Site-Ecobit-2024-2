import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './LoginNavbar.css';
import Logo from '../../img/nav-logo.png';


function LoginEcoNav() {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.custom-navbar');
      if (window.scrollY > 100) {
        navbar.classList.add('navbar-small');
      } else {
        navbar.classList.remove('navbar-small');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="navbar-toggle" id="navbar-toggle">
          <span className="navbar-toggle-icon"></span>
        </div>
        <div className="navbar-collapse" id="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/LoginHome" className="nav-link" activeClassName="active" exact>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/LoginEcopontos" className="nav-link" activeClassName="active">Ecopontos</NavLink>
            </li>
          </ul>
          <div className="dropdown">          
              <NavLink to="/Register" className="nav-link" activeClassName="active">Entrar</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default LoginEcoNav;
