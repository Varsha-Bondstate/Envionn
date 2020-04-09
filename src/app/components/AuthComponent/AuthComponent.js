/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* jshint ignore:start */

import React, {PureComponent} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import colors from '@lib/color';
import baseStyles from '@lib/base';
import Spinner from '@components/SpinnerComponent/Spinner/Spinner';
import LinearGradient from 'react-native-linear-gradient';
class AuthComponent extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      isVisible: true,
    };
  }

  componentDidMount () {
    this.interval = setInterval (() => {
      this._bootstrapAsync ();
    }, 500);
    setTimeout (() => {
      this.setState ({isVisible: false}, function () {
        console.log ('isVisible', this.state.isVisible);
      });
    }, 800);
  }
  componentWillUnmount () {
    clearInterval (this.interval);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem ('userToken');
    const value = await AsyncStorage.getItem ('Istermsagree');
    let Istermsagree = JSON.parse (value);
    this.props.navigation.navigate (
      userToken && Istermsagree == true ? 'afterLogin' : 'beforeLogin'
    );
  };

  // Render any loading content that you like here
  render () {
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >
        <Spinner loading={this.state.isVisible} />
      </LinearGradient>
    );
  }
}
export default AuthComponent;
