import React from 'react';
import { useSelector } from 'react-redux';
import './Styles/myProfile.css';

function MyProfile() {
  const user = useSelector((state) => state);
  console.log(user);
  const reservedList = user.rockets.list.filter((rocket) => rocket.reserved === true);
  return (
    <div className="profile--container">
      <section className="mission--list-container">
        <h3>My Missions</h3>
        <ul className="rocket--list" />
      </section>
      <section className="rocket--list-container">
        <h3>My Rockets</h3>
        <ul className="rocket--list">
          {
            reservedList
              ? reservedList.map((rocket) => <li className="rocket-item" key={rocket.id}>{rocket.rocket_name}</li>)
              : 'Reserve your first Rocket'
          }
        </ul>
      </section>
    </div>
  );
}

export default MyProfile;
