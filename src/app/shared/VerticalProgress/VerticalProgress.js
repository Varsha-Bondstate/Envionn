/**
* Sample React Native App
* https: //github.com/facebook/react-native
*
* @format
* @flow
*/
/* jshint ignore:start */
import React, {PureComponent} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
  Animated,
} from 'react-native';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';
import baseStyles from '@lib/base';
import {Icon} from 'react-native-elements';
import I18n from '@localization/i18n';
import _ from 'lodash';
class VerticalProgress extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      levels: [50, 150, 300],
      minBar: 0,
      maxBar: 300,
      sel_val: 52,
      step_up: 25,
      barHeight: 90,
      barWidth: 95,
      barWidth_txt: 50,
      absoluteFill: '90%',
      bgColor: '#333',
      barColor: '#68db80',
      gridLineColor: '#fff',
      progressStatus: 0,
      progressStep: 0,
      step_unit: 'km',
      zero_start: true,
      activitytype: '',
      fillheight_val: '',
    };
  }
  anim = new Animated.Value (0);
  componentDidMount () {
    let activityprops = this.props.activityDetails;
    let isactivityprops = _.isObject (activityprops);
    console.log ('activityprops', activityprops);
    if (isactivityprops) {
      this.setState (
        {
          levels: activityprops.levels,
          minBar: activityprops.minBar,
          maxBar: activityprops.maxBar,
          sel_val: activityprops.sel_val,
          step_up: activityprops.step_up,
          step_unit: activityprops.step_unit,
          activitytype: activityprops.type,
          barHeight: activityprops.barHeight,
          barWidth: activityprops.barWidth,
          barWidth_txt: activityprops.barWidth_txt,
          fillheight_val: activityprops.fillheight_val,
        },
        function () {
          console.log ('levels', this.state.levels);
          this.onAnimate ();
        }
      );
    } else {
    }
  }
  onAnimate = () => {
    this.anim.addListener (({value}) => {
      this.setState ({progressStatus: parseInt (value, 10)});
    });
    let steps = this.state.sel_val / 10;
    Animated.timing (this.anim, {
      toValue: this.state.sel_val / this.state.maxBar * 100,
      duration: 1000,
    }).start ();
  };

  createBarGrid = () => {
    let children = [];
    let sel_index = this.state.sel_val / this.state.step_up;
    let sel_index_round = Math.round (this.state.sel_val / this.state.step_up);
    let sel_index_ceil = Math.ceil (this.state.sel_val / this.state.step_up);

    //alert(sel_index)
    let table = [];
    // Outer loop to create parent

    let barHeight = this.state.barHeight;
    let barWidth = this.state.barWidth;
    let barWidth_txt = this.state.barWidth_txt;
    let absoluteFill = this.state.absoluteFill;

    let bgColor = this.state.bgColor;
    let barColor = this.state.barColor;
    let gridLineColor = this.state.gridLineColor;

    for (
      let index = this.state.maxBar / this.state.step_up;
      index >= 1;
      index--
    ) {
      let fill_height = index == sel_index_ceil
        ? (this.state.step_up -
            (sel_index_ceil - sel_index) * this.state.step_up) *
            3
        : 30;
      // alert((this.state.step_up-((sel_index_ceil-sel_index)*this.state.step_up))*3)
      let sel_txt = index == sel_index_ceil
        ? sel_index * this.state.step_up + ''
        : '';
      let step_ups_val = index * this.state.step_up;
      let fill_bal =
        this.state.step_up - (sel_index_ceil - sel_index) * this.state.step_up;

      children.push (
        <View key={index} style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={{width: barWidth_txt, height: barHeight}}>
            <Text style={styles.text1}>
              {this.state.levels.indexOf (step_ups_val) > -1
                ? step_ups_val + this.state.step_unit
                : ''}

            </Text>
            {this.state.zero_start && index == 1
              ? <Text style={[styles.text1, styles.text1_bot]}>
                  0{this.state.step_unit}
                </Text>
              : <Text style={[styles.text1]} />}
          </View>
          <View
            style={{
              width: barWidth,
              height: barHeight,
              backgroundColor: 'transparent',
              borderTopWidth: 1,
              borderTopColor: gridLineColor,
              borderBottomColor: gridLineColor,
              borderBottomWidth: index == 1 ? 1 : 0,
            }}
          >
            <Animated.View
              style={{
                position: 'absolute',
                backgroundColor: index <= sel_index_ceil
                  ? 'transparent'
                  : 'transparent',
                width: absoluteFill,
                height: fill_height,
                bottom: 0,
                opacity: 0.8,
                alignSelf: 'center',
              }}
            />
            {/* <Text style = {fill_bal<5?[styles.text2,styles.text2_bottom_text]:[styles.text2]}>{sel_txt}</Text>                       */}
          </View>
        </View>
      );
    }

    table.push (
      <View
        key={9999}
        style={{
          width: wp ('55%'),
          marginTop: hp ('5%'),
          // marginLeft: hp ('2%'),
        }}
      >
        {children}
        <View
          style={{
            position: 'absolute',
            width: this.state.barWidth + this.state.barWidth_txt,
            height: '100%',
            bottom: 0,
            alignSelf: 'center',
          }}
        >
          <Animated.View
            style={{
              position: 'absolute',
              backgroundColor: barColor,
              width: this.state.barWidth * 0.95,
              height: this.state.progressStatus + '%',
              bottom: 0,
              opacity: 0.85,
              right: 2,
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontWeight: 'bold',
                textAlign: 'center',
                position: 'absolute',
                top: -15,
                alignSelf: 'center',
              }}
            >
              {this.state.sel_val + this.state.step_unit}

            </Text>
          </Animated.View>
        </View>

      </View>
    );
    return table;
  };

  // renderchildren = params => {
  //   return (

  //   )
  // }

  render () {
    return (
      <View style={baseStyles.content}>

        <View
          style={{
            marginLeft: hp ('0%'),
            marginRight: hp ('0%'),
            height: hp ('60%'),
            backgroundColor: 'transparent',
          }}
        >

          {this.createBarGrid ()}
        </View>
      </View>
    );
  }
}
export default VerticalProgress;
