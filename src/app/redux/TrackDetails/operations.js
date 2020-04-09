/* jshint ignore:start */

import axios from 'axios';
import constant from '@config/constant';
import TrackDetailsAction from './actions';
import AsyncStorage from '@react-native-community/async-storage';
// for lodash
import _ from 'lodash';
// Login api
export function Save_Steps (params) {
  return dispatch => {
    dispatch (TrackDetailsAction.fetchTrackDetailsBegin ());
    return axios
      .post (`${constant.phpHost}/steps/save_steps`, {
        steps: params.steps,
        speed: params.speed,
        activity: params.activity,
        minutes: params.minutes,
        seconds: params.seconds,
        distance: params.distance,
      })
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (TrackDetailsAction.fetchTrackDetailsSaveSteps (res.data));
        }
      })
      .catch (error => {
        dispatch (TrackDetailsAction.fetchTrackDetailsFailure (error));
        console.log ('catch result', error);
      });
  };
}

export function get_activities () {
  return dispatch => {
    dispatch (TrackDetailsAction.fetchTrackDetailsBegin ());
    return axios
      .post (`${constant.phpHost}/steps/get_activity_type`, {})
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (
            TrackDetailsAction.fetchTrackDetailsGetActivities (res.data)
          );
        }
      })
      .catch (error => {
        dispatch (TrackDetailsAction.fetchTrackDetailsFailure (error));
        console.log ('catch result', error);
      });
  };
}
