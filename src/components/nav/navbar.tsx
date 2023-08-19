import CatAnimation from './catAnimation';

export default function Navbar() {
  return (
    <>
      <div class="container">
        <div class="logo">
          <CatAnimation />
        </div>
        <ul class="menu">
          <li>
            <a href="#home" class="menu-btn">
              Home
            </a>
          </li>
          <li>
            <a href="#about" class="menu-btn">
              About
            </a>
          </li>
          <li>
            <a href="#cats" class="menu-btn">
              Cats
            </a>
          </li>
          <li>
            <a href="#contact" class="menu-btn">
              Contact
            </a>
          </li>
        </ul>
        <div class="menu-btn">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </>
  );
}
