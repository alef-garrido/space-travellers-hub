import { useDispatch, useSelector } from 'react-redux';
import { rocketReserved, rocketReservedCanceled } from '../Redux/slices/rockets-dux';
import './Styles/rockets.css';

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
    <ul className="list--container">
      {
      isLoading
        ? 'loading'
        : list.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className="list--item"
          >
            <div className="item--img-container">
              <img
                className="item--img"
                alt=""
                src={item.flickr_images[0]}
              />
            </div>
            <div className="item--info-container">
              <p>{item.rocket_name}</p>
              <p>{item.description}</p>
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
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default Rockets;
