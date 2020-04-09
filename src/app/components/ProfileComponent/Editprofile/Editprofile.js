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
  ImageBackground,
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
import EditprofileModal from './EditprofileModal';
import ImagePicker from 'react-native-image-crop-picker';
import {withNavigation, HeaderBackButton} from 'react-navigation';
import {connect} from 'react-redux';
import {get_user_details, save_user} from '@redux/StartUp/operations';
import {Radio, ActionSheet} from 'native-base';
import {validate} from '@config/validation';
import moment from 'moment';
import Spinner from '@components/SpinnerComponent/Spinner/Spinner';
var BUTTONS = ['Take Photo', 'Choose from Gallery', 'Cancel'];
var CANCEL_INDEX = 2;
const B = props => (
  <Text style={{fontWeight: 'bold', color: colors.red, fontSize: hp ('3%')}}>
    {props.children}
  </Text>
);
class Editprofile extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      dob: '',
      phone: '',
      imagepath: '',
      editprofilemodalVisible: false,
      fieldName: '',
      ext: '',
      image: '',
      fnameError: false,
      lnameError: false,
      phoneError: false,
      language_code: 'en',
    };
  }
  componentDidMount () {
    this.getuserdetails ();
  }
  // edit editprofile modal open
  EditprofileModal (visible, fieldName) {
    this.setState ({editprofilemodalVisible: visible, fieldName: fieldName});
  }

  // for getting user_details
  getuserdetails () {
    let _this = this;
    this.props.get_user_details ().then (function () {
      if (
        _this.props.getuserDetails &&
        _this.props.getuserDetails.status.code == '200'
      ) {
        let userDetails = _this.props.getuserDetails.records.user;
        _this.setState (
          {
            userDetails: _this.props.getuserDetails.records.user,
            firstName: userDetails.f_name,
            lastName: userDetails.l_name,
            email: userDetails.email,
            gender: userDetails.gender,
            phone: userDetails.phone,
            dob: userDetails.dob,
            imagepath: _this.props.getuserDetails.records.image !== 'NO_USER'
              ? _this.props.getuserDetails.records.image
              : '',
          },
          function () {
            console.log ('userDetails', this.state.userDetails);
          }
        );
      }
    });
  }
  // edit editprofile modal open
  openOrCloseModal (visible, data) {
    console.log ('data', data);
    let dob = moment (data.chosenDate).format ('DD/MM/YYYY');
    this.setState (
      {
        editprofilemodalVisible: visible,
        firstName: data.fName !== '' ? data.fName : this.state.firstName,
        lastName: data.lName !== '' ? data.lName : this.state.lastName,
        email: data.email !== '' ? data.email : this.state.email,
        gender: data.gender !== '' ? data.gender : this.state.gender,
        dob: data.chosenDate !== '' ? dob : this.state.dob,
        phone: data.phone !== '' ? data.phone : this.state.phone,
        fnameError: data.fnameError,
        lnameError: data.lnameError,
        phoneError: data.phoneError,
      },
      function () {}
    );
  }

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
                      isedit: true,
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
                    isedit: true,
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
    this.props.navigation.navigate ('settings');
  }

  // button disable option for validation
  isSubmitEnabled () {
    // Access field values here and validate them

    let fname = this.state.firstName;
    let lname = this.state.lastName;
    let phone = this.state.phone;

    if (fname !== '' && lname !== '' && phone !== '') {
      return true;
    } else {
      return false;
    }
  }

  onSubmit = () => {
    let params = {
      f_name: this.state.firstName,
      l_name: this.state.lastName,
      phone: this.state.phone,
      gender: this.state.gender,
      language_code: this.state.language_code,
      dob: this.state.dob,
      ext: this.state.isedit == true ? this.state.ext : '',
      image: this.state.isedit == true ? this.state.image : '',
    };
    console.log ('params', params);
    let _this = this;
    this.props.save_user (params).then (function () {
      if (
        _this.props.user.status.code != '' &&
        _this.props.user.status.code != undefined
      ) {
        if (_this.props.user.status.code == '200') {
          _this.props.navigation.navigate ('profile');
        } else {
        }
      }
    });
  };

  render () {
    const isEnabled = this.isSubmitEnabled ();
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >
        <Spinner loading={this.props.isLoading} />
        <ScrollView style={styles.EditContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.optionview}
            onPress={() => {
              this.onbackClick ();
            }}
          >
            <Icon
              name="chevron-left"
              size={hp ('3%')}
              color={colors.white}
              type="font-awesome"
            />
          </TouchableOpacity>

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

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.EditprofileModal (true, 'firstname');
            }}
          >
            <View style={styles.directionView}>
              <Text style={styles.boldText}>
                First Name <B> * </B>
              </Text>
              {this.state.firstName != ''
                ? <Text style={styles.normalText}>
                    {this.state.firstName}
                  </Text>
                : <Icon
                    name="right"
                    type="antdesign"
                    color={colors.white}
                    size={hp ('3%')}
                    onPress={() => {
                      this.EditprofileModal (true, 'firstname');
                    }}
                  />}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.EditprofileModal (true, 'lastname');
            }}
          >
            <View style={styles.directionView}>
              <Text style={styles.boldText}>
                Last Name<B> * </B>
              </Text>
              {this.state.lastName != ''
                ? <Text style={styles.normalText}>
                    {this.state.lastName}
                  </Text>
                : <Icon
                    name="right"
                    type="antdesign"
                    color={colors.white}
                    size={hp ('3%')}
                    onPress={() => {
                      this.EditprofileModal (true, 'lastname');
                    }}
                  />}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.EditprofileModal (true, 'date');
            }}
          >
            <View style={styles.directionView}>
              <Text style={styles.boldText}>
                Birthday<B> * </B>
              </Text>
              {this.state.dob != ''
                ? <Text style={styles.normalText}>
                    {this.state.dob}
                  </Text>
                : <Icon
                    name="right"
                    type="antdesign"
                    color={colors.white}
                    size={hp ('3%')}
                    onPress={() => {
                      this.EditprofileModal (true, 'date');
                    }}
                  />}
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.directionView}>
              <Text style={styles.boldText}>
                Email<B> * </B>
              </Text>
              <Text style={styles.normalText}>
                {this.state.email}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.EditprofileModal (true, 'gender');
            }}
          >
            <View style={styles.directionView}>
              <Text style={styles.boldText}>
                Gender<B> * </B>
              </Text>
              {this.state.gender != ''
                ? <Text style={styles.normalText}>
                    {this.state.gender}
                  </Text>
                : <Icon
                    name="right"
                    type="antdesign"
                    color={colors.white}
                    size={hp ('3%')}
                    onPress={() => {
                      this.EditprofileModal (true, 'gender');
                    }}
                  />}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.EditprofileModal (true, 'phone');
            }}
          >
            <View style={styles.directionView}>
              <Text style={styles.boldText}>
                Phone number<B> * </B>
              </Text>
              {this.state.phone != ''
                ? <Text style={styles.normalText}>
                    +45
                    {' '}
                    {this.state.phone}
                  </Text>
                : <Icon
                    name="right"
                    type="antdesign"
                    color={colors.white}
                    size={hp ('3%')}
                    onPress={() => {
                      this.EditprofileModal (true, 'phone');
                    }}
                  />}
            </View>
          </TouchableOpacity>

        </ScrollView>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={this.onSubmit}
          disabled={!isEnabled}
        >
          <View
            style={!isEnabled ? styles.buttonDisable : styles.buttonEnable}
            // style={styles.buttonEnable}
          >
            <Icon
              name="user-plus"
              type="font-awesome"
              color="#fff"
              size={hp ('2.5%')}
            />

            <Text style={styles.BtnTextFont}>
              {I18n.t ('editprofile_page.btn_label')}
            </Text>
          </View>
        </TouchableOpacity>
        {this.state.editprofilemodalVisible
          ? <EditprofileModal
              openValue={this.state.editprofilemodalVisible}
              fieldValue={this.state.fieldName}
              editprofileDetails={this.state}
              closeModal={(visible, data) => {
                this.openOrCloseModal (visible, data);
              }}
            />
          : null}
      </LinearGradient>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.startUp.saveuser ? state.startUp.saveuser : '',
    getuserDetails: state.startUp.userDetails ? state.startUp.userDetails : '',
    error: state.startUp.error,
    isLoading: state.startUp.loading,
  };
};
const mapDispatchToProps = {
  get_user_details,
  save_user,
};
export default withNavigation (
  connect (mapStateToProps, mapDispatchToProps) (Editprofile)
);
