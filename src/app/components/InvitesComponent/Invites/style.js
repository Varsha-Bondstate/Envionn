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
  cardContainer: {
    width: width - 40,
    height: height / 2.5,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: hp ('3%'),
  },
  overlay: {
    marginTop: hp ('-42%'),
    elevation: 0,
    shadowOpacity: 0,
  },
  shareIconContainer: {
    flexDirection: 'row',
  },
  titleText: {
    color: colors.black,
    fontSize: hp ('3%'),
    fontFamily: fonts.text,
    paddingLeft: hp ('2%'),
  },
  firstline: {
    marginTop: hp ('2%'),
    borderBottomColor: colors.gray,
    borderBottomWidth: wp ('0.3%'),
    width: wp ('90%'),
  },
  text: {
    color: colors.black,
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    margin: hp ('3%'),
  },
  btnContainer: {
    marginLeft: hp ('1.5%'),
    marginRight: hp ('1.5%'),
    marginBottom: hp ('1%'),
    marginTop: hp ('2%'),
  },
  buttonEnable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.btncolor,
    borderRadius: 5,
    padding: hp ('1.5%'),
    paddingLeft: hp ('3%'),
    marginBottom: hp ('2%'),
  },
  BtnTextFont: {
    paddingLeft: hp ('1.5%'),
    fontSize: hp ('2.5%'),
    color: colors.white,
    fontFamily: fonts.button,
  },
});

export default styles;
