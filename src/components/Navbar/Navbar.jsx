import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../img/nav-logo.png';
import { BsPersonFill , BsDoorOpen } from 'react-icons/bs';


function EcoNav() {

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
              <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Ecopontos" className="nav-link" activeClassName="active">Ecopontos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Donation" className="nav-link" activeClassName="active">Produtos</NavLink>
            </li>
          </ul>
          <div className="dropdown">
            <button className="dropdown-toggle">
              <h2 className='Livia'>Olá, Livia!</h2>

            </button>
            <div className="dropdown-menu">
              <a href="/user/accountsettings" className="dropdown-item">
                Perfil <BsPersonFill className='drop-icon-person' />
              </a>
              <div className="dropdown-divider"></div>
              <a href="#/Sair" className="dropdown-item">
                Sair<BsDoorOpen className='drop-icon-exit' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default EcoNav;
