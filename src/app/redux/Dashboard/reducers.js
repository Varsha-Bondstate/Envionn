/* jshint ignore:start */

import DashboardType from './types';

const initialState = {
  loading: false,
  error: null,
  getdashboardsteps: {},
  steplevels: {},
  goalachieved: {},
};

// reducer
const DashboardReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DashboardType.FETCH_DASHBOARD_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case DashboardType.FETCH_DASHBOARD_GETSTEPS:
      return {
        ...state,
        getdashboardsteps: action.payload,
        loading: false,
      };
    case DashboardType.FETCH_DASHBOARD_GETSTEPLEVELS:
      return {
        ...state,
        steplevels: action.payload,
        loading: false,
      };
    case DashboardType.FETCH_DASHBOARD_GOAL_ACHIEVED:
      return {
        ...state,
        goalachieved: action.payload,
        loading: false,
      };
    case DashboardType.FETCH_DASHBOARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default DashboardReducer;
