import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import './Styles/rockets.css';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const { list, isLoading } = rockets;

  return (
    <ul className="list--container">
      {
      isLoading
        ? 'loading'
        : list.map((item) => (<Rocket key={item.id} rocket={item} />))
      }
    </ul>
  );
}

export default Rockets;
