/* jshint ignore:start */

import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';
const {width, height} = Dimensions.get ('window');

const styles = StyleSheet.create ({
  EditContainer: {
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
    marginTop: hp ('4%'),
  },
  optionview: {
    alignItems: 'flex-start',
  },
  imageContainer: {
    margin: hp ('2%'),
    marginBottom: hp ('4%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageeditafter: {
    flexDirection: 'row',
  },
  directionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: wp ('0.3%'),
    margin: hp ('1.5%'),
    paddingBottom: hp ('5%'),
    borderBottomColor: colors.headerBorder,
  },
  boldText: {
    fontSize: hp ('2.8%'),
    color: colors.white,
    fontFamily: fonts.text,
  },
  normalText: {
    fontSize: hp ('2.5%'),
    fontFamily: fonts.boldText,
    color: colors.white,
  },
  popupClose: {
    margin: hp ('2%'),
    marginTop: hp ('5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetText: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.title,
    color: colors.white,
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
  optiontext: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.black,
  },
  btnContainer: {
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
    marginBottom: hp ('2%'),
    marginTop: hp ('3%'),
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
  inputfield: {
    marginLeft: hp ('2%'),
    marginTop: hp ('2%'),
    marginRight: hp ('2%'),
  },
  textinput: {
    alignSelf: 'stretch',
    color: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
    fontSize: hp ('2.5%'),
    height: hp ('10%'),
    fontFamily: fonts.text,
    paddingLeft: hp ('2%'),
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
  error: {
    color: colors.red,
    fontFamily: fonts.text,
    fontSize: hp ('2.5%'),
    paddingLeft: hp ('3%'),
    paddingRight: hp ('3%'),
    paddingTop: hp ('1%'),
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
  picker: {
    marginLeft: hp ('1%'),
    marginRight: hp ('1%'),
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    backgroundColor: colors.gray,
  },
  iconDisable: {
    backgroundColor: colors.gray,
  },
});

export default styles;
