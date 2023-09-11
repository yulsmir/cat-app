import './Header.css';
import Logo from '../Logo';
import Navigation from '../Navigation/Navigation';
import CatWalk from '../CatWalk/CatWalk';

function Header() {
  return (
    <header>
      {/* <Logo /> */}
      <CatWalk />
      <Navigation />
    </header>
  );
}

export default Header;
