/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* jshint ignore:start */

import React, {PureComponent} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Picker,
  Animated,
  Easing,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import baseStyles from '@lib/base';
import {Icon} from 'react-native-elements';
import colors from '@lib/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import InvitesModal from '@components/InvitesComponent/Invites/Invites';
// import Pedometer from 'rn-pedometer';
import moment from 'moment';
import {Save_Steps, get_activities} from '@redux/TrackDetails/operations';
import {withNavigation, HeaderBackButton} from 'react-navigation';
import {connect} from 'react-redux';
import Spinner from '@components/SpinnerComponent/Spinner/Spinner';
import PulseLoader from './PulseLoader';
// Import the react-native-pedometer module
import Pedometer from 'rn-universal-pedometer-fega';
import Toast from 'react-native-root-toast';
import toaster from '@config/toaster';
// import Pedometer from 'react-native-pedometer';
// Import the react-native-pedometer module
// var Pedometer = require ('react-native-pedometer');
// const Activity = [
//   {label: 'Biking', value: '1'},
//   {label: 'race', value: '2'},
//   {label: 'walking', value: '3'},
// ];
// const toastparam = {
//   duration: Toast.durations.SHORT,
//   position: 30,
//   shadow: true,
//   animation: true,
//   hideOnPress: true,
//   delay: 0,
//   backgroundColor: colors.yellowColor,
//   textColor: 'white',
//   shadowColor: colors.EnvionnTheme,
// };

