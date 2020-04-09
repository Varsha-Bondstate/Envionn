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
} from 'react-native';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';
import baseStyles from '@lib/base';
import {Icon, Overlay} from 'react-native-elements';
import I18n from '@localization/i18n';
import {Card} from 'native-base';
import {withNavigation} from 'react-navigation';
const {width, height} = Dimensions.get ('window');

class Redemption extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {modalVisible: false, redeemdetails: {}};
  }
  componentDidMount () {
    if (this.props.openValue) {
      this.setState (
        {
          modalVisible: this.props.openValue,
          fieldValue: this.props.fieldValue,
          redeemdetails: this.props.redeemdetails,
        },
        function () {
          console.log ('redeemdetails', this.state.redeemdetails);
        }
      );
    }
  }
  // modal close
  toggleModal (visible) {
    this.setState ({modalVisible: visible}, () => {});
    this.props.closeModal (visible, this.state);
  }
  onContinue = () => {
    this.props.closeModal (false, this.state);
    let redeemparam = this.state.redeemdetails;
    this.props.navigation.navigate ('Redeem', {redeemparam});
    // this.props.navigation.navigate ('Redeem');
  };

  render () {
    return (
      <Overlay
        isVisible={this.state.modalVisible}
        windowBackgroundColor="rgba(0, 0, 0, .5)"
        overlayBackgroundColor="transparent"
        width="auto"
        height="auto"
        overlayStyle={styles.overlay}
      >
        <Card style={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.shareIconContainer}>

              <Text style={styles.titleText}>
                {I18n.t ('Redemption_page.title_label')}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.toggleModal (!this.state.modalVisible);
              }}
              style={styles.shareContainer}
            >
              <Icon
                name="close"
                type="font-awesome"
                color="gray"
                size={hp ('3.5%')}
              />
            </TouchableOpacity>

          </View>
          <View style={styles.firstline} />
          <View style={styles.confirmationTextContainer}>
            <Text style={styles.text}>
              {I18n.t ('Redemption_page.feature_label')}
            </Text>
            <View style={styles.secondline} />
            <Text style={styles.text}>
              {I18n.t ('Redemption_page.staff_label')}
              {this.state.redeemdetails.title}
            </Text>
            <View style={styles.secondline} />
            <Text style={styles.text}>
              {I18n.t ('Redemption_page.validity_label')}
            </Text>
          </View>
          <View style={styles.firstline} />
          <View style={styles.btnContainer}>

            <TouchableOpacity
              style={styles.undobtn}
              onPress={() => {
                this.toggleModal (!this.state.modalVisible);
              }}
            >
              <Icon
                name="times-circle"
                type="font-awesome"
                color={colors.white}
                size={hp ('2.8%')}
              />
              <Text style={styles.BtnTextFont}>
                {I18n.t ('Redemption_page.undo_label')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continuebtn}
              onPress={this.onContinue}
            >
              <Text style={styles.BtnTextFont}>
                {I18n.t ('Redemption_page.continue_label')}
              </Text>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color={colors.white}
                size={hp ('2.8%')}
                containerStyle={styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
        </Card>
      </Overlay>
    );
  }
}

export default withNavigation (Redemption);
