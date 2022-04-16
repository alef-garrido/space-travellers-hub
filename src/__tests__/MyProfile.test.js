import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile';
import store from '../Redux/store';

it('it works', () => {
  const tree = render(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
