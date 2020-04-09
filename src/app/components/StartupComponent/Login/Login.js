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
} from 'react-native';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';
import baseStyles from '@lib/base';
import images from '@lib/image';
import I18n from '@localization/i18n';
import {CheckBox} from 'native-base';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Spinner from '@components/SpinnerComponent/Spinner/Spinner';
import DeviceInfo from 'react-native-device-info';
import {validate} from '@config/validation';
import {connect} from 'react-redux';
import {LogIn} from '@redux/StartUp/operations';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from 'react-native-google-signin';
import constant from '@config/constant';
import AsyncStorage from '@react-native-community/async-storage';
// import {
//   LoginManager,
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
// } from 'react-native-fbsdk';
class Login extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      password: '',
      emailError: false,
      emailErrorMessage: '',
      passError: false,
      passrrorMessage: '',
      CheckBox: false,
      secureText: true,
      isVisible: true,
    };
    this.onSubmit = this.onSubmit.bind (this);
    this.isSubmitEnabled = this.isSubmitEnabled.bind (this);
  }
  async componentDidMount () {
    await this.getData ();
    setTimeout (() => {
      this.setState ({isVisible: false}, function () {
        console.log ('isVisible', this.state.isVisible);
      });
    }, 1000);
    // gmail login webclient_id
    // GoogleSignin.configure ({
    //   //It is mandatory to call this method before attempting to call signIn()
    //   scopes: [constant.GOOGLESCOPE],
    //   // Repleace with your webClientId generated from Firebase console
    //   webClientId: constant.WEBCLIENT_ID,
    // });
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem ('rememberobj');
      let myArray = JSON.parse (value);
      console.log ('myArray', myArray);
      if (myArray !== null) {
        if (myArray.rememberMe == true) {
          this.setState (
            {
              email: myArray.email,
              password: myArray.password,
              CheckBox: myArray.rememberMe,
            },
            function () {
              console.log ('email', this.state.email);
            }
          );
        }
      }
    } catch (e) {}
  };

  onLogin = () => {
    let email = this.state.email;
    let pass = this.state.password;
    if (email != '' && pass != '') {
      this.onSubmit ();
    }
  };

  //login submit btn
  async onSubmit () {
    const id = DeviceInfo.getUniqueId ();
    const brand = DeviceInfo.getBrand ();
    await this.setState (
      {
        deviceId: id,
        platform: brand,
      },
      function () {
        console.log ('deviceId', this.state.deviceId);
        console.log ('platform', this.state.platform);
      }
    );
    let user = {
      email: this.state.email,
      password: this.state.password,
      deviceId: this.state.deviceId,
      platform: this.state.platform,
    };
    console.log ('user', user);
    let remember = {
      email: this.state.email,
      password: this.state.password,
      rememberMe: this.state.CheckBox,
    };
    console.log ('remember', remember);
    // this.saveDetails ('123', true, remember);
    // this.props.navigation.navigate ('afterLogin');
    let _this = this;
    this.props.LogIn (user).then (function () {
      console.log ('this.props.Login', _this.props.Login);
      if (_this.props.Login.status.code == '200') {
        _this.saveDetails (true, remember);
        _this.props.navigation.navigate ('afterLogin');
      } else {
        Alert.alert ('something went wrong');
      }
    });
  }
  // save Details in storage
  // saveDetails = async (token, data, remember) => {
  //   try {
  //     let items = await AsyncStorage.setItem ('userToken', token);
  //     let rememberobj = JSON.stringify (remember);
  //     await AsyncStorage.setItem ('rememberobj', rememberobj);
  //     if (data == true) {
  //       let isagree = await AsyncStorage.setItem (
  //         'Istermsagree',
  //         JSON.stringify (true)
  //       );
  //     } else {
  //       let isagree = await AsyncStorage.setItem (
  //         'Istermsagree',
  //         JSON.stringify (false)
  //       );
  //     }
  //   } catch (e) {
  //     // save error
  //   }
  // };

  saveDetails = async (data, remember) => {
    try {
      let rememberobj = JSON.stringify (remember);
      await AsyncStorage.setItem ('rememberobj', rememberobj);
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

  //rememberme toggle Change
  toggelCheckBox (value) {
    this.setState ({CheckBox: value}, function () {
      console.log ('CheckBox', this.state.CheckBox);
    });
  }

  psswordSubmit () {}
  onbackClick () {
    this.props.navigation.navigate ('FrontPage');
  }
  // button disable option for validation
  isSubmitEnabled () {
    // Access field values here and validate them
    const email = this.state.email;
    const password = this.state.password;
    let emailerr = this.state.emailError;
    let passerr = this.state.passError;
    if (
      email !== '' &&
      password !== '' &&
      passerr == false &&
      emailerr == false
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

        <TouchableOpacity
          style={styles.loginbackbtn}
          onPress={() => this.onbackClick ()}
        >
          <Icon
            name="chevron-left"
            type="font-awesome"
            color="#fff"
            size={hp ('3%')}
          />
        </TouchableOpacity>
        <View style={styles.loginContainer}>

          {/* or container */}
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <View style={styles.orTextContainer}>
              <Text style={styles.orText}>
                {I18n.t ('login_page.signin_Title')}
              </Text>
            </View>
            <View style={styles.line} />
          </View>
          <View style={styles.TextInputContainer}>

            <Text style={styles.TextInputFont}>

              {I18n.t ('login_page.email_Label')}
            </Text>
            <TextInput
              style={styles.TextInput}
              keyboardType="default"
              returnKeyType="done"
              placeholder={I18n.t ('login_page.email_placeholder')}
              placeholderTextColor={colors.placeholderColor}
              value={this.state.email}
              autoCapitalize="none"
              onChangeText={text => {
                this.setState ({email: text}, function () {
                  console.log ('email', this.state.email);
                });
                let v = validate ('email', text);
                this.setState (
                  {emailError: !v[0], emailErrorMessage: v[1]},
                  function () {}
                );
              }}
            />
          </View>
          {this.state.emailErrorMessage !== '' &&
            this.state.email != '' &&
            this.state.emailError == true
            ? <View>
                <Text style={styles.error}>{this.state.emailErrorMessage}</Text>
              </View>
            : null}
          <View style={styles.TextInputContainer}>

            <Text style={styles.TextInputFont}>

              {I18n.t ('login_page.Password_Label')}
            </Text>
            {/* <View style={styles.textPadding}> */}
            <TextInput
              style={styles.TextInput}
              keyboardType="default"
              returnKeyType="done"
              placeholder={I18n.t ('login_page.Password_Label')}
              placeholderTextColor={colors.placeholderColor}
              returnKeyType="go"
              value={this.state.password}
              // secureTextEntry={this.state.secureText}
              onChangeText={text => {
                this.setState ({password: text}, function () {
                  console.log ('password', this.state.password);
                });
                let v = validate ('password', text);
                this.setState ({passError: !v[0], passrrorMessage: v[1]});
              }}
            />
            {/* {this.state.secureText
              ? <TouchableOpacity onPress={() => this.handleIcon (false)}>
                  <Icon
                    style={styles.icon}
                    underlayColor="rgba(255,255,255,0)"
                    name="eye-with-line"
                    type="entypo"
                    color={colors.black}
                    size={hp ('2.8%')}
                    onPress={() => this.handleIcon (false)}
                  />
                </TouchableOpacity>
              : <TouchableOpacity onPress={() => this.handleIcon (true)}>
                  <Icon
                    style={styles.icon}
                    underlayColor="rgba(255,255,255,0)"
                    name="eyeo"
                    color={colors.black}
                    type="antdesign"
                    size={hp ('2.8%')}
                    onPress={() => this.handleIcon (true)}
                  />
                </TouchableOpacity>} */}

            {/* </View> */}

          </View>
          {this.state.passrrorMessage !== '' &&
            this.state.password !== '' &&
            this.state.passError == true
            ? <View>
                <Text style={styles.error}>{this.state.passrrorMessage}</Text>
              </View>
            : null}
          {/* Remember Me*/}
          <View style={styles.checkBoxContainer}>
            <View>
              <CheckBox
                checked={this.state.CheckBox}
                onPress={() => this.toggelCheckBox (!this.state.CheckBox)}
              />

            </View>
            <View style={styles.checkBoxText}>
              <Text
                style={styles.TextInputFont}
                onPress={() => this.toggelCheckBox (!this.state.CheckBox)}
              >
                {I18n.t ('login_page.remember_Label')}
              </Text>
            </View>
          </View>
          {/* sign-in*/}

          <TouchableOpacity
            style={styles.btnContainer}
            onPress={this.onLogin}
            disabled={!isEnabled}
          >
            <View
              style={!isEnabled ? styles.buttonDisable : styles.buttonEnable}
            >
              <Icon
                name="sign-in"
                type="font-awesome"
                color={colors.white}
                size={hp ('2.5%')}
              />

              <Text style={styles.BtnTextFont}>
                {I18n.t ('login_page.signin_Title')}
              </Text>
            </View>
          </TouchableOpacity>

          {/* SocialorContainer */}
          <View style={styles.SocialorContainer}>
            <View style={styles.line} />
            <View style={styles.orTextContainer}>
              <Text style={styles.orText}>
                {I18n.t ('login_page.sociallogin_title')}
              </Text>
            </View>
            <View style={styles.line} />
          </View>
          {/* facebook login */}
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnContainer}
              // onPress={this.fbLogin}
            >
              <View style={styles.fbbutton}>

                <Icon
                  name="facebook-official"
                  type="font-awesome"
                  color="#fff"
                  size={hp ('2.5%')}
                />

                <Text style={styles.fbBtnTextFont}>
                  {I18n.t ('login_page.Facebook_button')}
                </Text>
              </View>
            </TouchableOpacity>

          </View>

          {/* google login */}
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnContainer}
              // onPress={this._signIn}
            >
              <View style={styles.gmailbutton}>

                <Icon
                  name="google"
                  type="font-awesome"
                  color="#fff"
                  size={hp ('2.5%')}
                />

                <Text style={styles.gmailBtnTextFont}>
                  {I18n.t ('login_page.google_button')}
                </Text>
              </View>
            </TouchableOpacity>

            {/* <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.buttonSocialGoogle, styles.btGooglencolor]}
            >
              <GoogleSigninButton
                style={styles.googleWidth}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={this._signIn}
              />

            </TouchableOpacity> */}

          </View>

        </View>

      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  console.log ('startupdata', state);
  return {
    Login: state.startUp.Login,
    error: state.startUp.error,
    isLoading: state.startUp.loading,
  };
};

const mapDispatchToProps = {
  LogIn,
};
export default connect (mapStateToProps, mapDispatchToProps) (Login);

// facebook social login

// fbLogin = () => {
//   let _this = this;
//   LoginManager.logInWithPermissions ([
//     'public_profile',
//     'email',
//     'user_friends',
//   ]).then (
//     function (result) {
//       if (result.isCancelled) {
//         console.log ('Login cancelled');
//       } else {
//         AccessToken.getCurrentAccessToken ()
//           .then (user => {
//             console.log (user);
//             return user;
//           })
//           .then (user => {
//             responseInfoCallback = (error, result) => {
//               if (error) {
//                 console.log (error);
//               } else {
//                 console.log (result);
//                 const facebookuserInfo = result;
//                 _this.setState (
//                   {facebookUserInfo: facebookuserInfo},
//                   function () {
//                     console.log (
//                       'facebookUserInfo',
//                       _this.state.facebookUserInfo
//                     );
//                   }
//                 );
//               }
//               let facebook_user = {
//                 email: _this.state.facebookUserInfo.email,
//                 name: _this.state.facebookUserInfo.name,
//                 id: _this.state.facebookUserInfo.id,
//                 picture: _this.state.facebookUserInfo.picture.data.url,
//               };

//               _this.getSocialLogin (facebook_user, 'facebook');
//             };

//             infoRequest = new GraphRequest (
//               '/me',
//               {
//                 accessToken: user.accessToken,
//                 parameters: {
//                   fields: {
//                     string: 'email,name,first_name,last_name,picture.type(large),gender,birthday,hometown',
//                   },
//                 },
//               },
//               responseInfoCallback
//             );

//             // Start the graph request.
//             new GraphRequestManager ().addRequest (infoRequest).start ();
//           });
//       }
//     },
//     function (error) {
//       console.log ('Login fail with error: ' + error);
//     }
//   );
// };

// gmail social login
// _signIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices ({
//       showPlayServicesUpdateDialog: true,
//     });
//     const userInfo = await GoogleSignin.signIn ();
//     this.setState (
//       {
//         userInfo: userInfo,
//       },
//       function () {
//         console.log ('userInfo from gmail', this.state.userInfo);
//       }
//     );
//     let gmail_user = {
//       email: this.state.userInfo.user.email,
//       name: this.state.userInfo.user.name,
//       id: this.state.userInfo.user.id,
//       picture: this.state.userInfo.user.photo,
//     };
//     // this.getSocialLogin (gmail_user, 'google');
//   } catch (error) {
//     console.log ('Message', error.message);
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       console.log ('User Cancelled the login flow');
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       console.log ('Signing In');
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       console.log ('Play Services Not Available or Outdated');
//     } else {
//       console.log ('Play Services Not Available or Outdated');
//     }
//   }
// };
