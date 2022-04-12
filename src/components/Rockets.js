import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRockets } from '../Redux/slices/rockets-dux';

function Rockets() {
  const rockets = useSelector((state) => state.Rockets.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRockets());
  }, []);
  console.log(rockets);
  return (
    <>Loading</>
  );
}

export default Rockets;
