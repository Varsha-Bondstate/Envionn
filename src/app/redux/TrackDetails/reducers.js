/* jshint ignore:start */

import TrackDetailsType from './types';

const initialState = {
  loading: false,
  error: null,
  Stepssave: {},
  getactivities: {},
};

// reducer
const TrackDetailsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TrackDetailsType.FETCH_TRACKDETAILS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case TrackDetailsType.FETCH_TRACKDETAILS_GETACTIVITIES:
      return {
        ...state,
        getactivities: action.payload,
        loading: false,
      };
    case TrackDetailsType.FETCH_TRACKDETAILS_SAVE_STEPS:
      return {
        ...state,
        Stepssave: action.payload,
        loading: false,
      };
    case TrackDetailsType.FETCH_TRACKDETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default TrackDetailsReducer;
