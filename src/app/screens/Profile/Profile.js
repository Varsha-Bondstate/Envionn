/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* jshint ignore:start */

import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './style';
import ProfileComponent from '@components/ProfileComponent/Profile/Profile';

class Profile extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <View style={styles.container}>
        <ProfileComponent />

      </View>
    );
  }
}

export default Profile;
