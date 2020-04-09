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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
    marginTop: hp ('3%'),
  },
  redeembackbtn: {
    marginTop: hp ('4%'),
    marginLeft: hp ('2%'),
  },
  redeemText: {
    fontSize: hp ('3%'),
    fontFamily: fonts.text,
    color: colors.white,
  },
  codeTextContainer: {
    marginLeft: hp ('2.5%'),
    marginRight: hp ('2.5%'),
    marginBottom: hp ('2.5%'),
    marginTop: hp ('2.5%'),
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    height: height / 5,
  },
  codetext: {
    marginTop: hp ('2%'),
    marginBottom: hp ('2.5%'),
    alignSelf: 'center',
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    color: colors.black,
    alignItems: 'center',
  },
  warningTextContainer: {
    marginLeft: hp ('2.5%'),
    marginRight: hp ('2.5%'),
    marginBottom: hp ('2.5%'),
    marginTop: hp ('2.5%'),
    borderColor: colors.redeemborder,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.redeemborder,
    height: height / 3.2,
  },
  warningIcon: {
    marginLeft: hp ('2.5%'),
    marginRight: hp ('1.5%'),
  },
  warningtext: {
    fontSize: hp ('3%'),
    fontFamily: fonts.text,
    color: colors.redeemconfirmtext,
    alignItems: 'center',
  },
  warningmsg: {
    marginTop: hp ('2.5%'),
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    color: colors.redeemconfirmtext,
    marginLeft: hp ('2.5%'),
    marginRight: hp ('2.5%'),
    marginBottom: hp ('1.5%'),
  },
  firstline: {
    borderBottomColor: colors.gray,
    borderBottomWidth: wp ('0.2%'),
    width: width - 42,
  },
  secondline: {
    borderBottomColor: colors.redeemconfirmtext,
    borderBottomWidth: wp ('0.1%'),
    width: width - 55,
  },
  boxContentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp ('3%'),
  },
  BoxView: {
    borderWidth: wp ('0.4%'),
    borderRadius: 100,
    borderColor: colors.btncolor,
  },
  tabtitle: {
    paddingRight: hp ('1.5%'),
    paddingLeft: hp ('2%'),
    paddingTop: hp ('1.5%'),
    paddingBottom: hp ('1.5%'),
    borderRadius: 100,
  },
});

export default styles;
