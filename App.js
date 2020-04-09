/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Platform,
  YellowBox,
  View,
  I18nManager,
  Text,
} from 'react-native';
import styles from './style';
import SplashScreen from 'react-native-splash-screen';
import {createAppContainer} from 'react-navigation';
import MainScreenNavigator from '@config/route';
import {Provider} from 'react-redux';
import configureStore from '@app/redux/store';
import {Root} from 'native-base';
const Appindex = createAppContainer (MainScreenNavigator);
const store = configureStore ();
import RNRestart from 'react-native-restart';
import i18n from '@localization/i18n';
import AsyncStorage from '@react-native-community/async-storage';
import {interceptor} from '@app/config/interceptor';
import Netinfo from '@app/shared/Netinfo/Netinfo';

if (__DEV__) {
  /* eslint no-undef: 0 */
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;
}

class App extends Component {
  constructor (props) {
    super (props);
  }
  componentDidMount () {
    SplashScreen.hide ();
    // this.switch_Lang ();
  }

  // switch_Lang = async () => {
  // const userlang = await AsyncStorage.getItem ('lang');
  // if (userlang !== null) {
  //   if (userlang === 'da') {
  //     I18nManager.forceRTL (true);
  //     if (!I18nManager.isRTL) {
  //       RNRestart.Restart ();
  //     }
  //   } else {
  //     I18nManager.forceRTL (false);
  //     if (I18nManager.isRTL) {
  //       RNRestart.Restart ();
  //     }
  //   }
  //   i18n.locale = userlang;
  //   // RNRestart.Restart ();
  // }
  // };
  render () {
    YellowBox.ignoreWarnings ([
      'ViewPagerAndroid',
      'Remote debugger is in a background tab which may cause apps to perform slowly',
    ]);
    console.disableYellowBox = true;
    return (
      <Fragment>
        <SafeAreaView style={styles.topnotchContainer} />
        <SafeAreaView style={styles.bottomnotchContainer}>
          <Provider store={store}>
            <Root>

              <Netinfo />
              <Appindex />

            </Root>
          </Provider>
        </SafeAreaView>

      </Fragment>
    );
  }
}

export default App;
