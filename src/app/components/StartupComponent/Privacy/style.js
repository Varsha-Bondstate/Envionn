/* jshint ignore:start */

import {StyleSheet} from 'react-native';
import colors from '@lib/color';
import fonts from '@lib/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create ({
  backbtn: {
    marginTop: hp ('4%'),
    marginLeft: hp ('2%'),
    alignItems: 'flex-start',
  },
  termsContainer: {
    flex: 1,
    marginTop: hp ('2%'),
    margin: hp ('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  hederText: {
    marginBottom: hp ('2%'),
    color: colors.white,
    fontSize: hp ('3%'),
    fontFamily: fonts.text,
    fontWeight: 'bold',
  },
  normalText: {
    color: colors.white,
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
  },
  footerContainer: {
    marginTop: hp ('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: hp ('3%'),
    marginRight: hp ('3%'),
    marginBottom: hp ('2%'),
    borderWidth: 1,
    borderColor: colors.red,
    padding: hp ('2%'),
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
  hyperText: {
    textDecorationLine: 'underline',
  },
  popupClose: {
    margin: hp ('2%'),
    marginTop: hp ('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetText: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.title,
    color: colors.white,
  },
  privacyNote: {
    marginTop: hp ('3%'),
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
  },
});

export default styles;
