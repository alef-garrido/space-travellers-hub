import { Link } from 'react-router-dom';

function Navbar() {
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
    <nav>
      <h1>Space Travelers&apos; Hub</h1>
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className="nav--item"
          >
            <Link to={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
