/* jshint ignore:start */

import axios from 'axios';
import constant from '@config/constant';
import RewardsAction from './actions';
import AsyncStorage from '@react-native-community/async-storage';
// for lodash
import _ from 'lodash';

// get category api
export function Get_all_category () {
  return dispatch => {
    dispatch (RewardsAction.fetchRewardsBegin ());
    return axios
      .post (`${constant.phpHost}/reward/all_category`, {})
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (RewardsAction.fetchRewardsGetCategory (res.data));
        }
      })
      .catch (error => {
        dispatch (RewardsAction.fetchRewardsFailure (error));
        console.log ('catch result', error);
      });
  };
}

// get category api
export function Get_Rewards (params) {
  return dispatch => {
    dispatch (RewardsAction.fetchRewardsBegin ());
    return axios
      .post (`${constant.phpHost}/reward/rewards`, {
        page: params.page,
        search: params.search,
        category_id: params.category_id,
      })
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (RewardsAction.fetchGetRewards (res.data));
        }
      })
      .catch (error => {
        dispatch (RewardsAction.fetchRewardsFailure (error));
        console.log ('catch result', error);
      });
  };
}

// get coins api
export function Get_Coins () {
  return dispatch => {
    dispatch (RewardsAction.fetchRewardsBegin ());
    return axios
      .post (`${constant.phpHost}/goal/get_coins`, {})
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (RewardsAction.fetchGetcoins (res.data));
        }
      })
      .catch (error => {
        dispatch (RewardsAction.fetchRewardsFailure (error));
        console.log ('catch result', error);
      });
  };
}

// get rewardsbyid api
export function Get_RewardsById (params) {
  return dispatch => {
    dispatch (RewardsAction.fetchRewardsBegin ());
    return axios
      .post (`${constant.phpHost}/reward/reward_by_id`, {
        reward_id: params.reward_id,
      })
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (RewardsAction.fetchGetRewardsById (res.data));
        }
      })
      .catch (error => {
        dispatch (RewardsAction.fetchRewardsFailure (error));
        console.log ('catch result', error);
      });
  };
}

// get Couponcode api
export function Get_coupon_code (params) {
  return dispatch => {
    dispatch (RewardsAction.fetchRewardsBegin ());
    return axios
      .post (`${constant.phpHost}/coupon/coupon_code`, {
        reward_id: params.reward_id,
      })
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (RewardsAction.fetchGetcouponcode (res.data));
        }
      })
      .catch (error => {
        dispatch (RewardsAction.fetchRewardsFailure (error));
        console.log ('catch result', error);
      });
  };
}

// get Couponcode api
export function Redeem_rewards (params) {
  return dispatch => {
    dispatch (RewardsAction.fetchRewardsBegin ());
    return axios
      .post (`${constant.phpHost}/coupon/Redeem`, {
        reward_id: params.reward_id,
        coins: params.coins,
      })
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (RewardsAction.fetchRedeemReward (res.data));
        }
      })
      .catch (error => {
        dispatch (RewardsAction.fetchRewardsFailure (error));
        console.log ('catch result', error);
      });
  };
}
