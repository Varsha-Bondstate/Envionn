/* jshint ignore:start */
import DashboardType from './types';

// actions
const fetchDashboardBegin = () => ({
  type: DashboardType.FETCH_DASHBOARD_BEGIN,
});

const fetchDashboardGetsteps = payload => ({
  type: DashboardType.FETCH_DASHBOARD_GETSTEPS,
  payload: payload,
});

const fetchDashboardGetsteplevels = payload => ({
  type: DashboardType.FETCH_DASHBOARD_GETSTEPLEVELS,
  payload: payload,
});
const fetchDashboardGoalAchieved = payload => ({
  type: DashboardType.FETCH_DASHBOARD_GOAL_ACHIEVED,
  payload: payload,
});

const fetchDashboardFailure = payload => ({
  type: DashboardType.FETCH_DASHBOARD_FAILURE,
  payload: payload,
});

export default {
  fetchDashboardBegin,
  fetchDashboardGetsteps,
  fetchDashboardGetsteplevels,
  fetchDashboardGoalAchieved,
  fetchDashboardFailure,
};
