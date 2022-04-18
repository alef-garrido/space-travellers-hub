import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import NavLink from '../components/NavLink';
import Rockets from '../components/Rockets';
import Missions from '../components/Missions';
import MyProfile from '../components/MyProfile';

it('it works', () => {
  const tree = render(
    <Router>
      <Provider store={store}>
        <NavLink />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="profile" element={<MyProfile />} />
        </Routes>
      </Provider>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  render(
    <Router>
      <Provider store={store}>
        <NavLink />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="profile" element={<MyProfile />} />
        </Routes>
      </Provider>
    </Router>,
  );
  expect(screen.getByText(/Space/)).toBeInTheDocument();
});
