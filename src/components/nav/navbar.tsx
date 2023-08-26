import Logo from '../logo/logo';
// interface NavBarProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'> {
//   element: 'nav';
//   children: string;
// }

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div id="logo">
          <Logo element="div">cat logo</Logo>
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
};

export default Navbar;
