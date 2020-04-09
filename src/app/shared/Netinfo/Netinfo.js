/**
* Sample React Native App
* https: //github.com/facebook/react-native
*
* @format
* @flow
*/
/* jshint ignore:start */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {updateNetstatus} from '@redux/StartUp/operations';
import styles from './style';

const Netinfo = () => {
  const {height, width} = Dimensions.get ('window');
  const barWidth = width;
  const barHeight = 40;
  const opacity = new Animated.Value (0);
  // const movingPos = this.animatedValue;
  const [isInternetReachable, setisInternetReachable] = useState (false);
  useEffect (() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener (state => {
      console.log ('isInternetReachable', state.isInternetReachable);
      setisInternetReachable (state.isInternetReachable);
    });
    return () => {
      unsubscribe ();
    };
  }, []);
  if (isInternetReachable) {
    return null;
  }

  return (
    <Animated.View
      style={{
        // transform: [{translateX: movingPos}],
        height: barHeight,
        width: barWidth,
        // backgroundColor: state.barColor,
        backgroundColor: 'red',
      }}
    >
      <Text style={styles.welcome}>
        You are offline
      </Text>

    </Animated.View>
  );
};

export default Netinfo;
// import {withNetworkConnectivity} from 'react-native-offline';

// class Netinfo extends PureComponent {
//   constructor (props) {
//     super (props);
//     this.state = {
//       barColor: 'green',
//       isConnected: null,
//     };

//     this.animatedValue = new Animated.Value (-width);
//   }
//   animate (color) {
//     this.setState ({barColor: color});
//     this.animatedValue.setValue (-width);
//     Animated.timing (this.animatedValue, {
//       toValue: 0,
//       duration: 1000,
//     }).start (() => this.reverseAnimate ());
//   }
//   reverseAnimate () {
//     setTimeout (() => {
//       Animated.timing (this.animatedValue, {
//         toValue: width,
//         duration: 1000,
//       }).start ();
//     }, 1000);
//   }

//   componentDidMount () {
//     const unsubscribe = NetInfo.addEventListener (state => {
//       console.log ('Connection type', state.type);
//       console.log ('Is connected?', state.isConnected);
//       let _this = this;
//       let isConnected = state.isConnected;
//       isConnected ? _this.animate ('green') : _this.animate ('red');

//       _this.setState (
//         {
//           isConnected: state.isConnected,
//         },
//         function () {
//           console.log ('isConnected', _this.state.isConnected);
//         }
//       );
//     });
//   }

//   render () {
//     const movingPos = this.animatedValue;
//     return (
//       <Animated.View
//         style={{
//           transform: [{translateX: movingPos}],
//           height: barHeight,
//           width: barWidth,
//           backgroundColor: this.state.barColor,
//         }}
//       >
//         <Text style={styles.welcome}>
//           You are {this.state.isConnected ? 'online' : 'offline'}!
//         </Text>
//       </Animated.View>
//     );
//   }
// }
