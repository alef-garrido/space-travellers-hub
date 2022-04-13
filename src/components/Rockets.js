import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRockets } from '../Redux/slices/rockets-dux';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const { list, isLoading } = rockets;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRockets());
  }, []);
  return (
    <ul>
      {
      isLoading
        ? 'loading'
        : list.map((item) => (
          <li key={item.id}>
            <p>{item.rocket_name}</p>
            <p>{item.rocket_type}</p>
            <button type="button">Reserve Rocket</button>
          </li>
        ))
      }
    </ul>
  );
}

export default Rockets;
