import React from 'react';
import { useSelector } from 'react-redux';
import './Styles/myProfile.css';

function MyProfile() {
  const user = useSelector((state) => state);
  const missionList = user.missions.missions;
  const reservedList = user.rockets.list.filter((rocket) => rocket.reserved === true);
  return (
    <div className="profile--container">
      <section className="mission--list-container">
        {(missionList === undefined)
          ? ('Reserve your first mission and rocket') : (
            <div className="mission-cont">
              <h3>My Missions</h3>
              <ul className="mission--list">
                {
                    missionList.filter((mission) => mission.reserved)
                      .map((mission) => (
                        <li className="mission-item" key={mission.id}>
                          {mission.name}
                        </li>
                      ))
                  }
              </ul>
            </div>
          )}
        {/* <ul className="rocket--lis  t" /> */}
      </section>
      <section className="rocket--list-container">
        <h3>My Rockets</h3>
        <ul className="rocket--list">
          {
            reservedList
              ? reservedList.map((rocket) => <li className="rocket-item" key={rocket.id}>{rocket.rocket_name}</li>)
              : 'Reserve your first mission and rocket'
          }
        </ul>
      </section>
    </div>
  );
}

export default MyProfile;
