import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import store from '../Redux/store';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})

