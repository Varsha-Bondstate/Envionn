/* jshint ignore:start */

import SocialType from './types';

const initialState = {
  loading: false,
  error: null,
  saveimg: {},
  friendsList: {},
  explorerList: {},
  savelike: {},
  getfriendsprofile: {},
  follow: {},
  unfollow: {},
  search: {},
  getfriendsList: {},
};

// reducer
const SocialReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SocialType.FETCH_SOCIAL_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SocialType.FETCH_SOCIAL_ADDIMAGE:
      return {
        ...state,
        saveimg: action.payload,
        loading: false,
      };
    case SocialType.FETCH_SOCIAL_GETFRIENDS_POST:
      return {
        ...state,
        friendsList: action.payload,
        loading: false,
      };
    case SocialType.FETCH_SOCIAL_GETEXPLORER_POST:
      return {
        ...state,
        explorerList: action.payload,
        loading: false,
      };
    case SocialType.FETCH_SOCIAL_LIKE_SAVE:
      return {
        ...state,
        savelike: action.payload,
        loading: false,
      };
    case SocialType.FETCH_SOCIAL_FRIENDS_PROFILE:
      return {
        ...state,
        getfriendsprofile: action.payload,
        loading: false,
      };
    case SocialType.FETCH_SOCIAL_FOLLOW:
      return {
        ...state,
        follow: action.payload,
        loading: false,
      };
    case SocialType.FETCH_SOCIAL_UNFOLLOW:
      return {
        ...state,
        unfollow: action.payload,
        loading: false,
      };
    case SocialType.FETCH_SOCIAL_SEARCHFRIENDS:
      return {
        ...state,
        search: action.payload,
        loading: false,
      };
    case SocialType.FETCH_SOCIAL_FRIENDS_LIST:
      return {
        ...state,
        getfriendsList: action.payload,
        loading: false,
      };
    case SocialType.FETCH_SOCIAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default SocialReducer;
