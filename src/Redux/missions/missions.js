import axios from 'axios';

// Actions
const FETCH_MISSIONS_REQUEST = 'FETCH_MISSIONS_REQUEST';
const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
const FETCH_MISSIONS_FAILURE = 'FETCH_MISSIONS_FAILURE';
const TOGGLE_TRUE = 'TOGGLE_TRUE';
const TOGGLE_FALSE = 'TOGGLE_FALSE';

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

export const toggleMissionsTrue = (id) => (
  {
    type: TOGGLE_TRUE,
    id,
  }
);

export const toggleMissionsFalse = (id) => (
  {
    type: TOGGLE_FALSE,
    id,
  }
);

// Reducers

const missionsReducer = (state = initialState, action = {}) => {
  // const newState = { ...state };
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

    case TOGGLE_TRUE:

      return {
        ...state,
        mission: state.mission.map((i) => {
          console.log(i);
          if (i.id !== action.id) return i;
          return { ...i, reserved: true };
        }),
      };

    default: return state;
  }
};

export default missionsReducer;
