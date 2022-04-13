import { Link } from 'react-router-dom';
import './Styles/navlink.css';
import logo from '../assets/planet.png';

function NavLink() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    }];

  return (
    <nav className="nav--container">
      <div className="logo--container">
        <img src={logo} alt="" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="nav--menu">
        {links.map((link) => (
          <li
            key={link.id}
            className="nav--item"
          >
            <Link
              className="item--link"
              to={link.path}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLink;
