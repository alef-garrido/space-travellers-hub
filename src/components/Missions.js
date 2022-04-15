// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMissionsTrue, toggleMissionsFalse } from '../Redux/missions/missions';
import './Styles/mission.css';

const missionsContainerStyle = {
  hight: '25rem',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 2rem',
};

export default function Missions() {
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
                <td>
                  {
                missions.reserved
                  ? (
                    <div className="table-btn">
                      <button
                        type="button"
                      >
                        Active member
                      </button>
                      <button
                        onClick={() => dispatch(toggleMissionsFalse(missions.id))}
                        type="button"
                      >
                        Leave Mission
                      </button>
                    </div>
                  )
                  : (
                    <div className="table-btn">
                      <button
                        type="button"
                      >
                        Not a member
                      </button>
                      <button
                        onClick={() => dispatch(toggleMissionsTrue(missions.id))}
                        type="button"
                      >
                        Join mission
                      </button>
                    </div>
                  )
              }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : <h1>***Loading***</h1>}
    </div>
  );
}
