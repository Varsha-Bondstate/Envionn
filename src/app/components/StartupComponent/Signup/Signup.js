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
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
  Keyboard,
  ImageBackground,
  TouchableHighlight,
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
import SignupModal from './SignupModal';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import {Radio, ActionSheet} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import {emailExist, singUP} from '@redux/StartUp/operations';
import {connect} from 'react-redux';
import {validate} from '@config/validation';
import DeviceInfo from 'react-native-device-info';
import Spinner from '@components/SpinnerComponent/Spinner/Spinner';
import AsyncStorage from '@react-native-community/async-storage';
const B = props => (
  <Text style={{fontWeight: 'bold', color: colors.red, fontSize: hp ('3%')}}>
    {props.children}
  </Text>
);

var BUTTONS = ['Take Photo', 'Choose from Gallery', 'Cancel'];
var CANCEL_INDEX = 2;
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
class Signup extends PureComponent {
  constructor (props) {
    super (props);

    this.state = {
      email: '',
      fName: '',
      lName: '',
      dob: new Date (),
      phone: '',
      password: '',
      signupmodalVisible: false, //modal boolean
      genderValue: 'Male',
      genderViewItem: 'Male',
      image: '',
      ext: '',
      clicked: ' ',
      imageloading: false,
      imagepath: '',
      emailError: false,
      emailErrorMessage: '',
      passError: false,
      passrrorMessage: '',
      fnameError: false,
      fnameerrorMessage: '',
      lnameError: false,
      lnameerrorMessage: '',
      language_code: 'en',
      phoneError: false,
      phoneerrorMessage: '',
      CheckBox: false,
      code: '+45',
      secureText: true,
      isVisible: true,
    };
  }

  componentDidMount () {}
  onChangefname (text) {}
  // edit singup modal open
  signUpOpenModal (visible, fieldName) {
    this.setState ({signupmodalVisible: visible, fieldName: fieldName});
  }
  // edit singup modal open
  openOrCloseModal (visible, data) {
    this.setState (
      {signupmodalVisible: visible, dob: data.chosenDate},
      function () {}
    );
  }

  // gender radio click
  onSortradio = item => {
    this.setState (
      {genderValue: item.value, genderViewItem: item.title},
      function () {}
    );
  };

