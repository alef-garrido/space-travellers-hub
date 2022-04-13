import { useDispatch, useSelector } from 'react-redux';
import { rocketReserved, rocketReservedCanceled } from '../Redux/slices/rockets-dux';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const { list, isLoading } = rockets;

  const reserveHandler = (e) => {
    dispatch(rocketReserved(e.target.parentNode.id));
  };

  const cancellationHandler = (e) => {
    dispatch(rocketReservedCanceled(e.target.parentNode.id));
  };

  return (
    <ul>
      {
      isLoading
        ? 'loading'
        : list.map((item) => (
          <li key={item.id} id={item.id}>
            <img alt="" src={item.flickr_images[0]} />
            <p>{item.rocket_name}</p>
            <p>{item.rocket_type}</p>
            <button
              type="button"
              onClick={reserveHandler}
            >
              Reserve Rocket
            </button>
            <button
              type="button"
              onClick={cancellationHandler}
            >
              Cancel Reservation
            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default Rockets;
