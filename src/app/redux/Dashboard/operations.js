/* jshint ignore:start */

import axios from 'axios';
import constant from '@config/constant';
import DashboardAction from './actions';
import AsyncStorage from '@react-native-community/async-storage';
// for lodash
import _ from 'lodash';
// Dashboardsteps api
export function GetDashboardSteps () {
  return dispatch => {
    dispatch (DashboardAction.fetchDashboardBegin ());
    return axios
      .post (`${constant.phpHost}/steps/dashboard_steps`, {})
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (DashboardAction.fetchDashboardGetsteps (res.data));
        }
      })
      .catch (error => {
        dispatch (DashboardAction.fetchDashboardFailure (error));
        console.log ('catch result', error);
      });
  };
}
// get step levels api
export function GetStepLevels () {
  return dispatch => {
    dispatch (DashboardAction.fetchDashboardBegin ());
    return axios
      .post (`${constant.phpHost}/steps/get_step_levels`, {})
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (DashboardAction.fetchDashboardGetsteplevels (res.data));
        }
      })
      .catch (error => {
        dispatch (DashboardAction.fetchDashboardFailure (error));
        console.log ('catch result', error);
      });
  };
}

export function goal_achieved (params) {
  return dispatch => {
    dispatch (DashboardAction.fetchDashboardBegin ());
    return axios
      .post (`${constant.phpHost}/goal/Goal_achieved`, {
        goal: params.goal,
        activity: params.activity,
      })
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (DashboardAction.fetchDashboardGoalAchieved (res.data));
        }
      })
      .catch (error => {
        dispatch (DashboardAction.fetchDashboardFailure (error));
        console.log ('catch result', error);
      });
  };
}
