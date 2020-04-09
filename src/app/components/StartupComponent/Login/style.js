/* jshint ignore:start */

import {StyleSheet} from 'react-native';
import colors from '@lib/color';
import fonts from '@lib/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create ({
  loginbackbtn: {
    marginTop: hp ('4%'),
    marginLeft: hp ('2%'),
    alignItems: 'flex-start',
  },
  loginContainer: {
    marginTop: hp ('3%'),
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
  },
  orContainer: {
    marginBottom: hp ('2%'),
    marginTop: hp ('1%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SocialorContainer: {
    marginBottom: hp ('2%'),
    marginTop: hp ('1%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    borderBottomColor: colors.white,
    borderBottomWidth: wp ('0.4%'),
    width: wp ('25%'),
  },
  orTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    color: colors.white,
    fontSize: hp ('2.2%'),
    fontFamily: fonts.titleFont,
    fontWeight: 'bold',
  },
  TextInputContainer: {
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
    marginTop: hp ('2%'),
  },
  TextInputFont: {
    color: colors.white,
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
  },
  TextInput: {
    paddingLeft: hp ('2%'),
    marginTop: hp ('1.5%'),
    height: hp ('5.2%'),
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: colors.white,
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
  },

  checkBoxContainer: {
    flexDirection: 'row',
    marginTop: hp ('4%'),
    marginBottom: hp ('2%'),
    marginLeft: hp ('1%'),
  },
  checkBoxText: {
    justifyContent: 'center',
    paddingLeft: hp ('3%'),
  },
  btnContainer: {
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
    marginBottom: hp ('2%'),
    marginTop: hp ('1%'),
  },
  buttonEnable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.btncolor,
    borderRadius: 5,
    padding: hp ('1%'),
    paddingLeft: hp ('3%'),
  },
  BtnTextFont: {
    paddingLeft: hp ('1.5%'),
    fontSize: hp ('2.2%'),
    color: colors.white,
    fontFamily: fonts.button,
  },
  fbbutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.fbColor,
    borderRadius: 5,
    padding: hp ('1%'),
    paddingLeft: hp ('5%'),
  },
  fbBtnTextFont: {
    paddingLeft: hp ('1%'),
    fontSize: hp ('2.2%'),
    color: colors.white,
    fontFamily: fonts.button,
  },
  gmailbutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gmailcolor,
    borderRadius: 5,
    padding: hp ('1%'),
    paddingLeft: hp ('3%'),
  },
  gmailBtnTextFont: {
    paddingLeft: hp ('1%'),
    fontSize: hp ('2.2%'),
    color: colors.white,
    fontFamily: fonts.button,
  },
  buttonSocial: {
    padding: hp ('1%'),
    borderRadius: 5,
    flexDirection: 'row',
    paddingVertical: hp ('1.8%'),
  },
  btnFbcolor: {
    backgroundColor: colors.fbColor,
  },
  buttonSocialGoogle: {
    padding: hp ('1%'),
    paddingLeft: hp ('3%'),
  },
  googleWidth: {
    width: wp ('93%'),
    height: hp ('8%'),
  },
  btGooglencolor: {
    // backgroundColor: colors.white,
  },
  error: {
    // color: colors.red,
    color: '#ffc107',
    fontFamily: fonts.text,
    fontSize: hp ('2.5%'),
    marginLeft: hp ('2%'),
    marginTop: hp ('1.5%'),
  },
  buttonDisable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
    borderRadius: 5,
    padding: hp ('1%'),
    paddingLeft: hp ('3%'),
    opacity: 0.5,
  },
  textPadding: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.white,
    borderBottomWidth: wp ('0.4%'),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.gray,
  },
  passTextInput: {
    // paddingLeft: hp ('2%'),
    // marginTop: hp ('1.5%'),
    height: hp ('5.2%'),
    // borderWidth: 1,
    // borderRadius: 2,
    backgroundColor: colors.white,
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.white,
    width: wp ('75%'),
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
  },
  icon: {
    marginTop: hp ('2%'),
    backgroundColor: colors.white,
  },
});

export default styles;
