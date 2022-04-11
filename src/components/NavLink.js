import { Link } from 'react-router-dom';
import './Styles/navlink.css';

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
      <h1>Space Travelers&apos; Hub</h1>
      <ul className="nav--list">
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