  //for choose image
  pickImageHandler = () => {
    ActionSheet.show (
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        title: 'Choose Image Source',
      },
      buttonIndex => {
        this.setState (
          {
            clicked: BUTTONS[buttonIndex],
            imageloading: true,
          },
          function () {
            if (this.state.clicked == 'Take Photo') {
              ImagePicker.openCamera ({
                width: 300,
                height: 400,
                cropping: true,
                multiple: true,
                includeBase64: true,
              }).then (image => {
                console.log ('Photo image', image);
                let images = [];
                images.push (image);
                let imageUri = images[0].path;
                var lastslashindex = images[0].mime.lastIndexOf ('/');
                var result = images[0].mime.substring (lastslashindex + 1);
                let ext = String (`.${result}`);
                if (imageUri != '' && imageUri != undefined) {
                  let base64_image = `data:${images[0].mime};base64,${images[0].data}`;
                  this.setState (
                    {
                      imagepath: image.path,
                      imageloading: false,
                      ext: ext,
                      image: base64_image,
                    },
                    function () {}
                  );
                }
              });
            } else if (this.state.clicked == 'Choose from Gallery') {
              ImagePicker.openPicker ({
                width: 300,
                height: 400,
                cropping: true,
                multiple: false,
                includeBase64: true,
              }).then (images => {
                console.log ('Gallery images', images);
                let imageUri = images.path;
                var lastslashindex = images.mime.lastIndexOf ('/');
                var result = images.mime.substring (lastslashindex + 1);
                let ext = String (`.${result}`);
                if (imageUri != '' && imageUri != undefined) {
                  let base64_image = `data:${images.mime};base64,${images.data}`;
                  this.setState ({
                    imagepath: images.path,
                    imageloading: false,
                    ext: ext,
                    image: base64_image,
                  });
                }
              });
            }
          }
        );
      }
    );
  };

  onbackClick () {
    this.props.navigation.navigate ('FrontPage');
  }

  emailAlreadyExit (email) {
    // this.props.emailExit (email);
    let _this = this;
    this.props.emailExist (email).then (function () {
      if (_this.props.EmailExist.status.err == '1') {
        Alert.alert ('Email already exists');
      } else if (_this.props.EmailExist.status.err == '0') {
        this.setState (
          {
            email: '',
          },
          function () {}
        );
      }
    });
  }
  onchangeemail (text) {
    this.setState ({email: text}, function () {
      let v = validate ('email', this.state.email);
      this.setState (
        {emailError: !v[0], emailErrorMessage: v[1]},
        function () {}
      );
    });
  }
  //register  btn
  register = async () => {
    let id = DeviceInfo.getUniqueId ();
    const brand = DeviceInfo.getBrand ();

    await this.setState (
      {
        deviceId: id,
        platform: brand,
      },
      function () {}
    );
    let user = {
      device: this.state.deviceId,
      platform: this.state.platform,
      email: this.state.email,
      password: this.state.password,
      f_name: this.state.fName,
      l_name: this.state.lName,
      dob: moment (this.state.dob).format ('DD/MM/YYYY'),
      phone: this.state.code + this.state.phone,
      gender: this.state.genderValue,
      language_code: this.state.language_code,
      image: this.state.image,
      ext: this.state.ext,
    };
    console.log ('user', user);

    let remember = {
      email: this.state.email,
      password: this.state.password,
      rememberMe: true,
    };
    let _this = this;
    await this.props.singUP (user).then (function () {
      if (_this.props.signupdata.status.code == '200') {
        _this.saveDetails (remember);
        _this.props.navigation.navigate ('Privacy');
      } else {
      }
    });
  };

  saveDetails = async remember => {
    try {
      let rememberobj = JSON.stringify (remember);
      await AsyncStorage.setItem ('rememberobj', rememberobj);
    } catch (e) {
      // save error
    }
  };

  // button disable option for validation
  isSubmitEnabled () {
    // Access field values here and validate them
    let email = this.state.email;
    let password = this.state.password;
    let fname = this.state.fName;
    let lname = this.state.lName;
    let phone = this.state.phone;

    let emailerr = this.state.emailError;
    let passerr = this.state.passError;
    let fnameerr = this.state.fnameError;
    let lnameerr = this.state.lnameError;
    let phoneerr = this.state.phoneError;

    let err = {
      emailerr: this.state.emailError,
      passerr: this.state.passError,
      fnameerr: this.state.fnameError,
      lnameerr: this.state.lnameError,
      phoneerr: this.state.phoneError,
    };
    console.log ('user err', err);
    if (
      email !== '' &&
      password !== '' &&
      fname !== '' &&
      lname !== '' &&
      phone !== '' &&
      passerr == false &&
      emailerr == false &&
      fnameerr == false &&
      lnameerr == false &&
      phoneerr == false
    ) {
      return true;
    } else {
      return false;
    }
  }

  //password Icon Change
  handleIcon (visiblity) {
    this.setState ({secureText: visiblity});
  }

  render () {
    const isEnabled = this.isSubmitEnabled ();
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >
        <Spinner loading={this.props.isLoading} />
        <ScrollView>
          <TouchableOpacity
            style={styles.signupbackbtn}
            onPress={() => this.onbackClick ()}
          >
            <Icon
              name="chevron-left"
              type="font-awesome"
              color="#fff"
              size={hp ('3%')}
            />
          </TouchableOpacity>
          <View style={styles.signupContiner}>

            {/* profileimage container */}
            <TouchableOpacity
              underlayColor="rgba(255,255,255,0)"
              style={styles.imageContainer}
              onPress={this.pickImageHandler}
            >

              {this.state.imagepath !== ''
                ? <View style={styles.imageeditafter}>

                    <ImageBackground
                      source={{uri: this.state.imagepath}}
                      style={{width: 145, height: 145}}
                      imageStyle={{
                        borderRadius: 145 / 2,
                      }}
                    >
                      <TouchableOpacity
                        underlayColor="rgba(255,255,255,0)"
                        onPress={this.pickImageHandler}
                      >
                        <Icon
                          underlayColor="rgba(255,255,255,0)"
                          name="camera"
                          type="font-awesome"
                          color={colors.white}
                          size={hp ('3.2%')}
                          iconStyle={{
                            paddingTop: hp ('17.5%'),
                            paddingLeft: hp ('10%'),
                          }}
                          onPress={this.pickImageHandler}
                        />
                      </TouchableOpacity>
                    </ImageBackground>

                  </View>
                : <View style={styles.imageeditafter}>

                    <ImageBackground
                      source={require ('@assets/images/profile_avatar.png')}
                      style={{width: 145, height: 145}}
                      imageStyle={{
                        borderRadius: 145 / 2,
                      }}
                    >
                      <TouchableOpacity
                        underlayColor="rgba(255,255,255,0)"
                        onPress={this.pickImageHandler}
                      >
                        <Icon
                          underlayColor="rgba(255,255,255,0)"
                          name="camera"
                          type="font-awesome"
                          color={colors.white}
                          size={hp ('3.2%')}
                          iconStyle={{
                            paddingTop: hp ('17.5%'),
                            paddingLeft: hp ('10%'),
                          }}
                          onPress={this.pickImageHandler}
                        />
                      </TouchableOpacity>
                    </ImageBackground>

                  </View>}

            </TouchableOpacity>
            {/* firstname container */}
            <View style={styles.inputcontainer}>
              <View style={styles.calendarIcon}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textview}>
                    {I18n.t ('signup_page.fname_label')}
                  </Text>
                  <B> * </B>
                </View>
                <Icon
                  name="user"
                  type="font-awesome"
                  color={colors.white}
                  size={hp ('2.5%')}
                  iconStyle={{paddingTop: hp ('2%')}}
                  onPress={() => {}}
                />

              </View>
              <TextInput
                style={styles.textinput}
                keyboardType="default"
                returnKeyLabel="next"
                underlineColorAndroid="transparent"
                onChangeText={text => {
                  this.setState ({fName: text});
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
            {/* lastname container */}
            <View style={styles.inputcontainer}>
              <View style={styles.calendarIcon}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textview}>
                    {I18n.t ('signup_page.lname_label')}
                  </Text>
                  <B> * </B>
                </View>
                <Icon
                  name="user"
                  type="font-awesome"
                  color="#fff"
                  size={hp ('2.5%')}
                  iconStyle={{paddingTop: hp ('2%')}}
                  onPress={() => {}}
                />

              </View>
              <TextInput
                style={styles.textinput}
                keyboardType="default"
                returnKeyLabel="next"
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
            {/* birthday container */}
            <View style={styles.inputcontainer}>
              <View style={styles.calendarIcon}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textview}>
                    {I18n.t ('signup_page.dob_label')}
                  </Text>
                  <B> * </B>
                </View>
                <Icon
                  name="calendar"
                  type="font-awesome"
                  color="#fff"
                  size={hp ('2.5%')}
                  iconStyle={{paddingTop: hp ('2%')}}
                  onPress={() => {
                    this.signUpOpenModal (true, 'datemodal');
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={styles.textinput}
                  keyboardType="default"
                  returnKeyLabel="next"
                  value={moment (this.state.dob).format ('DD/MM/YYYY')}
                  onFocus={() => {
                    Keyboard.dismiss ();
                    this.signUpOpenModal (true, 'datemodal');
                  }}
                />

              </View>

            </View>
            {/* email container */}
            <View style={styles.inputcontainer}>
              <View style={styles.calendarIcon}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textview}>
                    {I18n.t ('signup_page.email_label')}
                  </Text>
                  <B> * </B>
                </View>
                <Icon
                  name="mail"
                  type="entypo"
                  color="#fff"
                  size={hp ('2.5%')}
                  iconStyle={{paddingTop: hp ('2%')}}
                  onPress={() => {}}
                />
              </View>
              <TextInput
                style={styles.textinput}
                keyboardType="default"
                returnKeyLabel="next"
                value={this.state.email}
                onChangeText={text => {
                  this.onchangeemail (text);
                }}
                onBlur={() => {
                  if (
                    this.state.emailError == false &&
                    this.state.email != ''
                  ) {
                    this.emailAlreadyExit (this.state.email);
                  }
                }}
              />

            </View>
            {this.state.emailErrorMessage !== '' &&
              this.state.emailError == true
              ? <View>
                  <Text style={styles.error}>
                    {this.state.emailErrorMessage}
                  </Text>
                </View>
              : null}
            {/* password container */}
            <View style={styles.inputcontainer}>
              <View style={styles.calendarIcon}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textview}>
                    {I18n.t ('login_page.Password_Label')}
                  </Text>
                  <B> * </B>
                </View>
                <Icon
                  name="key"
                  type="simple-line-icon"
                  color="#fff"
                  size={hp ('2.5%')}
                  iconStyle={{
                    paddingTop: hp ('2%'),
                    paddingBottom: hp ('2%'),
                  }}
                  onPress={() => {}}
                />
              </View>
              <View style={styles.textPadding}>
                <TextInput
                  style={styles.passtextinput}
                  keyboardType="default"
                  returnKeyLabel="next"
                  secureTextEntry={this.state.secureText}
                  value={this.state.password}
                  returnKeyType="go"
                  onChangeText={text => {
                    this.setState ({password: text});
                    let v = validate ('password', text);
                    this.setState ({
                      passError: !v[0],
                      passrrorMessage: v[1],
                    });
                  }}
                />

                {this.state.secureText
                  ? <TouchableOpacity onPress={() => this.handleIcon (false)}>
                      <Icon
                        underlayColor="rgba(255,255,255,0)"
                        name="eye-with-line"
                        type="entypo"
                        color={colors.white}
                        size={hp ('2.8%')}
                        onPress={() => this.handleIcon (false)}
                      />
                    </TouchableOpacity>
                  : <TouchableOpacity onPress={() => this.handleIcon (true)}>
                      <Icon
                        underlayColor="rgba(255,255,255,0)"
                        name="eyeo"
                        color={colors.white}
                        type="antdesign"
                        size={hp ('2.8%')}
                        onPress={() => this.handleIcon (true)}
                      />
                    </TouchableOpacity>}
              </View>
            </View>
            {this.state.passrrorMessage !== '' && this.state.passError == true
              ? <View>
                  <Text style={styles.error}>
                    {this.state.passrrorMessage}
                  </Text>
                </View>
              : null}
            {/* phone container */}
            <View style={styles.inputcontainer}>
              <View style={styles.calendarIcon}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textview}>
                    {I18n.t ('signup_page.phone_label')}
                  </Text>
                  <B> * </B>
                </View>
                <Icon
                  name="phone"
                  type="font-awesome"
                  color="#fff"
                  size={hp ('2.5%')}
                  iconStyle={{paddingTop: hp ('2%')}}
                  onPress={() => {}}
                />

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
            </View>
            {this.state.phoneerrorMessage !== '' &&
              this.state.phoneError == true
              ? <View>
                  <Text style={styles.error}>
                    {this.state.phoneerrorMessage}
                  </Text>
                </View>
              : null}
            {/* gender radio button */}
            <View style={styles.inputcontainer}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textview}>
                  {I18n.t ('signup_page.gender_label')}
                </Text>
                <B> * </B>
              </View>
              <View style={styles.sortRadioView}>
                {genderArray.map ((item, i) => {
                  return (
                    <View key={i}>
                      <View style={styles.radio}>
                        <Radio
                          color={'transparent'}
                          selectedColor={colors.EnvionnTheme}
                          style={styles.radioBtnStyle}
                          onPress={() => this.onSortradio (item)}
                          selected={this.state.genderViewItem === item.title}
                        />
                        <Text style={styles.radioText}>{item.title}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>

            </View>
            {/* create profile button */}
            <View>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={this.register}
                disabled={!isEnabled}
              >
                <View
                  style={
                    !isEnabled ? styles.buttonDisable : styles.buttonEnable
                  }
                >
                  <Icon
                    name="user-plus"
                    type="font-awesome"
                    color="#fff"
                    size={hp ('2.5%')}
                  />

                  <Text style={styles.BtnTextFont}>
                    {I18n.t ('front_page.profile_button')}
                  </Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
          {this.state.signupmodalVisible
            ? <SignupModal
                openValue={this.state.signupmodalVisible}
                fieldValue={this.state.fieldName}
                signupDetails={this.state}
                closeModal={(visible, data) => {
                  this.openOrCloseModal (visible, data);
                }}
              />
            : null}

        </ScrollView>

      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  console.log ('state', state);
  return {
    EmailExist: state.startUp.emailExist,
    // signupdata: state.startUp.signup,
    signupdata: state.startUp.signup ? state.startUp.signup : {},
    error: state.startUp.error,
    isLoading: state.startUp.loading,
  };
};

const mapDispatchToProps = {
  emailExist,
  singUP,
};
export default connect (mapStateToProps, mapDispatchToProps) (Signup);
