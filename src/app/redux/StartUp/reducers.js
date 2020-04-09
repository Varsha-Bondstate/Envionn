/* jshint ignore:start */

import StartUpType from './types';

const initialState = {
  loading: false,
  error: null,
  Login: {},
  signup: {},
  emailExist: {},
  userDetails: {},
  saveuser: {},
  profileinfo: {},
  connection: '',
};

// reducer
const StartUpReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case StartUpType.FETCH_STARTUP_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case StartUpType.CHECKNETSTATUS:
      return {
        ...state,
        connection: action.payload,
        loading: false,
      };
    case StartUpType.FETCH_STARTUP_LOGIN:
      return {
        ...state,
        Login: action.payload,
        loading: false,
      };
    case StartUpType.FETCH_STARTUP_SIGNUP:
      return {
        ...state,
        signup: action.payload,
        loading: false,
      };
    case StartUpType.FETCH_STARTUP_EMAIL_ALREADY_EXIST:
      return {
        ...state,
        emailExist: action.payload,
        loading: false,
      };
    case StartUpType.FETCH_STARTUP_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
        loading: false,
      };
    case StartUpType.FETCH_STARTUP_SAVE_USER:
      return {
        ...state,
        saveuser: action.payload,
        loading: false,
      };
    case StartUpType.FETCH_STARTUP_PROFILE_INFO:
      return {
        ...state,
        profileinfo: action.payload,
        loading: false,
      };
    case StartUpType.FETCH_STARTUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default StartUpReducer;
