import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets.list);
  return (
    <div>
      <section>
        <h3>My Rockets</h3>
        <ul className="reserved--list">
          {
            rockets
              ? rockets.map((rocket) => <li key={rocket.id}>{rocket.rocket_name}</li>)
              : null
          }
        </ul>
      </section>
    </div>
  );
}

export default MyProfile;
