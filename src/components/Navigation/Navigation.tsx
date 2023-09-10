import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="list-item">
            <NavLink to="/" className={location.pathname === '/' ? 'active' : 'title'}>
              Home
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/vote" className={location.pathname === '/vote' ? 'active' : 'title'}>
              Vote
            </NavLink>
          </li>

          <li className="list-item">
            <NavLink to="/breeds" className={location.pathname === '/breeds' ? 'active' : 'title'}>
              Breeds
            </NavLink>
          </li>

          <li className="list-item">
            <NavLink
              to="/images-search"
              className={location.pathname === '/images-search' ? 'active' : 'title'}
            >
              Images/Search
            </NavLink>
          </li>

          <li className="list-item">
            <NavLink
              to="/favorites"
              className={location.pathname === '/favorites' ? 'active' : 'title'}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
