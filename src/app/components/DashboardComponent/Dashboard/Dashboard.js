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
  Image,
  TouchableOpacity,
  Dimensions,
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
import Pie from 'react-native-pie';
import DaysComponent from '@components/DashboardComponent/Days/Days';
import InvitesModal from '@components/InvitesComponent/Invites/Invites';
import I18n from '@localization/i18n';
import {
  withNavigation,
  HeaderBackButton,
  NavigationEvents,
} from 'react-navigation';
import {connect} from 'react-redux';
import {
  GetDashboardSteps,
  GetStepLevels,
  goal_achieved,
} from '@redux/Dashboard/operations';
import Spinner from '@components/SpinnerComponent/Spinner/Spinner';
import {Card} from 'native-base';
// for lodash
import _ from 'lodash';
import VerticalProgressComponent
  from '@shared/VerticalProgress/VerticalProgress';
const {width, height} = Dimensions.get ('window');
const box = [
  {
    name: 'M',
    value: '1',
  },
  {
    name: 'T',
    value: '2',
  },
  {
    name: 'W',
    value: '3',
  },
  {
    name: 'T',
    value: '4',
  },
  {
    name: 'F',
    value: '5',
  },
  {
    name: 'S',
    value: '6',
  },
  {
    name: 'S',
    value: '7',
  },
];

const days = [
  {
    name: 'Monday',
    value: '1',
  },
  {
    name: 'Tuesday',
    value: '2',
  },
  {
    name: 'Wednesday',
    value: '3',
  },
  {
    name: 'Thursday',
    value: '4',
  },
  {
    name: 'Friday',
    value: '5',
  },
  {
    name: 'Saturday',
    value: '6',
  },
  {
    name: 'Sunday',
    value: '7',
  },
];