class Track extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      activity: '',
      distance: 0,
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      startbtnview: true,
      pausebtnview: false,
      cqbtnview: false,
      InvitesmodalVisible: false, //modal boolean
      pickerOpacity: 0,
      opacityOfOtherItems: 1, //THIS IS THE OPACITY OF ALL OTHER ITEMS, WHICH COLLIDES WITH YOUR PICKER.
      startbtndisable: false,
      steps_count: '',
      calories: null,
      Activity: [],
      isspeedValid: true,
      speed: 0,
      // animated: new Animated.Value (0),
      // opacityA: new Animated.Value (1),
      // animated2: new Animated.Value (0),
      // opacityA2: new Animated.Value (1),
    };
  }

  componentDidMount () {
    this.getactivities ();

    // const {animated, opacityA, animated2, opacityA2} = this.state;
    // Animated.stagger (2000, [
    //   Animated.loop (
    //     Animated.parallel ([
    //       Animated.timing (animated, {
    //         toValue: 1,
    //         duration: 2000,
    //       }),
    //       Animated.timing (opacityA, {
    //         toValue: 0,
    //         duration: 2000,
    //       }),
    //     ])
    //   ),
    // ]).start ();
  }

  getactivities () {
    let _this = this;
    this.props.get_activities ().then (function () {
      if (_this.props.Activities && _this.props.Activities.records.length > 0) {
        let activitiyarr = _this.props.Activities.records;
        _this.setState (
          {
            Activity: activitiyarr,
          },
          function () {}
        );
      }
    });
  }
  //start button callback
  onButtonStart = () => {
    let activity_Type = this.state.activity;
    if (activity_Type == 1 || activity_Type == 2 || activity_Type == 3) {
      this.get_Walking_steps (activity_Type);
    }

    this.setState (
      {startbtnview: false, pausebtnview: true, cqbtnview: false},
      function () {}
    );
    let timer = setInterval (() => {
      var num = (Number (this.state.seconds_Counter) + 1).toString (),
        count = this.state.minutes_Counter;

      if (Number (this.state.seconds_Counter) == 59) {
        count = (Number (this.state.minutes_Counter) + 1).toString ();
        num = '00';
      }

      this.setState ({
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num,
      });
    }, 1000);
    this.setState ({timer});
  };
  //stop button callback

  onButtonStop = () => {
    clearInterval (this.state.timer);
    // stop pedometer updates
    Pedometer.stopPedometerUpdates ();
    this.setState ({cqbtnview: true});
  };

  //get walking steps callback
  get_Walking_steps (data) {
    // determine pedometer availability
    Pedometer.isStepCountingAvailable ((error, isAvailable) => {
      // do something
      console.log ('isAvailable', isAvailable);
      console.log ('error', error);

      if (isAvailable == true) {
        // start tracking from current time
        const now = new Date ();
        Pedometer.startPedometerUpdatesFromDate (
          now.getTime (),
          pedometerData => {
            // do something with pedometer data
            console.log ('pedometerData', pedometerData);
            let steps_count = pedometerData.numberOfSteps;
            let distance = pedometerData.distance;
            console.log ('distance after rounded', distance);
            let actual_distance = distance / 1000;
            console.log ('actual_distance', actual_distance);

            if (data == 1) {
              this.speed_check (actual_distance, 1);
            } else if (data == 2) {
              this.speed_check (actual_distance, 2);
            } else if (data == 3) {
              this.speed_check (actual_distance, 3);
            }

            this.setState (
              {
                distance: actual_distance.toFixed (3),
                steps_count: steps_count,
              },
              function () {
                console.log ('distance', this.state.distance);
                console.log ('steps_count', this.state.steps_count);
              }
            );
          }
        );
      } else {
        console.log ('steps error', error);
      }
    });
  }

  speed_check (dist, type) {
    let distance = dist;
    let activity_type = this.state.activity;
    let min = this.state.minutes_Counter;
    let sec = this.state.seconds_Counter;
    console.log ('min', min);
    console.log ('sec', sec);
    let total_secs = sec / 60 + min;
    let total_hrs = total_secs / 60;
    console.log ('total_secs', total_secs);
    console.log ('total_hrs', total_hrs);
    let speed = distance / total_hrs;
    console.log ('speed', speed);
    let isspeedValid = this.state.isspeedValid;
    if (type == '1') {
      if (speed > 6 && speed < 40) {
        isspeedValid = true;
      } else {
        isspeedValid = false;
      }
    } else if (type == '2') {
      if (speed > 1 && speed < 25) {
        isspeedValid = true;
      } else {
        isspeedValid = false;
      }
    } else {
      isspeedValid = true;
    }
    this.setState (
      {
        isspeedValid: isspeedValid,
        speed: speed,
      },
      function () {
        console.log ('isspeedValid', this.state.isspeedValid);
        console.log ('speed', this.state.speed);
      }
    );
  }

  //quit button callback
  onButtonClear = async () => {
    let activity = this.state.activity;
    let type = '';
    if (activity == '1') {
      type = 'biking';
    } else if (activity == '2') {
      type = 'race';
    }

    if (this.state.isspeedValid == true) {
      await this.steps_save ();
      this.quit_callback ();
    } else {
      Alert.alert (
        //title
        'Speed Warning',
        //body
        `your ${type} speed must be in the range of 6-40 km/hr, Are you sure you want to quit`,
        [
          {
            text: 'Yes',
            onPress: () => {
              this.quit_callback ();
            },
          },
          {
            text: 'No',
            onPress: () => {},
            style: 'cancel',
          },
        ],
        {cancelable: false}
      );
    }
  };

  quit_callback () {
    // stop pedometer updates
    Pedometer.stopPedometerUpdates ();

    this.setState (
      {
        timer: null,
        minutes_Counter: '00',
        seconds_Counter: '00',
        startbtnview: true,
        pausebtnview: false,
        cqbtnview: false,
        distance: 0,
        speed: 0,
      },
      function () {}
    );
  }
  //steps asve api call
  steps_save () {
    let params = {
      steps: this.state.steps_count,
      speed: this.state.speed,
      activity: this.state.activity,
      minutes: this.state.minutes_Counter,
      seconds: this.state.seconds_Counter,
      distance: this.state.distance,
    };

    let _this = this;
    this.props.Save_Steps (params).then (function () {
      if (
        _this.props.SaveSteps.status.code != '' &&
        _this.props.SaveSteps.status.code != undefined
      ) {
        if (_this.props.SaveSteps.status.code == '200') {
          let toast = Toast.show (
            'Track Details Saved Successfully',
            toaster.toastparam
          );
          // _this.props.navigation.navigate ('dashboard');
        } else {
        }
      }
    });
  }
  InvitesOpenModal (visible, fieldName) {
    this.setState ({InvitesmodalVisible: visible});
  }
  // edit singup modal open
  openOrCloseModal (visible, data) {
    this.setState ({InvitesmodalVisible: visible}, function () {});
  }
  // button disable option for validation
  isSubmitEnabled () {
    // Access field values here and validate them
    let activity = this.state.activity;

    if (activity !== '' && activity !== '0') {
      return true;
    } else {
      return false;
    }
  }

  // button disable option for validation
  isquitEnabled () {
    // Access field values here and validate them
    let steps = this.state.steps_count;
    if (steps !== '' && steps !== '0') {
      return true;
    } else {
      return false;
    }
  }
  componentWillUnmount () {
    clearInterval (this.state.timer);
  }

  render () {
    const isEnabled = this.isSubmitEnabled ();
    const isquitEnabled = this.isquitEnabled ();
    // const {animated, opacityA} = this.state;

    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >
        <Spinner loading={this.props.isLoading} />
        <View style={styles.trackContainer}>
          <ScrollView>

            {/* headerContainer */}
            <View style={styles.headerContainer}>
              <View style={styles.imageContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.nameText}>Track cykeltur</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.InvitesOpenModal (true);
                }}
                style={styles.shareContainer}
              >
                <Icon
                  name="share-alt"
                  type="font-awesome"
                  color={colors.white}
                  size={hp ('3.5%')}
                />
              </TouchableOpacity>
            </View>

            {/* stepsorContainer */}
            <View style={styles.stepsorContainer}>
              <View style={styles.firstline} />

              <View style={styles.stepstextContainer}>

                <Text style={styles.orText}>

                  Distance
                </Text>

              </View>
              <View style={styles.secondline} />
            </View>
            {/* activityContainer */}

            <View style={styles.pickerView}>
              <Picker
                style={styles.pickerStyle}
                selectedValue={this.state.activity}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState ({activity: itemValue});
                }}
              >
                <Picker.Item label="Select activity" value="0" />
                {this.state.Activity.map ((v, item) => {
                  return (
                    <Picker.Item label={v.activity} value={v.id} key={item} />
                  );
                })}
              </Picker>
            </View>
            {/* countdownContainer */}
            <View style={styles.CountdownContainer}>
              {/*distanceContainer */}
              <View style={styles.timerContainer}>
                <Text style={styles.distText}>
                  {this.state.distance}{' '}km.
                </Text>
              </View>
              {/*timerContainer */}
              <View style={styles.timerContainer}>
                <Text style={styles.timeText}>
                  {this.state.minutes_Counter}m:{this.state.seconds_Counter}s
                </Text>
              </View>
              {/*startbtnContainer */}
              {this.state.startbtnview == true
                ? <View style={styles.btnContainer}>
                    <TouchableOpacity
                      disabled={!isEnabled}
                      style={
                        !isEnabled
                          ? styles.disableCircleShapeView
                          : styles.CircleShapeView
                      }
                      onPress={this.onButtonStart}
                    >
                      <Text style={styles.startbtnText}>Start!</Text>
                    </TouchableOpacity>
                  </View>
                : null}
              {/*pausebtnContainer */}
              {/* {this.state.pausebtnview == true && this.state.cqbtnview == false
                ? <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    // style={styles.pauseView}
                    onPress={this.onButtonStop}
                  >
                    <PulseLoader />
                  </TouchableOpacity>
                : null} */}

              {/*pausebtnContainer */}
              {this.state.pausebtnview == true && this.state.cqbtnview == false
                ? <View style={styles.btnContainer}>
                    <TouchableOpacity
                      style={styles.pauseView}
                      onPress={this.onButtonStop}
                    >
                      <Text style={styles.pausebtnText}>Pause</Text>
                    </TouchableOpacity>
                  </View>
                : null}

              {/*cqbtnContainer */}
              {this.state.pausebtnview == true && this.state.cqbtnview == true
                ? <View style={styles.cqContainer}>
                    <View style={styles.btnContainer}>
                      <TouchableOpacity
                        style={styles.CircleShapeView}
                        onPress={this.onButtonStart}
                      >
                        <Text style={styles.startbtnText}>Continue</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.qbtnContainer}>
                      <TouchableOpacity
                        style={styles.pauseView}
                        onPress={this.onButtonClear}
                        disabled={!isquitEnabled}
                        style={
                          !isquitEnabled
                            ? styles.quitdisableCircle
                            : styles.quitCircleShapeView
                        }
                      >
                        <Text style={styles.pausebtnText}>Quit</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                : null}

              {/*cqbtnContainer */}
              {this.state.pausebtnview == true && this.state.cqbtnview == true
                ? <View style={styles.pasueTextContainer}>
                    <Icon
                      name="pause"
                      type="font-awesome"
                      color={colors.white}
                      size={hp ('2.5%')}
                    />
                    <Text style={styles.pausetext}> Aktivitet på pause</Text>
                  </View>
                : null}

            </View>
          </ScrollView>

          {this.state.InvitesmodalVisible
            ? <InvitesModal
                openValue={this.state.InvitesmodalVisible}
                closeModal={(visible, data) => {
                  this.openOrCloseModal (visible, data);
                }}
              />
            : null}
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  return {
    SaveSteps: state.TrackDetails.Stepssave ? state.TrackDetails.Stepssave : {},
    Activities: state.TrackDetails.getactivities
      ? state.TrackDetails.getactivities
      : {},
    error: state.TrackDetails.error,
    isLoading: state.TrackDetails.loading,
  };
};
const mapDispatchToProps = {
  Save_Steps,
  get_activities,
};
export default withNavigation (
  connect (mapStateToProps, mapDispatchToProps) (Track)
);

{
  /*pausebtnContainer */
}
// {this.state.pausebtnview == true && this.state.cqbtnview == false
//   ? <TouchableOpacity
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//       onPress={this.onButtonStop}
//     >
//       {/* <PulseLoader /> */}
//     </TouchableOpacity>
//   : null}
