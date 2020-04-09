/* jshint ignore:start */

import RewardsType from './types';

const initialState = {
  loading: false,
  error: null,
  getcategory: {},
  getrewards: {},
  getcoins: {},
  getrewardsById: {},
  getcouponcode: {},
  getredeemrewards: {},
};

// reducer
const RewardsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RewardsType.FETCH_REWARDS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case RewardsType.FETCH_REWARDS_GETCATEGORY:
      return {
        ...state,
        getcategory: action.payload,
        loading: false,
      };
    case RewardsType.FETCH_REWARDS_GETREWARDS:
      return {
        ...state,
        getrewards: action.payload,
        loading: false,
      };
    case RewardsType.FETCH_REWARDS_GETCOINS:
      return {
        ...state,
        getcoins: action.payload,
        loading: false,
      };
    case RewardsType.FETCH_REWARDS_GETREWARDSBYID:
      return {
        ...state,
        getrewardsById: action.payload,
        loading: false,
      };
    case RewardsType.FETCH_REWARDS_GETCOUPONCODE:
      return {
        ...state,
        getcouponcode: action.payload,
        loading: false,
      };
    case RewardsType.FETCH_REWARDS_REDEEMREWARD:
      return {
        ...state,
        getredeemrewards: action.payload,
        loading: false,
      };
    case RewardsType.FETCH_REWARDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default RewardsReducer;
