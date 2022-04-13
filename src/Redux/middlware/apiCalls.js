/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import { apiRequest, apiRequestFailed } from '../slices/rockets-dux';

const apiCalls = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiRequest.type) return next(action);
  next(action);

  const {
    method, onSuccess, onError,
  } = action.payload;

  try {
    const apiResponse = await fetch(
      'https://api.spacexdata.com/v3/rockets',
      {
        method,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        const newState = data.map((i) => {
          const {
            id, rocket_name, rocket_type, flickr_images,
          } = i;
          return {
            id, rocket_name, rocket_type, flickr_images,
          };
        });
        return newState;
      });
    if (onSuccess) dispatch({ type: onSuccess, payload: apiResponse });
  } catch (error) {
    dispatch(apiRequestFailed(error.message));
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default apiCalls;
