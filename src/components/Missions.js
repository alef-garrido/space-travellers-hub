// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMissionsTrue } from '../Redux/missions/missions';

const missionsContainerStyle = {
  hight: '25rem',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 2rem',
};

const joinButtonStyle = {
  marginLeft: '1rem',
  cursor: 'pointer',
  padding: '0.2rem 0',
  width: '7rem',
  height: '2.8rem',
};

const leaveButtonStyle = {
  border: '1px solid rgb(255,0,0)',
  backgroundColor: 'white',
  color: 'red',
  cursor: 'pointer',
  marginLeft: '1rem',
  padding: '0 0.5rem',
  width: '7rem',
  height: '2.8rem',
};

const membershipStyle = {
  backgroundColor: '#00ffff',
  color: '#000000',
  marginRight: '1rem',
  padding: '0.12rem 0',
  width: '7rem',
};

const notMemberStyle = {
  backgroundColor: '#a9a9a9',
  color: '#ffffff',
  marginRight: '1rem',
  padding: '0.12rem 0',
  width: '7rem',
};

function Missions() {
  const dispatch = useDispatch();
  const missionLists = useSelector((state) => state.missions);
  const loadingStatus = missionLists.loading;
  return (
    <div className="mission_container" style={missionsContainerStyle}>
      {(loadingStatus === false) ? (
        <table className="table">
          <tbody>
            <tr>
              <th className="t-header">Missions</th>
              <th className="t-header">Description</th>
              <th className="t-header">Status</th>
            </tr>
            {missionLists.missions.map((missions) => (
              <tr key={missions.id} className="table-row">
                <td className="missions-detail">{missions.name}</td>
                <td className="missions-detail">{missions.descriptions}</td>
                <td className="table-btn">
                  <button type="button" style={missions.reserved ? membershipStyle : notMemberStyle}>{missions.reserved ? 'Active member' : 'Not a member'}</button>
                  <button type="button" style={missions.reserved ? leaveButtonStyle : joinButtonStyle} onClick={() => dispatch(toggleMissionsTrue(missions.id))}>{missions.reserved ? 'Leave Mission' : 'Join Mission'}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : <h1>***Loading***</h1>}
    </div>
  );
}

export default Missions;
