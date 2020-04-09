/* jshint ignore:start */

import axios from 'axios';
import constant from '@config/constant';
import SocialAction from './actions';
import AsyncStorage from '@react-native-community/async-storage';
// for lodash
import _ from 'lodash';

// save image api
export function Save_Image (params) {
  return dispatch => {
    dispatch (SocialAction.fetchSocialBegin ());
    return axios
      .post (`${constant.phpHost}/social/save_social_post`, {
        image: params.image,
        ext: params.ext,
      })
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (SocialAction.fetchSocialAddImage (res.data));
        }
      })
      .catch (error => {
        dispatch (SocialAction.fetchSocialFailure (error));
        console.log ('catch result', error);
      });
  };
}

//get friends list api
export function get_friends_post (params) {
  return dispatch => {
    dispatch (SocialAction.fetchSocialBegin ());
    return axios
      .post (`${constant.phpHost}/social/get_friends_post`, {page: params.page})
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (SocialAction.fetchSocialGetFriendsPost (res.data));
        }
      })
      .catch (error => {
        dispatch (SocialAction.fetchSocialFailure (error));
        console.log ('catch result', error);
      });
  };
}

//get explorer list api
export function get_explore_post (params) {
  return dispatch => {
    dispatch (SocialAction.fetchSocialBegin ());
    return axios
      .post (`${constant.phpHost}/social/explore_post`, {})
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (SocialAction.fetchSocialGetExplorerPost (res.data));
        }
      })
      .catch (error => {
        dispatch (SocialAction.fetchSocialFailure (error));
        console.log ('catch result', error);
      });
  };
}

//get explorer list api
export function social_like (params) {
  return dispatch => {
    dispatch (SocialAction.fetchSocialBegin ());
    return axios
      .post (`${constant.phpHost}/social/social_like`, {
        poster_id: params.poster_id,
        social_id: params.social_id,
      })
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (SocialAction.fetchSocialSavelike (res.data));
        }
      })
      .catch (error => {
        dispatch (SocialAction.fetchSocialFailure (error));
        console.log ('catch result', error);
      });
  };
}

//get friends profile  api
export function get_friends_profile (params) {
  return dispatch => {
    dispatch (SocialAction.fetchSocialBegin ());
    return axios
      .post (`${constant.phpHost}/friend/Get_friend_page`, {
        f_id: params.f_id,
      })
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (SocialAction.fetchSocialfriendsprofile (res.data));
        }
      })
      .catch (error => {
        dispatch (SocialAction.fetchSocialFailure (error));
        console.log ('catch result', error);
      });
  };
}

//get friends Follow  api
export function friends_follow (params) {
  return dispatch => {
    dispatch (SocialAction.fetchSocialBegin ());
    return axios
      .post (`${constant.phpHost}/friend/follow`, {
        friend_id: params.friend_id,
      })
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (SocialAction.fetchSocialfollow (res.data));
        }
      })
      .catch (error => {
        dispatch (SocialAction.fetchSocialFailure (error));
        console.log ('catch result', error);
      });
  };
}

//get friends unFollow  api
export function friends_Unfollow (params) {
  return dispatch => {
    dispatch (SocialAction.fetchSocialBegin ());
    return axios
      .post (`${constant.phpHost}/friend/un_follow`, {
        friend_id: params.friend_id,
      })
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (SocialAction.fetchSocialunfollow (res.data));
        }
      })
      .catch (error => {
        dispatch (SocialAction.fetchSocialFailure (error));
        console.log ('catch result', error);
      });
  };
}

//get Search_friends  api
export function Search_friends (params) {
  return dispatch => {
    dispatch (SocialAction.fetchSocialBegin ());
    return axios
      .post (`${constant.phpHost}/friend/Search_friends`, {
        search_name: params.search_name,
      })
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (SocialAction.fetchSearchfriends (res.data));
        }
      })
      .catch (error => {
        dispatch (SocialAction.fetchSocialFailure (error));
        console.log ('catch result', error);
      });
  };
}

//get Search_friends  api
export function Get_friends_list () {
  return dispatch => {
    dispatch (SocialAction.fetchSocialBegin ());
    return axios
      .post (`${constant.phpHost}/friend/friendList`, {})
      .then (res => {
        console.log ('response', res);
        if (res.data) {
          dispatch (SocialAction.fetchFriendList (res.data));
        }
      })
      .catch (error => {
        dispatch (SocialAction.fetchSocialFailure (error));
        console.log ('catch result', error);
      });
  };
}
