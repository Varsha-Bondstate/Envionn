/* eslint-disable no-unused-vars */
/*jshint esversion: 6 */
/* jshint ignore:start */

import {combineReducers} from 'redux';
import StartUpReducer from '@redux/StartUp';
import TrackDetailsReducer from '@redux/TrackDetails';
import DashboardReducer from '@redux/Dashboard';
import RewardsReducer from '@redux/Rewards';
import SocialReducer from '@redux/Social';

const rootReducer = combineReducers ({
  startUp: StartUpReducer,
  TrackDetails: TrackDetailsReducer,
  Dashboard: DashboardReducer,
  Rewards: RewardsReducer,
  Social: SocialReducer,
});

export default rootReducer;
