/* jshint ignore:start */
import SocialType from './types';

// actions
const fetchSocialBegin = () => ({
  type: SocialType.FETCH_SOCIAL_BEGIN,
});
const fetchSocialAddImage = payload => ({
  type: SocialType.FETCH_SOCIAL_ADDIMAGE,
  payload: payload,
});
const fetchSocialGetFriendsPost = payload => ({
  type: SocialType.FETCH_SOCIAL_GETFRIENDS_POST,
  payload: payload,
});
const fetchSocialGetExplorerPost = payload => ({
  type: SocialType.FETCH_SOCIAL_GETEXPLORER_POST,
  payload: payload,
});
const fetchSocialSavelike = payload => ({
  type: SocialType.FETCH_SOCIAL_LIKE_SAVE,
  payload: payload,
});

const fetchSocialfriendsprofile = payload => ({
  type: SocialType.FETCH_SOCIAL_FRIENDS_PROFILE,
  payload: payload,
});
const fetchSocialfollow = payload => ({
  type: SocialType.FETCH_SOCIAL_FOLLOW,
  payload: payload,
});
const fetchSocialunfollow = payload => ({
  type: SocialType.FETCH_SOCIAL_UNFOLLOW,
  payload: payload,
});
const fetchSearchfriends = payload => ({
  type: SocialType.FETCH_SOCIAL_SEARCHFRIENDS,
  payload: payload,
});
const fetchFriendList = payload => ({
  type: SocialType.FETCH_SOCIAL_FRIENDS_LIST,
  payload: payload,
});
const fetchSocialFailure = payload => ({
  type: SocialType.FETCH_SOCIAL_FAILURE,
  payload: payload,
});

export default {
  fetchSocialBegin,
  fetchSocialAddImage,
  fetchSocialGetFriendsPost,
  fetchSocialGetExplorerPost,
  fetchSocialSavelike,
  fetchSocialfriendsprofile,
  fetchSocialfollow,
  fetchSocialunfollow,
  fetchSearchfriends,
  fetchFriendList,
  fetchSocialFailure,
};
