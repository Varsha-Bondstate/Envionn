/* jshint ignore:start */

import React, {PureComponent} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';
import colors from '@lib/color';
import fonts from '@lib/font';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import I18n from '@localization/i18n';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AuthLoadingScreen from '@components/AuthComponent/AuthComponent';
import LoginScreen from '@components/StartupComponent/Login/Login';
import SignUpScreen from '@components/StartupComponent/Signup/Signup';
import FrontPageScreen from '@components/StartupComponent/FrontPage/FrontPage';
import dashboardScreen from '@screens/Dashboard/Dashboard';
import rewardsScreen from '@screens/Rewards/Rewards';
import trackScreen from '@screens/Track/Track';
import socialScreen from '@screens/Social/Social';
import profileScreen from '@screens/Profile/Profile';
import PrivacyScreen from '@components/StartupComponent/Privacy/Privacy';
import SettingsScreen from '@components/ProfileComponent/Settings/Settings';
import venuesideScreen from '@components/RewardsComponent/venueside/venueside';
import RedeemScreen from '@components/RewardsComponent/Redeem/Redeem';
import EditprofileScreen
  from '@components/ProfileComponent/Editprofile/Editprofile';
import FriendsProfileScreen
  from '@components/SocialComponent/FriendsProfile/FriendsProfile';

const {width, height} = Dimensions.get ('window');
console.log ('width', width, height);
export const startUpRouter = createStackNavigator (
  {
    FrontPage: {
      screen: FrontPageScreen,
      navigationOptions: ({navigation}) => ({
        headerTransparent: true,
        title: '',
      }),
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
    Privacy: {
      screen: PrivacyScreen,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'FrontPage',
  }
);

export const dashboardRouter = createStackNavigator ({
  dashboard: {
    screen: dashboardScreen,
    navigationOptions: ({navigation}) => ({
      headerTintColor: colors.white,
      headerTransparent: true,
      title: '',
    }),
  },
});

export const rewardsRouter = createStackNavigator (
  {
    rewards: {
      screen: rewardsScreen,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
    venueside: {
      screen: venuesideScreen,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
    Redeem: {
      screen: RedeemScreen,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'rewards',
  }
);

export const trackRouter = createStackNavigator ({
  track: {
    screen: trackScreen,
    navigationOptions: ({navigation}) => ({
      headerTintColor: colors.white,
      headerTransparent: true,
      title: '',
    }),
  },
});

export const socialRouter = createStackNavigator (
  {
    social: {
      screen: socialScreen,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
    FriendsProfile: {
      screen: FriendsProfileScreen,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'social',
  }
);

export const profileRouter = createStackNavigator (
  {
    profile: {
      screen: profileScreen,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
    settings: {
      screen: SettingsScreen,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
    Editprofile: {
      screen: EditprofileScreen,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'profile',
  }
);

export const afterLoginTabNavigator = createBottomTabNavigator (
  {
    Dash: {
      screen: dashboardRouter,
      navigationOptions: {
        tabBarLabel: I18n.t ('route_page.Dashboard_label'),
        tabBarIcon: ({focused, tintColor}) => {
          return (
            <Image
              style={{
                width: wp ('6.5%'),
                height: hp ('3.5%'),
              }}
              source={
                focused == true
                  ? require ('@assets/images/leafs.png')
                  : require ('@assets/images/leafs_grey.png')
              }
            />
          );
        },
      },
    },
    rewards: {
      screen: rewardsRouter,
      navigationOptions: {
        tabBarLabel: I18n.t ('route_page.Rewards_label'),
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            focused={focused}
            type="font-awesome"
            name="gift"
            color={tintColor}
            size={hp ('4%')}
          />
        ),
      },
    },
    track: {
      screen: trackRouter,
      navigationOptions: {
        tabBarLabel: <View />,
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            focused={focused}
            type="entypo"
            name="circle"
            color={tintColor}
            size={hp ('5.8%')}
          />
        ),
      },
    },
    social: {
      screen: socialRouter,
      navigationOptions: {
        tabBarLabel: I18n.t ('route_page.Social_label'),
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            focused={focused}
            type="font-awesome"
            name="group"
            color={tintColor}
            size={hp ('3.5%')}
          />
        ),
      },
    },
    profile: {
      screen: profileRouter,
      navigationOptions: {
        tabBarLabel: I18n.t ('route_page.Profile_label'),
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            focused={focused}
            type="font-awesome"
            name="user-circle-o"
            color={tintColor}
            size={hp ('3.5%')}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.btncolor,
      inactiveTintColor: colors.menuInactive,
      style: {
        height: height / 12,
        width: width,
      },
      labelStyle: {
        fontSize: hp ('1.9555%'),
        margin: 0,
        padding: 0,
      },
      tabStyle: {
        backgroundColor: colors.black,
        paddingTop: hp ('2%'),
      },
      iconStyle: {
        flexGrow: 1,
      },
    },
    animationEnabled: true,
    swipeEnabled: true,
    resetOnBlur: 'true',
  }
);

export const MainScreenNavigator = createStackNavigator (
  {
    AuthLoading: {
      screen: AuthLoadingScreen,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
    beforeLogin: {
      screen: startUpRouter,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
    afterLogin: {
      screen: afterLoginTabNavigator,
      navigationOptions: ({navigation}) => ({
        headerTintColor: colors.white,
        headerTransparent: true,
        title: '',
      }),
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'AuthLoading',
  }
);

export default MainScreenNavigator;
