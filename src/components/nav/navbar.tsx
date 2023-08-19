import CatAnimation from './catAnimation';

export default function Navbar() {
  return (
    <>
      <div id="navbar">
        <div id="logo">
          <CatAnimation />
        </div>
        <ul id="menu">
          <li>
            <a href="#home" id="menu-btn">
              Home
            </a>
          </li>
          <li>
            <a href="#about" id="menu-btn">
              About
            </a>
          </li>
          <li>
            <a href="#cats" id="menu-btn">
              Cats
            </a>
          </li>
          <li>
            <a href="#contact" id="menu-btn">
              Contact
            </a>
          </li>
        </ul>
        <div id="menu-btn">
          <i id="fas fa-bars"></i>
        </div>
      </div>
    </>
  );
}
