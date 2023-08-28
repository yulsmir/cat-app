import Logo from '../logo/logo';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);
  const [isMenuActive, setMenuActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }

    if (window.scrollY > 500) {
      setShowScrollUpBtn(true);
    } else {
      setShowScrollUpBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuClick = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <>
      <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div id="logo">
          <Logo element="div">cat logo</Logo>
        </div>
        <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#cats">Cats</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="menu-btn" onClick={handleMenuClick}>
          <i className={`fas fa-bars ${isMenuActive ? 'active' : ''}`}></i>
        </div>
      </div>
      {showScrollUpBtn && (
        <div className="scroll-up-btn" onClick={scrollToTop}>
          Scroll Up
        </div>
      )}
    </>
  );
};

export default Navbar;
