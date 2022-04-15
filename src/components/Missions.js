// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMissionsReserved } from '../Redux/missions/missions';
import './Styles/mission.css';

const missionsContainerStyle = {
  hight: '25rem',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 2rem',
};

const joinButtonStyle = {
  marginLeft: '3rem',
  cursor: 'pointer',
};

const leaveButtonStyle = {
  border: '1px solid rgb(255,0,0)',
  backgroundColor: 'white',
  color: 'red',
  marginLeft: '3rem',
  cursor: 'pointer',
};

const membershipStyle = {
  backgroundColor: '#00ffff',
  color: '#000000',
  marginRight: '2rem',
};

const notMemberStyle = {
  backgroundColor: '#a9a9a9',
  color: '#ffffff',
  marginRight: '2rem',
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
              <div className="d-grid1">
                <button type="button" style={missions.reserved ? membershipStyle : notMemberStyle}>{missions.reserved ? 'Active member' : 'Not a member'}</button>
                <button type="button" style={missions.reserved ? leaveButtonStyle : joinButtonStyle} onClick={() => dispatch(toggleMissionsReserved(missions.id))}>{missions.reserved ? 'Leave Mission' : 'Join Mission'}</button>
              </div>
              </div>
          ))}
        </div>
      ) : <h1>***Loading***</h1>}
    </div>
  );
}

export default Missions;
