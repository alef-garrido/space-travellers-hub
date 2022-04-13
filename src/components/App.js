import { Routes, Route } from 'react-router-dom';
import NavLink from './NavLink';
import Rockets from './Rockets';
import MyProfile from './MyProfile';

function App() {
  return (
    <div className="app--container">
      <NavLink />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
