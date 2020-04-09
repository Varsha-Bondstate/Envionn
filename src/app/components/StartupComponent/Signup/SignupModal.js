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
  Modal,
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
import {Icon, Card} from 'react-native-elements';
import I18n from '@localization/i18n';
import DatePicker from 'react-native-date-picker';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
const {width, height} = Dimensions.get ('window');
class SignupModal extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      modalVisible: false, // modal boolean
      dob: '',
      chosenDate: new Date (),
    };
  }
  componentDidMount () {
    if (this.props.openValue) {
      this.setState (
        {
          modalVisible: this.props.openValue,
          fieldValue: this.props.fieldValue,
          dob: this.props.signupDetails.dob,
        },
        function () {}
      );
    }
  }

  // for date of birth

  // modal close
  toggleModal (visible) {
    this.setState ({modalVisible: visible}, () => {});
    this.props.closeModal (visible, this.state);
  }
  render () {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
      >
        <LinearGradient
          colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
          style={baseStyles.content}
        >
          <View style={styles.popupClose}>
            <Icon
              name="done"
              type="material"
              color={colors.white}
              size={hp ('3.5%')}
              onPress={() => {
                this.toggleModal (!this.state.modalVisible, this.state);
              }}
            />
            <TouchableOpacity>
              <Text
                style={styles.resetText}
                onPress={() => {
                  this.toggleModal (!this.state.modalVisible);
                }}
              >
                {I18n.t ('signup_page.Cancel_btn')}
              </Text>
            </TouchableOpacity>
          </View>

          {this.state.fieldValue == 'datemodal'
            ? <View style={styles.inputfield}>
                <View style={styles.label}>
                  <Text style={styles.boldText}>
                    {I18n.t ('signup_page.Birthday_btn')}
                  </Text>
                </View>

                <View>
                  <DatePicker
                    maximumDate={new Date ()}
                    style={styles.Dateinput}
                    date={this.state.chosenDate}
                    onDateChange={date => this.setState ({chosenDate: date})}
                    mode="date"
                    textColor="#ffffff"
                  />
                </View>

              </View>
            : null}
          {/* </View> */}

        </LinearGradient>
      </Modal>
    );
  }
}
export default SignupModal;
