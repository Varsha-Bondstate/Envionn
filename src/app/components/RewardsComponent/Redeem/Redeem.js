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
  Switch,
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
import LinearGradient from 'react-native-linear-gradient';
import {withNavigation} from 'react-navigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {Get_coupon_code} from '@redux/Rewards/operations';
import CustomSpinner from '@components/SpinnerComponent/Spinner/Spinner';
class Redeem extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {couponcode: ''};
  }
  componentDidMount () {
    let params = this.props.navigation.state.params.redeemparam;
    console.log ('reward in redeem page', params.id);
    if (params.id != '' && params.id !== undefined) {
      // this.getcouponcode (params.id);
    }
  }

  getcouponcode (id) {
    let param = {
      reward_id: id,
    };
    let _this = this;
    this.props.Get_coupon_code (param).then (function () {
      if (
        _this.props.getcouponcode &&
        _this.props.getcouponcode.status &&
        _this.props.getcouponcode.status.code == '200'
      ) {
        let code = _this.props.getcouponcode.records.coupon_code;
        _this.setState (
          {
            couponcode: code,
          },
          function () {
            console.log ('couponcode', _this.state.couponcode);
          }
        );
      }
    });
  }
  onbackClick () {
    this.props.navigation.navigate ('rewards');
  }
  render () {
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >
        <CustomSpinner loading={this.props.isLoading} />
        <View>

          {/* headerContainer */}
          <View style={styles.headerContainer}>

            <TouchableOpacity onPress={() => this.onbackClick ()}>
              <Icon
                name="chevron-left"
                type="font-awesome"
                color="#fff"
                size={hp ('3%')}
              />
            </TouchableOpacity>
            <Text style={styles.redeemText}>
              Indløs
            </Text>
            <TouchableOpacity />

          </View>

          <View style={styles.codeTextContainer}>
            <Text style={styles.codetext}>
              Kode:
            </Text>
            <View style={styles.firstline} />
            <Text style={styles.codetext}>
              {this.state.couponcode}
            </Text>
          </View>
          <View style={styles.warningTextContainer}>
            <View style={{flexDirection: 'row', marginTop: hp ('2.5%')}}>
              <View style={styles.warningIcon}>
                <Icon
                  name="exclamation-circle"
                  type="font-awesome"
                  color={colors.redeemconfirmtext}
                  size={hp ('3%')}
                />
              </View>
              <View>
                <Text style={styles.warningtext}>
                  Advarsel!
                </Text>
              </View>
            </View>
            <View
              style={{
                marginLeft: hp ('2%'),
                marginRight: hp ('2%'),
                marginTop: hp ('2%'),
              }}
            >
              <View style={styles.secondline} />
            </View>

            <Text style={styles.warningmsg}>
              This is done by the staff where the reward is wanted.
            </Text>
            <Text style={styles.warningmsg}>
              Swiping the button below will redeem the reward. The action cannot be undone.
            </Text>
          </View>

          {/* <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              // width: wp ('85%'),
            }}
          >
            <Switch
              style={{width: wp ('85%'), height: hp ('25%')}}
              value={true}
              // style={{transform: [{scaleX: 2}, {scaleY: 1}]}}
              onValueChange={value => {}}
            />
          </View> */}

          <View style={[styles.boxContentView, styles.BoxView]}>

            <TouchableOpacity
              onPress={() => this.selectionONprocess (item)}
              style={[
                {
                  backgroundColor: colors.btncolor,
                },
                styles.tabtitle,
              ]}
            >
              {/* 
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
              </Text> */}
            </TouchableOpacity>

          </View>
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  console.log ('rewards state', state);
  return {
    getcouponcode: state.Rewards.getcouponcode
      ? state.Rewards.getcouponcode
      : {},
    error: state.Rewards.error,
    isLoading: state.Rewards.loading,
  };
};
const mapDispatchToProps = {
  Get_coupon_code,
};
export default withNavigation (
  connect (mapStateToProps, mapDispatchToProps) (Redeem)
);
