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
import TrackComponent from "@components/TrackComponent/Track/Track";


class Track extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  

  render() {
    return (
      <View style={styles.container}>
        <TrackComponent />
       
      </View>
    );
  }
}

export default Track;
