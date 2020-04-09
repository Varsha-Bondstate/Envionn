/* jshint ignore:start */

import {StyleSheet} from 'react-native';
import colors from '@lib/color';
import fonts from '@lib/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create ({
  imageContainer: {
    marginTop: hp ('5%'),
    marginLeft: hp ('1%'),
    marginRight: hp ('1%'),
  },
  image: {
    resizeMode: 'center',
    width: wp ('95%'),
    height: hp ('42%'),
  },
  btnContainer: {
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
    marginBottom: hp ('1%'),
    marginTop: hp ('1%'),
  },
  orContainer: {
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
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
    fontFamily: fonts.text,
  },
  buttonEnable: {
    flexDirection: 'row',
    paddingLeft: hp ('16%'),
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
  buttonEnableLog: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.btncolor,
    borderRadius: 5,
    // paddingLeft: hp ('20%'),
    paddingLeft: hp ('13%'),
    padding: hp ('1%'),
  },
  BtnTextFontLog: {
    paddingLeft: hp ('1.8%'),
    fontSize: hp ('2.2%'),
    color: colors.white,
    fontFamily: fonts.button,
  },
});

export default styles;
