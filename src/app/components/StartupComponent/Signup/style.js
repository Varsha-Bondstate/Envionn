/* jshint ignore:start */

import {StyleSheet, Dimensions} from 'react-native';
import colors from '@lib/color';
import fonts from '@lib/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get ('window');
const styles = StyleSheet.create ({
  signupbackbtn: {
    marginTop: hp ('4%'),
    marginLeft: hp ('2%'),
    alignItems: 'flex-start',
  },
  signupContiner: {
    flex: 1,
    marginTop: hp ('3%'),
  },
  inputcontainer: {
    padding: hp ('3%'),
  },
  textview: {
    fontSize: hp ('3%'),
    color: colors.white,
    fontFamily: fonts.text,
  },
  // textPadding: {
  //   paddingRight: wp ('8%'),
  // },
  textinput: {
    height: hp ('6%'),
    color: colors.white,
    paddingTop: hp ('1%'),
    borderBottomColor: colors.white,
    borderBottomWidth: wp ('0.4%'),
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
  },
  passtextinput: {
    color: colors.white,
    width: wp ('75%'),
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
  },
  textPadding: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.white,
    borderBottomWidth: wp ('0.4%'),
  },
  codeinput: {
    height: hp ('6%'),
    width: wp ('10%'),
    color: colors.white,
    paddingTop: hp ('1%'),
    borderBottomColor: colors.white,
    borderBottomWidth: wp ('0.4%'),
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    marginRight: hp ('8%'),
  },
  phonetextinput: {
    height: hp ('6%'),
    width: wp ('75%'),
    color: colors.white,
    paddingTop: hp ('1%'),
    borderBottomColor: colors.white,
    borderBottomWidth: wp ('0.4%'),
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    marginLeft: hp ('-4.5%'),
  },
  dobtextinput: {
    height: hp ('6%'),
    color: colors.white,
    paddingTop: hp ('1%'),
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
  },
  btnContainer: {
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
    marginBottom: hp ('2%'),
    marginTop: hp ('3%'),
  },
  buttonEnable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.btncolor,
    borderRadius: 5,
    padding: hp ('1%'),
  },
  BtnTextFont: {
    paddingLeft: hp ('1%'),
    fontSize: hp ('2.2%'),
    color: colors.white,
    fontFamily: fonts.button,
  },
  popUpContainer: {
    flex: 1,
    margin: hp ('-2%'),
  },
  cardstyle: {
    borderColor: colors.white,
    borderWidth: 10,
    elevation: 8,
    shadowOffset: {width: wp ('5%'), height: hp ('2%')},
    shadowColor: 'black',
    shadowOpacity: 1,
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetContainer: {
    alignSelf: 'flex-end',
    marginTop: hp ('-3%'),
    marginLeft: hp ('2%'),
  },
  resetText: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.title,
    color: colors.white,
  },
  inputfield: {
    marginLeft: hp ('2%'),
    marginTop: hp ('2%'),
    marginRight: hp ('2%'),
  },
  label: {
    fontSize: hp ('4%'),
    fontFamily: fonts.label,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    margin: hp ('2%'),
  },
  boldText: {
    fontSize: hp ('2.8%'),
    fontFamily: fonts.boldText,
    color: colors.white,
  },
  Dateinput: {
    borderColor: colors.white,
    borderWidth: 1,
    alignSelf: 'stretch',
    paddingTop: hp ('2%'),
    left: hp ('2%'),
    right: hp ('30%'),
    width: width - 50,
  },
  calendarIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    margin: hp ('2%'),
    marginBottom: hp ('4%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  CircleShapeView: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: colors.white,
  },
  imageeditafter: {
    flexDirection: 'row',
  },

  popupClose: {
    margin: hp ('2%'),
    marginTop: hp ('5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sortRadioView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-between',
    marginRight: wp ('5%'),
  },
  radio: {
    flexDirection: 'row',
    paddingTop: hp ('4%'),
    width: hp ('10%'),
  },
  radioBtnStyle: {
    backgroundColor: colors.searchLocation,
    borderRadius: 150 / 2,
    height: hp ('3%'),
    width: hp ('3%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    paddingLeft: wp ('2%'),
    color: colors.white,
  },
  error: {
    color: colors.red,
    fontFamily: fonts.text,
    fontSize: hp ('2.5%'),
    paddingLeft: hp ('3%'),
    paddingRight: hp ('3%'),
    paddingTop: hp ('1%'),
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
});

export default styles;
