import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsList } from '../Redux/missions/missions';

const missionsContainerStyle = {
  hight: '25rem',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 2rem',
};

function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissionsList());
  }, []);
  const missionLists = useSelector((state) => state.missions);
  const loadingStatus = missionLists.loading;
  // console.log(loadingStatus);
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
            // console.log(missions)
            <div key={missions.id} className="d-grid">
              <h3>{missions.name}</h3>
              <p>{missions.descriptions}</p>
              {/* <h3>{missions.name}</h3> */}
              {/* <li>{`id:${missions.id} and name:${missions.name}`}</li>
              <li>{`description: ${missions.descriptions}`}</li> */}
            </div>
          ))}
        </div>
      ) : <h1>***Loading***</h1>}
    </div>
  );
}

export default Missions;
