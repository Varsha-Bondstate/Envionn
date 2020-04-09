/*eslint-disable */
/* jshint ignore:start */

import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';

// Add a request interceptor
axios.interceptors.request.use (
  async function (config) {
    const token = await AsyncStorage.getItem ('userToken');
    if (token !== null)
      (config.headers.Authorization = `Bearer ${token}`), (axios.defaults.baseURL =
        process.env.BASE_API_URL), (config.headers.hd = 'hd123');
    else config.headers.hd = 'hd123';
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

// Add a response interceptor
axios.interceptors.response.use (
  function (response) {
    // console.log ('response', response);
    // Do something with response data
    return response;
  },
  function (error) {
    console.log ('error', error);
    // Do something with response error
    return Promise.reject (error);
  }
);
