/* jshint ignore:start */

import axios from 'axios';
import constant from '@config/constant';
import startUpAction from './actions';
import AsyncStorage from '@react-native-community/async-storage';
// for lodash
import _ from 'lodash';

// save token in storage
saveToken = async token => {
  try {
    let items = await AsyncStorage.setItem ('userToken', token);
    console.log ('userToken', token);
  } catch (e) {
    // save error
  }
};

// Login api
export function updateNetstatus (status) {
  return dispatch => {
    dispatch (startUpAction.netstatus (status));
  };
}

// Login api
export function LogIn (user) {
  return dispatch => {
    dispatch (startUpAction.fetchStartUpBegin ());

    var post_val = {
      email: user.email,
      password: user.password,
      device: user.deviceId,
      platform: user.platform,
    };

    return axios
      .post (`${constant.phpHost}/user/login`, post_val)
      .then (response => {
        console.log ('response', response);
        if (response.data) {
          saveToken (response.data.records.user_token);
        }
        dispatch (startUpAction.fetchStartupLogin (response.data));
      })
      .catch (error => {
        dispatch (startUpAction.fetchStartUpFailure (error));
        console.log ('catch result', error);
      });
  };
}

// email exit
export function emailExist (email) {
  console.log (email);
  return dispatch => {
    dispatch (startUpAction.fetchStartUpBegin ());
    return axios
      .post (`${constant.phpHost}/user/check_email_signup`, {
        email: email,
      })
      .then (res => {
        if (res) {
          dispatch (startUpAction.fetchStartUpEmailAlreadyExist (res.data));
        }
      })
      .catch (message => {
        dispatch (startUpAction.fetchStartUpFailure (message));
      });
  };
}

// register api
export function singUP (user) {
  return dispatch => {
    dispatch (startUpAction.fetchStartUpBegin ());

    return axios
      .post (`${constant.phpHost}/user/signup`, {
        device: user.device,
        platform: user.platform,
        email: user.email,
        password: user.password,
        f_name: user.f_name,
        l_name: user.l_name,
        dob: user.dob,
        phone: user.phone,
        gender: user.gender,
        language_code: user.language_code,
        image: user.image,
        ext: user.ext,
      })
      .then (res => {
        if (res) {
          if (res.data) {
            saveToken (res.data.records.user_token);
          }
          dispatch (startUpAction.fetchStartUpSignup (res.data));
        }
      })
      .catch (message => {
        dispatch (startUpAction.fetchStartUpFailure (message));
      });
  };
}

// user details for profile api
export function get_user_details () {
  return dispatch => {
    dispatch (startUpAction.fetchStartUpBegin ());
    return axios
      .post (`${constant.phpHost}/user/user_details`, {})
      .then (res => {
        if (res) {
          dispatch (startUpAction.fetchStartUpUserDetails (res.data));
        }
      })
      .catch (message => {
        dispatch (startUpAction.fetchStartUpFailure (message));
      });
  };
}

// profile save api

export function save_user (params) {
  return dispatch => {
    dispatch (startUpAction.fetchStartUpBegin ());
    return axios
      .post (`${constant.phpHost}/user/save_user`, {
        f_name: params.f_name,
        l_name: params.l_name,
        phone: params.phone,
        gender: params.gender,
        language_code: params.language_code,
        dob: params.dob,
        ext: params.ext,
        image: params.image,
      })
      .then (res => {
        if (res) {
          dispatch (startUpAction.fetchStartUpSaveUser (res.data));
        }
      })
      .catch (message => {
        dispatch (startUpAction.fetchStartUpFailure (message));
      });
  };
}

//Profile info api
export function profile_step_info (param) {
  console.log (param);
  return dispatch => {
    dispatch (startUpAction.fetchStartUpBegin ());
    return axios
      .post (`${constant.phpHost}/steps/profile_step_info`, {
        period: param.period,
      })
      .then (res => {
        if (res) {
          dispatch (startUpAction.fetchStartUpProfileInfo (res.data));
        }
      })
      .catch (message => {
        dispatch (startUpAction.fetchStartUpFailure (message));
      });
  };
}
