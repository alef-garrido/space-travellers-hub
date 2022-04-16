import React from 'react';
import { useSelector } from 'react-redux';
import './Styles/myProfile.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets.list);
  const reservedList = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div>
      <section className="rocket--list-container">
        <h3>My Rockets</h3>
        <ul className="rocket--list">
          {
             rockets
               ? reservedList.map((rocket) => <li className="rocket-item" key={rocket.id}>{rocket.rocket_name}</li>)
               : null
           }
        </ul>
      </section>
    </div>
  );
}

export default MyProfile;
