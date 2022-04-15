// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMissionsTrue, toggleMissionsFalse } from '../Redux/missions/missions';

const missionsContainerStyle = {
  hight: '25rem',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 2rem',
};

function Missions() {
  const dispatch = useDispatch();
  const missionLists = useSelector((state) => state.missions);
  const loadingStatus = missionLists.loading;

  return (
    <div className="mission_container" style={missionsContainerStyle}>
      {(loadingStatus === false) ? (
        <div className="mission_list">
          <div className="d-grid">
            <h3>Mission</h3>
            <h3>Description</h3>
            <h3>Status</h3>
          </div>
          {missionLists.missions.map((missions) => (
            <div key={missions.id} className="d-grid">
              <h3>{missions.name}</h3>
              <p>{missions.descriptions}</p>
              <button
                onClick={() => dispatch(toggleMissionsFalse(missions.id))}
                type="button"
              >
                Leave Mission
              </button>
              <button
                type="button"
                onClick={() => dispatch(toggleMissionsTrue(missions.id))}
              >
                Join mission
              </button>
            </div>
          ))}
        </div>
      ) : <h1>***Loading***</h1>}
    </div>
  );
}

export default Missions;
