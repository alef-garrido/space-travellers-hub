import axios from 'axios';

// Actions
const FETCH_MISSIONS_REQUEST = 'FETCH_MISSIONS_REQUEST';
const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
const FETCH_MISSIONS_FAILURE = 'FETCH_MISSIONS_FAILURE';
const TOGGLE_RESERVE = 'TOGGLE_RESERVE';

// Initial state

// const initialState = {
//   loading: false,
//   missions: [],
//   error: ' ',
// };
const initialState = [];
// Action creators

export const fetchMissionsList = () => async (dispatch) => {
  dispatch({
    type: FETCH_MISSIONS_REQUEST,
  });
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const missions = response.data;
    const payload = missions.map((missions) => ({
      id: missions.mission_id,
      name: missions.mission_name,
      descriptions: missions.description,
      reserved: false,
    }));
    dispatch({
      type: FETCH_MISSIONS_SUCCESS,
      payload,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MISSIONS_FAILURE,
      payload: error.message,
    });
  }
};

export const toggleMissionsReserved = (id) => (
  {
    type: TOGGLE_RESERVE,
    id,
  }
);

// Reducers

const missionsReducer = (state = initialState, action = {}) => {
  const newState = { ...state };
  switch (action.type) {
    case FETCH_MISSIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MISSIONS_SUCCESS:
      return {
        ...state,
        missions: action.payload,
        loading: false,
      };
    case FETCH_MISSIONS_FAILURE:
      return {
        ...state,
        missions: [],
        loading: false,
        error: action.payload,
      };

    case TOGGLE_RESERVE:

      for (let i = 0; i < newState.missions.length; i += 1) {
        if (newState.missions[i].id === action.id) {
          newState.missions[i].reserved;
        }
      }
      return newState;
    default: return state;
  }
};

//     case TOGGLE_RESERVE:
//       newState.map((mission) => {
//         if (mission.id === action.id) {
//           return { ...mission, reserved: !mission.reserved };
//         } return mission;
//       });
//        return newState;

//     default:
//       return state;
//   }
// };

export default missionsReducer;
