/* jshint ignore:start */
import RewardsType from './types';

// actions
const fetchRewardsBegin = () => ({
  type: RewardsType.FETCH_REWARDS_BEGIN,
});
const fetchRewardsGetCategory = payload => ({
  type: RewardsType.FETCH_REWARDS_GETCATEGORY,
  payload: payload,
});
const fetchGetRewards = payload => ({
  type: RewardsType.FETCH_REWARDS_GETREWARDS,
  payload: payload,
});

const fetchGetcoins = payload => ({
  type: RewardsType.FETCH_REWARDS_GETCOINS,
  payload: payload,
});
const fetchGetRewardsById = payload => ({
  type: RewardsType.FETCH_REWARDS_GETREWARDSBYID,
  payload: payload,
});

const fetchGetcouponcode = payload => ({
  type: RewardsType.FETCH_REWARDS_GETCOUPONCODE,
  payload: payload,
});
const fetchRedeemReward = payload => ({
  type: RewardsType.FETCH_REWARDS_REDEEMREWARD,
  payload: payload,
});
const fetchRewardsFailure = payload => ({
  type: RewardsType.FETCH_REWARDS_FAILURE,
  payload: payload,
});

export default {
  fetchRewardsBegin,
  fetchRewardsGetCategory,
  fetchGetRewards,
  fetchGetcoins,
  fetchGetRewardsById,
  fetchGetcouponcode,
  fetchRedeemReward,
  fetchRewardsFailure,
};
