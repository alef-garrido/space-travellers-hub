import { useSelector } from 'react-redux';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const { list, isLoading } = rockets;
  return (
    <ul>
      {
      isLoading
        ? 'loading'
        : list.map((item) => (
          <li key={item.id}>
            <img alt="" src={item.flickr_images[0]} />
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
