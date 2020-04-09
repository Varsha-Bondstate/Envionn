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
  FlatList,
  Dimensions,
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
import InvitesModal from '@components/InvitesComponent/Invites/Invites';
import I18n from '@localization/i18n';
import {
  withNavigation,
  HeaderBackButton,
  NavigationEvents,
} from 'react-navigation';
import {connect} from 'react-redux';
import {profile_step_info, get_user_details} from '@redux/StartUp/operations';
const {width, height} = Dimensions.get ('window');
// for lodash
import _ from 'lodash';
// const details = [
//   {title: 'Belønninger', value: '1'},
//   {title: 'Antal', value: '1'},
//   {title: 'Tid', value: '39m:09s'},
//   {title: 'Gsn.tid', value: '39m:09s'},
//   {title: 'Distance', value: '18,32 km.'},
//   {title: 'Gsn.distance', value: '18,32 km.'},
//   {title: 'Kalorier', value: '375'},
// ];
const numColumns = 3;
const box = [
  {
    name: 'Today',
    value: 'today',
  },
  {
    name: 'Week',
    value: 'week',
  },
  {
    name: 'Month',
    value: 'month',
  },
  {
    name: 'Total',
    value: '',
  },
];

const title = [
  'Belønninger',
  'Antal',
  'Tid',
  'Gsn.tid',
  'Distance',
  'Gsn.distance',
  'Kalorier',
];

