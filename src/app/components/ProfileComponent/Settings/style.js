/* jshint ignore:start */

import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';

const styles = StyleSheet.create ({
  settingsContainer: {
    backgroundColor: colors.white,
  },
  headerContainer: {
    marginTop: hp ('1.5%'),
    padding: hp ('1.5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: wp ('0.4%'),
    borderBottomColor: colors.EnvionnTheme,
  },
  iconTextContainer: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    paddingLeft: hp ('1%'),
    color: colors.white,
    fontWeight: 'bold',
  },
  generalview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp ('3%'),
    borderWidth: wp ('0.2%'),
    borderTopWidth: 0,
    borderColor: colors.gray,
    backgroundColor: colors.grayshadeColor1,
  },
  generaltext: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.black,
    fontWeight: 'bold',
  },
  memberview: {
    padding: hp ('3%'),
    borderWidth: wp ('0.4%'),
    borderTopWidth: 0,
    borderColor: colors.borderColor,
  },
  membertext: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.black,
  },
  membervaluetext: {
    fontSize: hp ('2%'),
    color: colors.grayshadeColor2,
    fontFamily: fonts.text,
  },
  appoptionview: {
    flexDirection: 'row',
    padding: hp ('1%'),
    borderWidth: wp ('0.4%'),
    borderTopWidth: 0,
    borderColor: '#E9E9E9',
  },
  appoptiontext: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.black,
    marginTop: hp ('2%'),
    paddingLeft: hp ('1.5%'),
  },
  iconappoptionview: {
    flexDirection: 'row',
    padding: hp ('2%'),
    borderWidth: wp ('0.4%'),
    borderTopWidth: 0,
    borderColor: '#E9E9E9',
  },
  iconappoptiontext: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.black,
    marginTop: hp ('2%'),
    paddingLeft: hp ('2%'),
  },
  fbicon: {
    marginLeft: hp ('2%'),
  },
  optiontext: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.black,
  },
  optionview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp ('3%'),
    borderWidth: wp ('0.4%'),
    borderTopWidth: 0,
    borderColor: '#E9E9E9',
  },
  whiteContainer: {
    marginBottom: hp ('18%'),
  },
  pickerView: {
    marginTop: hp ('3%'),
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
});

export default styles;
