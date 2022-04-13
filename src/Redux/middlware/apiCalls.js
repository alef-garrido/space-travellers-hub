/* eslint-disable consistent-return */
import { apiRequest, apiRequestFailed } from '../slices/rockets-dux';

const apiCalls = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiRequest.type) return next(action);

  const {
    method, onSuccess, onStart, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

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
      .then((data) => data);
    if (onSuccess) dispatch({ type: onSuccess, payload: apiResponse });
  } catch (error) {
    dispatch(apiRequestFailed(error.message));
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default apiCalls;
