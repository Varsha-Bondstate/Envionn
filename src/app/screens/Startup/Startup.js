/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* jshint ignore:start */


import {
 createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fonts from '@lib/font';
import colors from '@lib/color';
import FrontPageScreen from '@components/StartupComponent/FrontPage/FrontPage';

export const Startup = createStackNavigator(
  {
   FrontPage: { screen: FrontPageScreen},
  },
  { 
  headerMode:'none',
  initialRouteName: 'FrontPage',
} // Updated
);
export default Startup;