/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* jshint ignore:start */

import React, {PureComponent } from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import styles from "./style";
import RewardsComponent from "@components/RewardsComponent/Rewards/Rewards";


class Rewards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  

  render() {
    return (
      <View style={styles.container}>
        <RewardsComponent />
       
      </View>
    );
  }
}

export default Rewards;
