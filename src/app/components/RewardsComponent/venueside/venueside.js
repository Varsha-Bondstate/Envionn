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
  Dimensions,
  Linking,
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

import {withNavigation} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import InvitesModal from '@components/InvitesComponent/Invites/Invites';
import RedemptionModal
  from '@components/InvitesComponent/Redemption/Redemption';
import {connect} from 'react-redux';
import {Get_RewardsById, Redeem_rewards} from '@redux/Rewards/operations';
const {width, height} = Dimensions.get ('window');
import I18n from '@localization/i18n';
import CustomSpinner from '@components/SpinnerComponent/Spinner/Spinner';
import Toast from 'react-native-root-toast';
import toaster from '@config/toaster';
// for lodash
import _ from 'lodash';
class Venueside extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      //  weekdays: [
      //   'Mandag',
      //   'Tirsdag',
      //   'Onsdag',
      //   'Torsdag',
      //   'Fredag',
      //   'Lørdag',
      //   'Søndag',
      // ],
      weekdays: [
        {day: 'monday', name: 'Mandag'},
        {day: 'tuesday', name: 'Tirsdag'},
        {day: 'wednesday', name: 'Onsdag'},
        {day: 'thursday', name: 'Torsdag'},
        {day: 'friday', name: 'Fredag'},
        {day: 'saturday', name: 'Lørdag'},
        {day: 'sunday', name: 'Søndag'},
      ],
      InvitesmodalVisible: false, //modal boolean
      RedemptionModalVisible: false,
      rewards: {},
      opening_hrs: {},
      openinghrs_arr: [],
      unusedcoins: '',
      actualCoins: '',
    };
  }

  componentDidMount () {
    let params = this.props.navigation.state.params.venueparams;
    console.log ('params', params);
    if (params.rewards_id != '' && params.rewards_id !== undefined) {
      this.getrewards (params.rewards_id);
    }
    this.setState ({unusedcoins: params.coins}, function () {});
  }
  getrewards (params) {
    let param = {
      reward_id: params,
    };
    let _this = this;
    this.props.Get_RewardsById (param).then (function () {
      if (
        _this.props.getRewards &&
        _this.props.getRewards.status &&
        _this.props.getRewards.status.code == '200'
      ) {
        let rewards = _this.props.getRewards.records[0].reward;
        _this.setState (
          {
            rewards: _this.props.getRewards.records[0].reward,
            opening_hrs: _this.props.getRewards.records[0].open_hrs,
            actualCoins: _this.props.getRewards.records[0].reward.coins,
          },
          function () {
            console.log ('individual rewards', _this.state.rewards);
            console.log ('individual opening_hrs', _this.state.opening_hrs);
            if (_this.state.opening_hrs.length > 0) {
              this.format_openinghrs ();
            }
          }
        );
      }
    });
  }

  format_openinghrs () {
    let db_arr = this.state.opening_hrs;
    let week_arr = this.state.weekdays;
    let new_arr = [];

    _.forEach (db_arr, function (item1, key1) {
      if (item1 == null && item1 == undefined) {
        return null;
      } else {
        _.forEach (week_arr, function (item2, key2) {
          if (item2 == null && item2 == undefined) {
            return null;
          } else {
            if (item1.day == item2.day && item1.from_time !== '0') {
              new_arr.push ({
                from_time: item1.from_time,
                period_from: item1.period_from,
                to_time: item1.to_time,
                period_to: item1.period_to,
                day: item2.name,
              });
            }
            return new_arr;
          }
        });
      }
    });
    this.setState (
      {
        openinghrs_arr: new_arr,
      },
      function () {
        console.log ('new_arr', this.state.openinghrs_arr);
      }
    );
  }

  onvenueside () {
    this.props.navigation.navigate ('rewards');
  }

  RedemptionOpenModal (visible, fieldName) {
    this.setState ({RedemptionModalVisible: visible});
  }
  // edit singup modal open
  openOrCloseRedemptionModal (visible, data) {
    this.setState ({RedemptionModalVisible: visible}, function () {});
  }

  InvitesOpenModal (visible, fieldName) {
    this.setState ({InvitesmodalVisible: visible});
  }
  // edit singup modal open
  openOrCloseinvitesModal (visible, data) {
    this.setState ({InvitesmodalVisible: visible}, function () {});
  }

  redeem_rewards () {
    let _this = this;
    // let param = {
    //   reward_id: _this.state.rewards.id,
    //   coins: _this.state.rewards.coins,
    // };
    // console.log ('param', param);
    // this.props.Redeem_rewards (param).then (function () {
    //   if (
    //     _this.props.getredeem &&
    //     _this.props.getredeem.status &&
    //     _this.props.getredeem.status.code == '200'
    //   ) {
    //     let toast = Toast.show (
    //       'Reward Redeemed Successfully',
    //       toaster.toastparam
    //     );
    //     _this.RedemptionOpenModal (true);
    //   } else {
    //     let toast = Toast.show ('something went wrong', toaster.toastparam);
    //   }
    // });
    _this.RedemptionOpenModal (true);
  }

  // button disable option for validation
  isSubmitEnabled () {
    // Access field values here and validate them
    console.log ('unusedcoins', this.state.unusedcoins);
    console.log ('actualCoins', this.state.actualCoins);
    console.log ('test', this.state.unusedcoins >= this.state.actualCoins);
    if (
      this.state.unusedcoins != '' &&
      this.state.actualCoins != '' &&
      this.state.unusedcoins >= this.state.actualCoins
    ) {
      return true;
    } else {
      return false;
    }
  }

  render () {
    const isEnabled = this.isSubmitEnabled ();
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >
        <CustomSpinner loading={this.props.isLoading} />
        <ScrollView>
          {/* headerContainer */}
          <View style={styles.headerContainer}>

            <TouchableOpacity onPress={() => this.onvenueside ()}>
              <Icon
                name="chevron-left"
                type="font-awesome"
                color="#fff"
                size={hp ('4%')}
              />
            </TouchableOpacity>
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
          {/* whitebgContainer */}

          <View style={styles.venuesidecontainer}>

            <View>
              {this.props.getRewards &&
                this.props.getRewards.status &&
                this.props.getRewards.status.code == '200' &&
                this.state.rewards.image !== ''
                ? <Image
                    source={{uri: this.state.rewards.image}}
                    style={styles.venueimg}
                  />
                : <Image
                    source={require ('@assets/images/rewards_palads_logo.png')}
                    style={styles.venueimg}
                  />}

            </View>
            {this.props.getRewards &&
              this.props.getRewards.status &&
              this.props.getRewards.status.code == '200'
              ? <View style={styles.whiteContainer}>

                  <View style={styles.textView}>
                    {this.state.rewards.title !== ''
                      ? <Text style={styles.boldText}>
                          {this.state.rewards.title}
                        </Text>
                      : null}

                  </View>

                  <View style={styles.addressView}>
                    {this.state.rewards.description !== ''
                      ? <Text style={styles.titleText}>
                          {this.state.rewards.description}
                        </Text>
                      : null}
                    {/* <View style={styles.detailsContainer}>
                      <Text style={styles.normalText}>
                        Belønning opnået d. 20.06.2019 (Cykling, 50 km. juni 2019)
                      </Text>
                    </View> */}

                  </View>
                  <View>
                    <TouchableOpacity
                      style={styles.btnContainer}
                      onPress={() => {
                        this.redeem_rewards ();
                      }}
                      // disabled={!isEnabled}
                    >

                      <View
                        // style={
                        //   !isEnabled
                        //     ? styles.buttonDisable
                        //     : styles.buttonEnable
                        // }
                        style={styles.buttonEnable}
                      >
                        <Icon
                          name="gift"
                          size={hp ('4%')}
                          type="font-awesome"
                          color={colors.white}
                        />
                        <Text style={styles.BtnTextFont}>
                          {I18n.t ('venue_page.redeembtn_label')}
                        </Text>
                      </View>
                    </TouchableOpacity>

                  </View>

                  <View style={styles.line} />
                  <View>
                    <Text style={styles.label}>
                      {I18n.t ('venue_page.info_label')}
                    </Text>
                    {this.state.rewards.info !== ''
                      ? <Text style={styles.labelText}>
                          {this.state.rewards.info}
                        </Text>
                      : null}
                  </View>
                  <Text style={styles.contactTitle}>
                    {I18n.t ('venue_page.contact_label')}
                  </Text>
                  <View style={styles.line} />
                  <View style={styles.ContactContainer}>

                    <Text style={styles.contactText}>
                      {I18n.t ('venue_page.address_label')}:
                    </Text>
                    {this.state.rewards.address !== ''
                      ? <View style={styles.ContactTextContainer}>
                          <Text style={styles.contactText}>
                            {this.state.rewards.address}

                          </Text>
                        </View>
                      : null}

                  </View>
                  <View style={styles.line} />
                  <View style={styles.ContactContainer}>

                    <Text style={styles.contactText}>
                      {I18n.t ('venue_page.telephone_label')}:
                    </Text>
                    {this.state.rewards.phone !== ''
                      ? <View style={styles.ContactTextContainer}>
                          <Text
                            style={styles.phoneText}
                            onPress={() => {
                              let phone = this.state.rewards.phone;
                              Linking.openURL (`tel:${phone}`);
                            }}
                          >
                            {this.state.rewards.phone}

                          </Text>
                        </View>
                      : null}

                  </View>
                  <View style={styles.line} />
                  <View style={styles.ContactContainer}>

                    <Text style={styles.contactText}>
                      Web:
                    </Text>
                    {this.state.rewards.web !== ''
                      ? <View style={styles.webTextContainer}>
                          <Text
                            style={styles.hyperlinkStyle}
                            onPress={() => {
                              let url = this.state.rewards.web;
                              Linking.openURL (url);
                            }}
                          >
                            {this.state.rewards.web}
                          </Text>
                        </View>
                      : null}
                  </View>

                  <View style={styles.Openinghours}>
                    <Text style={styles.contactTitle}>
                      {I18n.t ('venue_page.openinghrs_label')}
                    </Text>
                    <View style={styles.line} />
                    {this.state.openinghrs_arr.length > 0
                      ? <View>
                          {this.state.openinghrs_arr.map ((item, key) => {
                            return (
                              <View key={key}>

                                <View style={styles.weektextline}>
                                  <Text style={styles.daysText}>
                                    {item.day}
                                  </Text>

                                  <Text style={styles.timeText}>
                                    {item.from_time}
                                    {item.period_from}
                                    {' '}
                                    -
                                    {' '}
                                    {item.to_time}
                                    {item.period_to}
                                  </Text>

                                </View>

                              </View>
                            );
                          })}
                        </View>
                      : null}

                  </View>
                </View>
              : null}
          </View>
        </ScrollView>
        {/* </ScrollView> */}
        {this.state.InvitesmodalVisible
          ? <InvitesModal
              style={{width: width - 10}}
              openValue={this.state.InvitesmodalVisible}
              closeModal={(visible, data) => {
                this.openOrCloseinvitesModal (visible, data);
              }}
            />
          : null}
        {this.state.RedemptionModalVisible
          ? <RedemptionModal
              style={{width: width - 10}}
              openValue={this.state.RedemptionModalVisible}
              redeemdetails={this.state.rewards}
              closeModal={(visible, data) => {
                this.openOrCloseRedemptionModal (visible, data);
              }}
            />
          : null}
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  console.log ('rewards state', state);
  return {
    getRewards: state.Rewards.getrewardsById
      ? state.Rewards.getrewardsById
      : {},
    getredeem: state.Rewards.getredeemrewards
      ? state.Rewards.getredeemrewards
      : {},
    error: state.Rewards.error,
    isLoading: state.Rewards.loading,
  };
};
const mapDispatchToProps = {
  Get_RewardsById,
  Redeem_rewards,
};
export default withNavigation (
  connect (mapStateToProps, mapDispatchToProps) (Venueside)
);
