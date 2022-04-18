import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../Redux/store';

it('it works', () => {
  const tree = render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  expect(screen.getByText('***Loading***')).toBeInTheDocument();
});
