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
  Modal,
  Picker,
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
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {validate} from '@config/validation';

const genderArray = [
  {
    id: 1,
    title: 'Male',
    value: 'Male',
  },
  {
    id: 2,
    title: 'Female',
    value: 'Female',
  },
  {
    id: 3,
    title: 'Others',
    value: 'Others',
  },
];
class EditprofileModal extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      modalVisible: false, // modal boolean
      secureText: false,
      fName: '',
      lName: '',
      email: '',
      gender: '',
      dob: '',
      password: '',
      phone: '',
      editprofilemodalVisible: false,
      fieldName: '',
      chosenDate: new Date (),
      editprofileDetails: {},
      code: '+45',
      fnameError: false,
      fnameerrorMessage: '',
      lnameError: false,
      lnameerrorMessage: '',
      phoneError: false,
      phoneerrorMessage: '',
    };
  }
  componentDidMount () {
    if (this.props.openValue) {
      this.setState (
        {
          modalVisible: this.props.openValue,
          fieldValue: this.props.fieldValue,
          editprofileDetails: this.props.editprofileDetails,
          gender: this.props.editprofileDetails.gender,
          fName: this.props.editprofileDetails.firstName,
          lName: this.props.editprofileDetails.lastName,
          phone: this.props.editprofileDetails.phone,
        },
        function () {
          console.log ('editprofileDetails', this.state.editprofileDetails);
          if (this.state.editprofileDetails.dob !== '') {
            let date = new Date (this.state.editprofileDetails.dob);
            this.setState ({chosenDate: date}, function () {
              console.log (this.state.chosenDate);
            });
          }
        }
      );
    }
  }
  //  chosenDate: new Date (this.state.editprofileDetails.dob),
  // modal close
  toggleModal (visible) {
    this.setState ({modalVisible: visible}, () => {});
    this.props.closeModal (visible, this.state);
  }

  gender_change () {}

  // button disable option for validation
  isSubmitEnabled () {
    // Access field values here and validate them

    let fnameerr = this.state.fnameError;
    let lnameerr = this.state.lnameError;
    let phoneerr = this.state.phoneError;

    if (fnameerr == false && lnameerr == false && phoneerr == false) {
      return true;
    } else {
      return false;
    }
  }
  render () {
    const isEnabled = this.isSubmitEnabled ();
    const date = new Date (this.state.editprofileDetails.dob);

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
              disabled={!isEnabled}
              disabledStyle={styles.iconDisable}
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

          {this.state.fieldValue == 'firstname'
            ? <View style={styles.inputfield}>
                <View style={styles.label}>
                  <Text style={styles.boldText}>First Name</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textinput}
                    placeholder=""
                    value={this.state.fName}
                    onChangeText={text => {
                      this.setState ({fName: text}, function () {});
                      let v = validate ('fName', text);
                      this.setState ({
                        fnameError: !v[0],
                        fnameerrorMessage: v[1],
                      });
                    }}
                  />
                </View>
                {this.state.fnameerrorMessage !== '' &&
                  this.state.fnameError == true
                  ? <View>
                      <Text style={styles.error}>
                        {this.state.fnameerrorMessage}
                      </Text>
                    </View>
                  : null}
              </View>
            : null}

          {this.state.fieldValue == 'lastname'
            ? <View style={styles.inputfield}>
                <View style={styles.label}>
                  <Text style={styles.boldText}>Last Name</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textinput}
                    placeholder=""
                    value={this.state.lName}
                    onChangeText={text => {
                      let v = validate ('lName', text);
                      this.setState (
                        {
                          lName: text,
                          lnameError: !v[0],
                          lnameerrorMessage: v[1],
                        },
                        function () {}
                      );
                    }}
                  />
                </View>
                {this.state.lnameerrorMessage !== '' &&
                  this.state.lnameError == true
                  ? <View>
                      <Text style={styles.error}>
                        {this.state.lnameerrorMessage}
                      </Text>
                    </View>
                  : null}
              </View>
            : null}
          {this.state.fieldValue == 'date'
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

          {this.state.fieldValue == 'gender'
            ? <View style={styles.inputfield}>
                <View style={styles.label}>
                  <Text style={styles.boldText}>Gender</Text>
                </View>
                <View style={styles.picker}>
                  <Picker
                    selectedValue={this.state.gender}
                    onValueChange={(itemValue, itemIndex) => {
                      this.setState ({
                        gender: itemValue,
                      });
                    }}
                  >
                    {genderArray.map ((v, item) => {
                      return (
                        <Picker.Item
                          label={v.title}
                          value={v.value}
                          key={item}
                        />
                      );
                    })}
                  </Picker>
                </View>
              </View>
            : null}

          {this.state.fieldValue == 'phone'
            ? <View style={styles.inputfield}>
                <View style={styles.label}>
                  <Text style={styles.boldText}>Phone Number</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}
                >

                  <TextInput
                    style={styles.codeinput}
                    returnKeyLabel="next"
                    textContentType="telephoneNumber"
                    dataDetectorTypes="phoneNumber"
                    keyboardType="phone-pad"
                    maxLength={3}
                    editable={false}
                    value={this.state.code}
                  />
                  <TextInput
                    style={styles.phonetextinput}
                    returnKeyLabel="next"
                    value={this.state.phone}
                    onChangeText={text => {
                      this.setState ({phone: text});
                      let v = validate ('phone', text);
                      this.setState ({
                        phoneError: !v[0],
                        phoneerrorMessage: v[1],
                      });
                    }}
                    textContentType="telephoneNumber"
                    dataDetectorTypes="phoneNumber"
                    keyboardType="phone-pad"
                  />

                </View>
                {this.state.phoneerrorMessage !== '' &&
                  this.state.phoneError == true
                  ? <View>
                      <Text style={styles.error}>
                        {this.state.phoneerrorMessage}
                      </Text>
                    </View>
                  : null}
              </View>
            : null}

        </LinearGradient>
      </Modal>
    );
  }
}
export default EditprofileModal;
