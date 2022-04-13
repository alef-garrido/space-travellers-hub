import { useDispatch, useSelector } from 'react-redux';
import { rocketReserved } from '../Redux/slices/rockets-dux';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const { list, isLoading } = rockets;

  const clickHandler = (e) => {
    dispatch(rocketReserved(e.target.parentNode.id));
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
              onClick={clickHandler}
            >
              Reserve Rocket
            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default Rockets;
