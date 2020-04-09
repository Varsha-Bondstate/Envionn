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
import TermsModal from './termsModal';
import AsyncStorage from '@react-native-community/async-storage';
class Privacy extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {termspmodalVisible: false};
  }
  componentDidMount () {}

  // edit singup modal open
  openOrCloseModal (visible, data) {
    this.setState ({termspmodalVisible: visible}, function () {
      console.log ('termspmodalVisible', this.state.termspmodalVisible);
    });
  }
  // edit singup modal open
  termsOpenModal (visible) {
    this.setState ({termspmodalVisible: visible});
  }
  OnPrivacyClick (data) {
    if (data == 'privacy') {
      this.termsOpenModal (true);
    } else if (data == 'service') {
      // this.setState ({termspmodalVisible: true}, function () {});
    }
  }
  onSingup = async () => {
    await this.saveterms (true);
    this.props.navigation.navigate ('profile');
  };
  // save token in storage
  saveterms = async data => {
    console.log ('data', data);
    try {
      if (data == true) {
        let isagree = await AsyncStorage.setItem (
          'Istermsagree',
          JSON.stringify (true)
        );
      } else {
        let isagree = await AsyncStorage.setItem (
          'Istermsagree',
          JSON.stringify (false)
        );
      }
    } catch (e) {
      // save error
    }
  };

  onbackClick () {
    this.props.navigation.navigate ('SignUp');
  }
  render () {
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >

        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => this.onbackClick ()}
        >
          <Icon
            name="chevron-left"
            type="font-awesome"
            color="#fff"
            size={hp ('3%')}
          />
        </TouchableOpacity>

        <View style={styles.termsContainer}>
          <Text style={styles.hederText}>
            {I18n.t ('privacy_page.Dashboard_title')}
          </Text>
          <View style={styles.privacyNote}>
            <Text style={styles.normalText}>
              When you sign up for an Envionn Account, we require certain information such as your first name, last name, email address, and date of birth.
              Profile and Listing Information. To use certain features of the Envionn Platform (such as booking or creating a Listing), we may ask you to provide additional information, which may include your address, phone number, and a profile picture.
              Identity Verification Information.
            </Text>
          </View>

        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.normalText}>
            By Continuing to use Envionn, you agree to our {' '}
            <Text
              style={styles.hyperText}
              onPress={() => {
                this.OnPrivacyClick ('privacy');
              }}
            >
              Privacy Statement{' '}
            </Text>
            and{' '}
            <Text
              style={styles.hyperText}
              onPress={() => {
                this.OnPrivacyClick ('service');
              }}
            >
              Services Agreement{' '}
            </Text>
            .
          </Text>

        </View>
        <View>

          <TouchableOpacity style={styles.btnContainer} onPress={this.onSingup}>
            <View style={styles.buttonEnable}>

              <Text style={styles.BtnTextFont}>
                CONTINUE
              </Text>
            </View>
          </TouchableOpacity>

        </View>
        {this.state.termspmodalVisible
          ? <TermsModal
              openValue={this.state.termspmodalVisible}
              closeModal={(visible, data) => {
                this.openOrCloseModal (visible, data);
              }}
            />
          : null}
      </LinearGradient>
    );
  }
}
export default Privacy;
