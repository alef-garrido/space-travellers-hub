import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavLink from './NavLink';
import Rockets from './Rockets';
import MyProfile from './MyProfile';
import Missions from './Missions';
import { loadRockets } from '../Redux/slices/rockets-dux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRockets());
  }, []);
  return (
    <div className="app--container">
      <NavLink />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