class Dashboard extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      steps_today: '',
      username: '',
      imagepath: '',
      percent: 0,
      InvitesmodalVisible: false, //modal boolean
      weekly: [],
      monthly: [],
      biking: [],
      race: [],
      activity_arr: [],
      cyclearr: [
        {
          m_hr: '0',
          m_min: '0',
          m_sec: '00',
          distance_sum: '0',
          step_walk: '0',
          activity: '1',
          diff: 0,
        },
      ],
      runarr: [
        {
          m_hr: '0',
          m_min: '0',
          m_sec: '00',
          distance_sum: '0',
          step_walk: '0',
          activity: '2',
          diff: 0,
        },
      ],
      walkarr: [
        {
          m_hr: '0',
          m_min: '0',
          m_sec: '00',
          distance_sum: '0',
          step_walk: '0',
          activity: '3',
          walk_days: 0,
          diff: 0,
        },
      ],
      goal: 0,
      sel_bal: 0,
      isgoalacheived: false,
      goalkey: '',
    };
  }

  componentDidMount () {
    // this._initial_weekly ();
  }

  get_activity_arr (data) {
    // console.log ('data', data);
    let level_arr = data;
    let activity_arr = [];
    let _this = this;
    _.forEach (level_arr, function (item, key) {
      if (item == null && item == undefined) {
        return null;
      } else {
        if (item.activity_id == '1') {
          let sel_val = _this.state.cyclearr[0].distance_sum !== null
            ? parseInt (_this.state.cyclearr[0].distance_sum)
            : 0;

          let sel_bal = sel_bal !== null
            ? parseInt (_this.state.cyclearr[0].diff)
            : 0;
          // console.log ('sel_bal in bike', sel_bal);
          activity_arr.push ({
            levels: [
              parseInt (item.level1),
              parseInt (item.level2),
              parseInt (item.level3),
            ],
            minBar: 0,
            maxBar: 300,
            sel_val: sel_val,
            step_up: 25,
            step_unit: 'km',
            type: '1',
            barHeight: 30,
            barWidth: 95,
            barWidth_txt: 50,
            fillheight_val: 3,
            sel_bal: sel_bal,
          });
        }
        if (item.activity_id == '2') {
          let sel_val = _this.state.runarr[0].distance_sum !== null
            ? parseInt (_this.state.runarr[0].distance_sum)
            : 0;
          let sel_bal = _this.state.runarr[0].diff !== null
            ? parseInt (_this.state.runarr[0].diff)
            : 0;
          activity_arr.push ({
            levels: [
              parseInt (item.level1),
              parseInt (item.level2),
              parseInt (item.level3),
            ],
            minBar: 0,
            maxBar: 100,
            sel_val: sel_val,
            step_up: 10,
            step_unit: 'km',
            type: '2',
            barHeight: 36,
            barWidth: 95,
            barWidth_txt: 50,
            fillheight_val: 3,
            sel_bal: sel_bal,
          });
        }
        if (item.activity_id == '3') {
          let sel_val = _this.state.walkarr[0].walk_days !== null
            ? parseInt (_this.state.walkarr[0].walk_days)
            : 0;
          let sel_bal = _this.state.walkarr[0].diff !== null
            ? parseInt (_this.state.walkarr[0].diff)
            : 0;
          activity_arr.push ({
            levels: [
              parseInt (item.level1),
              parseInt (item.level2),
              parseInt (item.level3),
            ],
            minBar: 0,
            maxBar: 20,
            sel_val: sel_val,
            step_up: 5,
            step_unit: 'dage',
            type: '3',
            barHeight: 90,
            barWidth: 95,
            barWidth_txt: 50,
            fillheight_val: 3,
            sel_bal: sel_bal,
          });
        }
        return activity_arr;
      }
    });
    this.setState (
      {
        activity_arr: activity_arr,
      },
      function () {}
    );
  }
  // for getting initial weekly values
  _initial_weekly () {
    let race = [];
    race.push ({
      day_name: 'Sunday',
      w_distance: 0,
      w_steps: 0,
      w_activity: '',
      w_hr: 0,
      w_min: 0,
      w_sec: 0,
    });
    let bike = [];
    bike.push ({
      day_name: 'Sunday',
      w_distance: 0,
      w_steps: 0,
      w_activity: '',
      w_hr: 0,
      w_min: 0,
      w_sec: 0,
    });
    this.setState (
      {
        race: race,
        biking: bike,
        defaultFilter: '7',
        filterViewItem: 'S',
      },
      function () {}
    );
  }

  // for getting dashboard steps
  get_dashboard_steps () {
    let _this = this;
    this.props.GetDashboardSteps ().then (function () {
      if (_this.props.getsteps && _this.props.getsteps.status.code == '200') {
        let dashDetails = _this.props.getsteps.records;
        // console.log ('dashDetails', dashDetails);
        _this.setState (
          {
            username: dashDetails.f_name,
            imagepath: dashDetails.user_image,
            weekly: dashDetails.weekly,
            monthly: dashDetails.monthly,
            steps_today: dashDetails.today != null ? dashDetails.today : 0,
            percent: dashDetails.today_percentage,
            goal: dashDetails.goal,
          },
          function () {
            _this.monthly_arr_validation ();
            _this.todaygoalreached_validation ();
            _this.split_monthly_arr ();
            // console.log ('dashDetails weekly', _this.state.weekly);
            // console.log ('dashDetails monthly', _this.state.monthly);
          }
        );
      } else {
      }
    });
  }

  split_monthly_arr () {
    let month = this.state.monthly;
    // console.log ('month', month);
    let bike_arr = [];
    let run_arr = [];
    let walk_arr = [];
    if (month.length > 0) {
      const isbike = month.find (item => item.activity === '1');
      if (isbike !== undefined) {
        bike_arr.push ({
          m_hr: isbike.m_hr,
          m_min: isbike.m_min,
          m_sec: isbike.m_sec,
          distance_sum: isbike.distance_sum,
          step_walk: isbike.step_walk,
          activity: isbike.activity,
          diff: isbike.diff !== null ? isbike.diff : 0,
        });
      } else {
        bike_arr.push ({
          m_hr: '0',
          m_min: '0',
          m_sec: '00',
          distance_sum: '0',
          step_walk: '0',
          activity: '1',
          diff: 0,
        });
      }

      const iscycle = month.find (item => item.activity === '2');
      if (iscycle !== undefined) {
        run_arr.push ({
          m_hr: iscycle.m_hr,
          m_min: iscycle.m_min,
          m_sec: iscycle.m_sec,
          distance_sum: iscycle.distance_sum,
          step_walk: iscycle.step_walk,
          activity: iscycle.activity,
          diff: iscycle.diff !== null ? iscycle.diff : 0,
        });
      } else {
        run_arr.push ({
          m_hr: '0',
          m_min: '0',
          m_sec: '00',
          distance_sum: '0',
          step_walk: '0',
          activity: '1',
          diff: 0,
        });
      }

      const iswalk = month.find (item => item.activity === '3');
      if (iswalk !== undefined) {
        walk_arr.push ({
          m_hr: iswalk.m_hr,
          m_min: iswalk.m_min,
          m_sec: iswalk.m_sec,
          distance_sum: iswalk.distance_sum,
          step_walk: iswalk.step_walk,
          activity: iswalk.activity,
          walk_days: iswalk.walk_days,
          diff: iswalk.diff !== null ? iswalk.diff : 0,
        });
      } else {
        walk_arr.push ({
          m_hr: '0',
          m_min: '0',
          m_sec: '00',
          distance_sum: '0',
          step_walk: '0',
          activity: '1',
          walk_days: 0,
          diff: 0,
        });
      }

      this.setState (
        {
          cyclearr: bike_arr,
          runarr: run_arr,
          walkarr: walk_arr,
        },
        function () {
          // console.log ('cyclearr', this.state.cyclearr);
          // console.log ('runarr', this.state.runarr);
          // console.log ('walkarr', this.state.walkarr);
        }
      );
    }
  }

  // for getting dashboard steps
  get_steps_levels () {
    let _this = this;
    this.props.GetStepLevels ().then (function () {
      if (
        _this.props.getsteplevels &&
        _this.props.getsteplevels.status.code == '200'
      ) {
        let levels = _this.props.getsteplevels.records;
        // console.log ('levels', levels);
        _this.get_activity_arr (levels);
      }
    });
  }
  selectionONprocess = item => {
    let days_arr = days;
    let data = item.value;
    const changedCheckbox2 = days_arr.find (item => item.value == data);
    this.race_arr_Setup (data, changedCheckbox2);
    this.bike_arr_Setup (data, changedCheckbox2);
    this.setState (
      {
        defaultFilter: item.value,
        filterViewItem: item.name,
      },
      function () {}
    );
  };

  race_arr_Setup (data, changedCheckbox2) {
    let tabvalue = data;
    let weekly_arr = this.state.weekly;
    let race_arr = _.filter (weekly_arr, 'race');
    let race = [];
    const changedCheckbox = race_arr.find (
      item => item.race.day_of_week === tabvalue
    );
    if (changedCheckbox !== undefined && changedCheckbox2 !== undefined) {
      race.push ({
        day_name: changedCheckbox2.name,
        w_distance: changedCheckbox.race.w_distance,
        w_steps: changedCheckbox.race.w_steps,
        w_activity: changedCheckbox.race.w_activity,
        w_hr: changedCheckbox.race.w_hr,
        w_min: changedCheckbox.race.w_min,
        w_sec: changedCheckbox.race.w_sec,
      });
    } else {
      race.push ({
        day_name: changedCheckbox2.name,
        w_distance: 0,
        w_steps: 0,
        w_activity: '',
        w_hr: 0,
        w_min: 0,
        w_sec: 0,
      });
    }
    this.setState (
      {
        race: race,
      },
      function () {}
    );
  }

  bike_arr_Setup (data, changedCheckbox2) {
    let tabvalue = data;
    let weekly_arr = this.state.weekly;
    let bike = [];
    let biking_arr = _.filter (weekly_arr, 'biking');
    const changedbiking = biking_arr.find (
      item => item.biking.day_of_week === tabvalue
    );
    if (changedbiking !== undefined && changedCheckbox2 !== undefined) {
      bike.push ({
        day_name: changedCheckbox2.name,
        w_distance: changedbiking.biking.w_distance,
        w_steps: changedbiking.biking.w_steps,
        w_activity: changedbiking.biking.w_activity,
        w_hr: changedbiking.biking.w_hr,
        w_min: changedbiking.biking.w_min,
        w_sec: changedbiking.biking.w_sec,
      });
    } else {
      bike.push ({
        day_name: changedCheckbox2.name,
        w_distance: 0,
        w_steps: 0,
        w_activity: '',
        w_hr: 0,
        w_min: 0,
        w_sec: 0,
      });
    }

    this.setState (
      {
        biking: bike,
      },
      function () {
        // console.log ('final biking', this.state.biking);
      }
    );
  }

  InvitesOpenModal (visible, fieldName) {
    this.setState ({InvitesmodalVisible: visible});
  }
  // edit singup modal open
  openOrCloseModal (visible, data) {
    this.setState ({InvitesmodalVisible: visible}, function () {});
  }

  // tab1 view
  rendericon = item => {
    return (
      <View>
        {item.activity == '1'
          ? <TouchableOpacity style={styles.icon1}>
              <Icon
                name="directions-bike"
                type="material"
                color="white"
                size={hp ('5%')}
              />

            </TouchableOpacity>
          : null}
        {item.activity == '2'
          ? <TouchableOpacity style={styles.icon2}>
              <FontAwesome5
                name="running"
                color={colors.white}
                size={hp ('5%')}
              />
            </TouchableOpacity>
          : null}
        {item.activity == '3'
          ? <TouchableOpacity style={styles.icon3}>
              <FontAwesome5
                name="walking"
                color={colors.white}
                size={hp ('5%')}
              />
            </TouchableOpacity>
          : null}
      </View>
    );
  };

  // tab1 view
  rendericon2 = item => {
    return (
      <View>
        {item.activity == '1'
          ? <TouchableOpacity style={styles.icon1}>
              <FontAwesome5
                name="clock"
                color={colors.white}
                size={hp ('4.8%')}
              />
            </TouchableOpacity>
          : null}
        {item.activity == '2'
          ? <TouchableOpacity style={styles.icon2}>
              <FontAwesome5
                name="clock"
                color={colors.white}
                size={hp ('4.8%')}
              />
            </TouchableOpacity>
          : null}
        {item.activity == '3'
          ? <TouchableOpacity style={styles.icon3}>
              <FontAwesome5
                name="shoe-prints"
                color={colors.white}
                size={hp ('4.8%')}
              />
            </TouchableOpacity>
          : null}
      </View>
    );
  };
  todaygoalreached_validation () {
    let goal = '';
    let isgoalacheived = this.state.isgoalacheived;
    if (this.state.steps_today == this.state.goal) {
      isgoalacheived = true;
      goal = 'today';
      this.setState (
        {
          isgoalacheived: isgoalacheived,
          goalkey: goal,
        },
        function () {
          let data = {
            goal: this.state.goalkey,
            activity: '3',
          };
          Alert.alert (
            //title
            'Goal achieved',
            //body
            `you have sucessfuly reached the goal for today and 20 coins will be added to your account `
          );
          this.goalreached (data);
        }
      );
    }
  }

  goalreached (data) {
    let _this = this;
    let params = {
      goal: data.goal,
      activity: data.activity,
    };
    this.props.goal_achieved (params).then (function () {
      if (
        _this.props.goalachievement &&
        _this.props.goalachievement.status.code == '200'
      ) {
      }
    });
  }

  //monthly goal validation
  monthly_arr_validation () {
    let _this = this;
    let month = _this.state.monthly;
    let goalkey = 'monthly';
    _.forEach (month, function (item, key) {
      if (item == null && item == undefined) {
        return null;
      } else {
        if (item.reached == 1) {
          let data = {
            goal: goalkey,
            activity: item.activity,
          };
          if (item.activity == '1') {
            type = 'biking';
          } else if (item.activity == '2') {
            type = 'running';
          } else if (item.activity == '3') {
            type = 'walking';
          }
          Alert.alert (
            //title
            'Goal achieved',
            //body
            `you have sucessfuly reached the goal for ${type} and 20 coins will be added to your account and rested to inital level `
          );
          _this.goalreached (data);
        }
      }
    });
  }

  render () {
    const width = Dimensions.get ('window').width;
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >
        <NavigationEvents
          onDidFocus={() => {
            this.get_dashboard_steps ();
            this.get_steps_levels ();
            this._initial_weekly ();
          }}
        />
        {/* <Spinner loading={this.props.isLoading} /> */}
        <View style={styles.dashboardContainer}>
          <ScrollView>
            {/* headerContainer */}
            <View style={styles.headerContainer}>
              <View style={styles.imageContainer}>

                {this.state.imagepath !== '' &&
                  this.state.imagepath !== 'NO_USER'
                  ? <Image
                      source={{uri: this.state.imagepath}}
                      style={{width: 60, height: 60, borderRadius: 60 / 2}}
                    />
                  : <Image
                      source={require ('@assets/images/profile_avatar.png')}
                      style={{width: 60, height: 60, borderRadius: 60 / 2}}
                    />}
                <View style={styles.textContainer}>
                  <Text style={styles.nameText}>{this.state.username}</Text>
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
                  color="#fff"
                  size={hp ('3.5%')}
                />
              </TouchableOpacity>
            </View>
            {/* stepsorContainer */}
            <View style={styles.stepsorContainer}>
              <View style={styles.firstline} />

              <View style={styles.stepstextContainer}>
                <TouchableOpacity>
                  <FontAwesome5
                    name="shoe-prints"
                    color={colors.white}
                    size={hp ('2.5%')}
                  />
                </TouchableOpacity>

                <Text style={styles.orText}>
                  {I18n.t ('Dashboard_page.steps_label')}
                </Text>

              </View>
              <View style={styles.secondline} />
            </View>
            <View style={styles.piechartContainer}>
              <View style={styles.textvalueContainer}>
                <Text style={styles.highText}>{this.state.steps_today}</Text>
                <Text style={styles.lowText}>/{this.state.goal}</Text>
              </View>
              <View style={styles.pieChart}>
                <Pie
                  radius={hp ('4.8%')}
                  innerRadius={hp ('3.8%')}
                  sections={[
                    {
                      percentage: this.state.percent,
                      color: colors.filledprogress,
                    },
                  ]}
                  backgroundColor={colors.unfilledprogress}
                />

              </View>

            </View>

            {/* thismonthorContainer */}
            <View style={styles.stepsorContainer}>
              <View style={styles.firstline} />

              <View style={styles.stepstextContainer}>
                <TouchableOpacity>
                  <FontAwesome5
                    name="calendar-alt"
                    color={colors.white}
                    size={hp ('2.5%')}
                  />
                </TouchableOpacity>
                <Text style={styles.orText}>
                  {I18n.t ('Dashboard_page.month_label')}
                </Text>

              </View>
              <View style={styles.secondline} />
            </View>
            {/*swipeableContainer */}

            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                flexDirection: 'column',
              }}
            >

              <View style={{flexDirection: 'row'}}>
                {/* for cycling activity */}
                {this.state.cyclearr.map ((item, key) => {
                  return (
                    <View key={key} style={styles.ColumnContainer}>

                      <View style={styles.RowContainer}>
                        <TouchableOpacity
                          onPress={() => {
                            this.toggleModal (!this.state.modalVisible);
                          }}
                        >
                          <Icon
                            name="directions-bike"
                            type="material"
                            color="white"
                            size={hp ('5%')}
                          />
                        </TouchableOpacity>
                        <View style={styles.kmtextContainer}>
                          <Text style={styles.kmText}>
                            {item.distance_sum}{' '}km.
                          </Text>
                        </View>
                      </View>
                      <View style={styles.RowContainer}>
                        <TouchableOpacity
                          onPress={() => {
                            this.toggleModal (!this.state.modalVisible);
                          }}
                        >
                          <FontAwesome5
                            name="clock"
                            color={colors.white}
                            size={hp ('4.8%')}
                          />
                        </TouchableOpacity>
                        <View style={styles.rkmtextContainer}>
                          <Text style={styles.kmText}>
                            {item.m_min}t:{item.m_sec}m
                          </Text>
                        </View>
                      </View>

                    </View>
                  );
                })}
                {/* for running activity */}

                {this.state.runarr.map ((item, key) => {
                  return (
                    <View style={styles.ColumnContainer} key={key}>
                      <View style={styles.RowContainer}>
                        <TouchableOpacity>
                          <FontAwesome5
                            name="running"
                            color={colors.white}
                            size={hp ('5%')}
                          />
                        </TouchableOpacity>
                        <View style={styles.rkmtextContainer}>
                          <Text style={styles.kmText}>
                            {item.distance_sum}{' '}km.
                          </Text>
                        </View>

                      </View>
                      <View style={styles.RowContainer}>
                        <TouchableOpacity
                          onPress={() => {
                            this.toggleModal (!this.state.modalVisible);
                          }}
                        >
                          <FontAwesome5
                            name="clock"
                            color={colors.white}
                            size={hp ('4.8%')}
                          />
                        </TouchableOpacity>
                        <View style={styles.rkmtextContainer}>
                          <Text style={styles.kmText}>
                            {item.m_min}t:{item.m_sec}m
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
                {/* for walking activity */}
                {this.state.walkarr.map ((item, key) => {
                  return (
                    <View style={styles.ColumnContainer} key={key}>
                      <View style={styles.RowContainer}>
                        <TouchableOpacity>
                          <FontAwesome5
                            name="walking"
                            color={colors.white}
                            size={hp ('5%')}
                          />
                        </TouchableOpacity>

                        <View style={styles.rkmtextContainer}>
                          <Text style={styles.kmText}>
                            5 {I18n.t ('Dashboard_page.days_label')}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.RowContainer}>
                        <TouchableOpacity>
                          <FontAwesome5
                            name="shoe-prints"
                            color={colors.white}
                            size={hp ('4.8%')}
                          />
                        </TouchableOpacity>

                        <View style={styles.rkmtextContainer}>
                          <Text style={styles.kmText}>{item.step_walk}</Text>
                        </View>
                      </View>

                    </View>
                  );
                })}
              </View>
              {/* for Progressbar with levels */}
              <View style={{flexDirection: 'row'}}>
                {this.state.activity_arr.map ((item, key) => {
                  // console.log ('item in act_arr', item);
                  return (
                    <View key={key} style={styles.ColumnContainer2}>

                      <VerticalProgressComponent
                        key={key}
                        activityDetails={item}
                      />

                      {item.sel_bal !== null && item.sel_bal !== 0
                        ? <View>
                            <View style={styles.nextlevelTitle}>
                              <Text style={styles.nextlevelText}>
                                Næste niveau om
                              </Text>
                            </View>
                            <View style={styles.nextlevel}>
                              <Text style={styles.nextlevelText}>
                                {item.sel_bal} {item.step_unit}.
                              </Text>
                            </View>
                          </View>
                        : null}

                    </View>
                  );
                })}

              </View>

            </ScrollView>

            {/* 7daysorContainer */}
            <View style={styles.stepsorContainer}>
              <View style={styles.firstline} />

              <View style={styles.stepstextContainer}>
                <TouchableOpacity>
                  <Icon
                    name="history"
                    type="font-awesome"
                    color={colors.white}
                    size={hp ('2.5%')}
                  />
                </TouchableOpacity>
                <Text style={styles.orText}>
                  {I18n.t ('Dashboard_page.days7_label')}
                </Text>

              </View>
              <View style={styles.secondline} />
            </View>
            {/* weekdaysorContainer */}
            <View style={styles.DaysContainer}>
              <View style={[styles.boxContentView, styles.BoxView]}>
                {box.map ((item, key) => {
                  return (
                    <TouchableOpacity
                      onPress={() => this.selectionONprocess (item)}
                      key={key}
                      style={[
                        {
                          backgroundColor: this.state.defaultFilter ===
                            item.value
                            ? colors.btncolor
                            : 'transparent',
                        },
                        styles.tabtitle,
                      ]}
                    >

                      <Text
                        style={[
                          {
                            color: this.state.defaultFilter === item.value
                              ? colors.white
                              : colors.btncolor,
                          },
                          styles.tabtitletext,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <DaysComponent
                bikingdetails={this.state.biking}
                racedetails={this.state.race}
                tabValue={this.state.defaultFilter}
              />

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

// export default Dashboard;
const mapStateToProps = state => {
  // console.log ('dash state', state);
  return {
    getsteps: state.Dashboard.getdashboardsteps
      ? state.Dashboard.getdashboardsteps
      : {},
    getsteplevels: state.Dashboard.steplevels ? state.Dashboard.steplevels : {},
    goalachievement: state.Dashboard.goalachieved
      ? state.Dashboard.goalachieved
      : {},
    error: state.Dashboard.error,
    isLoading: state.Dashboard.loading,
  };
};
const mapDispatchToProps = {
  GetDashboardSteps,
  GetStepLevels,
  goal_achieved,
};
export default withNavigation (
  connect (mapStateToProps, mapDispatchToProps) (Dashboard)
);

// getSelBalVal (item, sel_val) {
//   item.level1 = parseInt (item.level1);
//   item.level2 = parseInt (item.level2);
//   item.level3 = parseInt (item.level3);

//   let act_level = 0;
//   if (sel_val < item.level1) {
//     act_level = 1;
//   }
//   if (act_level == 0 && sel_val < item.level2) {
//     act_level = 2;
//   }

//   if (act_level == 0 && sel_val < item.level3) {
//     act_level = 3;
//   }

//   if (act_level == 1) act_val = item.level1;
//   if (act_level == 2) act_val = item.level2;
//   if (act_level == 3) act_val = item.level3;

//   let sel_bal = act_val - sel_val;
//   return sel_bal;
// }
