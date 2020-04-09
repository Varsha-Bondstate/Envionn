/* jshint ignore:start */
import StartUpType from './types';

// actions
const fetchStartUpBegin = () => ({
  type: StartUpType.FETCH_STARTUP_BEGIN,
});
const netstatus = status => ({
  type: StartUpType.CHECKNETSTATUS,
  payload: status,
});
const fetchStartUpSignup = payload => ({
  type: StartUpType.FETCH_STARTUP_SIGNUP,
  payload: payload,
});
const fetchStartupLogin = payload => ({
  type: StartUpType.FETCH_STARTUP_LOGIN,
  payload: payload,
});
const fetchStartUpEmailAlreadyExist = payload => ({
  type: StartUpType.FETCH_STARTUP_EMAIL_ALREADY_EXIST,
  payload: payload,
});
const fetchStartUpUserDetails = payload => ({
  type: StartUpType.FETCH_STARTUP_USER_DETAILS,
  payload: payload,
});
const fetchStartUpSaveUser = payload => ({
  type: StartUpType.FETCH_STARTUP_SAVE_USER,
  payload: payload,
});
const fetchStartUpProfileInfo = payload => ({
  type: StartUpType.FETCH_STARTUP_PROFILE_INFO,
  payload: payload,
});
const fetchStartUpFailure = payload => ({
  type: StartUpType.FETCH_STARTUP_FAILURE,
  payload: payload,
});

export default {
  netstatus,
  fetchStartUpBegin,
  fetchStartUpSignup,
  fetchStartupLogin,
  fetchStartUpEmailAlreadyExist,
  fetchStartUpUserDetails,
  fetchStartUpSaveUser,
  fetchStartUpProfileInfo,
  fetchStartUpFailure,
};
