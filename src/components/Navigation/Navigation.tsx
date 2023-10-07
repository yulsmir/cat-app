import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';
import CatAnimation from '../CatAnimation/CatAnimation';
import LazyCat from '../../assets/lazy-cat.gif';
import ThemeToggle from '../ThemeToggle';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openClose = isOpen ? 'open' : '';
  const hamburger = isOpen ? 'line line-rotate' : 'line';

  return (
    <>
      <nav className={`nav ${openClose}`}>
        <div className="nav-options">
          <CatAnimation src={LazyCat} />
          {/* TODO: make theme toggle work */}
          <div
            className={`menu ${openClose}`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span className={hamburger}></span>
            <span className={hamburger}></span>
            <span className={hamburger}></span>
          </div>
        </div>

        <ul className={`nav-list ${openClose}`}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/vote"
              className={location.pathname === '/vote' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Vote
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/breeds"
              className={location.pathname === '/breeds' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Breeds
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/images-search"
              className={location.pathname === '/images-search' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Images
            </NavLink>
          </li>
          <li className="toggle-li">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