class Profile extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      profileimage: '',
      profileName: '',
      filterViewItem: 'Today',
      defaultFilter: 'today',
      InvitesmodalVisible: false, //modal boolean
      profileinfo: {},
      isedit: false,
      feeds: [],
    };
  }

  componentDidMount () {
    // this.get_profile_info (this.state.defaultFilter);
  }
  get_profile_info (data) {
    let _this = this;
    let param = {period: data};
    this.props.profile_step_info (param).then (function () {
      if (
        _this.props.profileinfo &&
        _this.props.profileinfo.status.code == '200'
      ) {
        let profileinfo = _this.props.profileinfo.records.activities;
        _this.setState (
          {
            profileinfo: profileinfo,
            profileName: _this.props.profileinfo.records.user.f_name,
            profileimage: _this.props.profileinfo.records.user.user_image,
          },
          function () {
            console.log ('profileinfo', _this.state.profileinfo);
          }
        );
      }
    });
  }
  // for getting user_details
  getuserdetails () {
    let _this = this;
    this.props.get_user_details ().then (function () {
      if (
        _this.props.getuserDetails &&
        _this.props.getuserDetails.status.code == '200'
      ) {
        let feeds = _this.props.getuserDetails.records.feeds.feeds;
        _this.setState (
          {
            feeds: feeds,
          },
          function () {
            console.log ('feeds', this.state.feeds);
          }
        );
      }
    });
  }
  // today,week,month,total
  selectionONprocess = item => {
    this.setState (
      {defaultFilter: item.value, filterViewItem: item.name},
      function () {
        this.get_profile_info (this.state.defaultFilter);
      }
    );
  };

  // tab1 view
  renderTab = () => {
    const details = [
      {
        title: I18n.t ('profile_page.rewards_Label'),
        value: this.state.profileinfo.rewards,
      },
      {
        title: I18n.t ('profile_page.quantity_Label'),
        value: this.state.profileinfo.quantity,
      },
      {
        title: I18n.t ('profile_page.time_Label'),
        value: this.state.profileinfo.time,
      },
      {
        title: I18n.t ('profile_page.averagetime_Label'),
        value: this.state.profileinfo.average_tm,
      },
      {
        title: I18n.t ('profile_page.distance_Label'),
        value: this.state.profileinfo.distance,
      },
      {
        title: I18n.t ('profile_page.avgdistance_Label'),
        value: this.state.profileinfo.avg_distance,
      },
      {
        title: I18n.t ('profile_page.calories_Label'),
        value: this.state.profileinfo.calories,
      },
    ];
    return (
      <View>
        {details.map ((item, index) => {
          return (
            <View style={styles.tabview} key={index}>
              <View style={styles.tabcontent}>
                <Text style={styles.tabviewText}>
                  {item.title}
                </Text>
              </View>
              <View style={styles.tabcontent}>
                <Text style={styles.tabviewText}>

                  {item.value == null || item.value == '' ? '-' : item.value}

                </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  onSettings () {
    this.props.navigation.navigate ('settings');
  }

  InvitesOpenModal (visible, fieldName) {
    this.setState ({InvitesmodalVisible: visible});
  }
  // edit singup modal open
  openOrCloseinvitesModal (visible, data) {
    this.setState ({InvitesmodalVisible: visible}, function () {});
  }

  formatdata = (dataList, numColumns) => {
    const totalRows = Math.floor (dataList.length / numColumns);
    let totalLastRow = dataList.length - totalRows * numColumns;
    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push ({key: 'blank', empty: true});
      totalLastRow++;
    }
    return dataList;
  };

  // flat list view
  renderitem = ({item, index}) => {
    if (item.empty) {
      return (
        <View
          style={[
            {
              backgroundColor: colors.white,
              alignItems: 'center',
              justifyContent: 'center',
              height: 100,
              flex: 1,
              margin: hp ('1%'),
              height: width / numColumns,
            },
            {backgroundColor: 'transparent'},
          ]}
        />
      );
    }
    return (
      <View
        style={{
          backgroundColor: colors.white,
          alignItems: 'center',
          justifyContent: 'center',
          height: 100,
          flex: 1,
          margin: hp ('1%'),
          height: width / numColumns,
        }}
      >
        <Image
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
          style={styles.exploreimg}
        />
      </View>
    );
  };
  render () {
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >
        <NavigationEvents
          onDidFocus={() => {
            this.get_profile_info (this.state.defaultFilter);
            this.getuserdetails ();
          }}
        />
        <ScrollView>
          <View style={styles.profileContainer}>

            {/* headerContainer */}
            <View style={styles.headerContainer}>

              <TouchableOpacity onPress={() => this.onSettings ()}>
                <Icon
                  name="settings"
                  type="material"
                  color={colors.white}
                  size={hp ('3.5%')}
                />
              </TouchableOpacity>
              <View style={styles.iconTextContainer}>
                <Icon
                  name="user-circle-o"
                  size={hp ('3%')}
                  type="font-awesome"
                  color={colors.white}
                />
                <Text style={styles.titleText}>
                  {I18n.t ('profile_page.myprofile_label')}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.InvitesOpenModal (true);
                }}
              >
                <Icon
                  name="share-alt"
                  type="font-awesome"
                  color={colors.white}
                  size={hp ('3.5%')}
                />
              </TouchableOpacity>
            </View>
            {/* imageContainer */}
            <View style={styles.profileimgContainer}>
              {this.state.profileimage !== '' &&
                this.state.profileimage !== 'NO_USER'
                ? <Image
                    source={{
                      uri: this.state.profileimage,
                    }}
                    style={styles.profileImg}
                  />
                : <Image
                    source={require ('@assets/images/profile_avatar.png')}
                    style={styles.profileImg}
                  />}
              <Text style={styles.nameText}>
                {this.state.profileName}
              </Text>
            </View>

            {/* stepsorContainer */}
            <View style={styles.stepsorContainer}>
              <View style={styles.line} />

              <View style={styles.stepstextContainer}>
                <Icon
                  name="bar-chart"
                  type="font-awesome"
                  color={colors.white}
                  size={hp ('3%')}
                />

                <Text style={styles.orText}>

                  {I18n.t ('profile_page.activities_label')}
                </Text>

              </View>
              <View style={styles.line} />
            </View>

            {/* tabsContainer */}

            <View style={styles.boxContainer}>
              <View style={[styles.boxContentView, styles.BoxView]}>
                {box.map ((item, key) => {
                  return (
                    <TouchableOpacity
                      onPress={() => this.selectionONprocess (item)}
                      key={key}
                      style={[
                        {
                          backgroundColor: this.state.filterViewItem ===
                            item.name
                            ? colors.btncolor
                            : 'transparent',
                        },
                        styles.tabtitle,
                      ]}
                    >

                      <Text
                        style={[
                          {
                            color: this.state.filterViewItem === item.name
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
              <View style={styles.tabContainer}>
                {this.renderTab ()}

              </View>
            </View>
            {/* feedsorContainer */}
            <View style={styles.feedsorContainer}>
              <View style={styles.feedline} />

              <View style={styles.feedstextContainer}>
                <Icon
                  name="camera"
                  type="font-awesome"
                  color={colors.white}
                  size={hp ('3%')}
                />

                <Text style={styles.orText}>

                  {I18n.t ('profile_page.feed_label')}
                </Text>

              </View>
              <View style={styles.feedline} />
            </View>
            {this.state.feeds.length > 0
              ? <View
                  style={{
                    flex: 1,
                    paddingTop: hp ('2%'),
                  }}
                >
                  <FlatList
                    data={this.formatdata (this.state.feeds, numColumns)}
                    renderItem={this.renderitem}
                    keyExtractor={(item, index) => index.toString ()}
                    numColumns={numColumns}
                    extraData={this.state}
                    ListFooterComponent={() => <View style={{height: 100}} />}
                  />
                </View>
              : <View style={styles.nopicsContainer}>
                  <Text style={styles.tabviewText}>
                    {I18n.t ('profile_page.npics_label')}
                  </Text>
                </View>}

          </View>
        </ScrollView>
        {this.state.InvitesmodalVisible
          ? <InvitesModal
              openValue={this.state.InvitesmodalVisible}
              closeModal={(visible, data) => {
                this.openOrCloseinvitesModal (visible, data);
              }}
            />
          : null}
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  return {
    profileinfo: state.startUp.profileinfo ? state.startUp.profileinfo : '',
    getuserDetails: state.startUp.userDetails ? state.startUp.userDetails : '',
    error: state.startUp.error,
    isLoading: state.startUp.loading,
  };
};
const mapDispatchToProps = {
  profile_step_info,
  get_user_details,
};
export default withNavigation (
  connect (mapStateToProps, mapDispatchToProps) (Profile)
);
