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
    height: height / 1.7,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
    marginTop: hp ('2.5%'),
    marginBottom: hp ('2%'),
  },
  overlay: {
    marginTop: hp ('-20%'),
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
    fontWeight: 'bold',
  },
  firstline: {
    marginTop: hp ('1%'),
    borderBottomColor: colors.gray,
    borderBottomWidth: wp ('0.3%'),
    width: width - 42,
  },
  confirmationTextContainer: {
    marginLeft: hp ('2.5%'),
    marginRight: hp ('2.5%'),
    marginBottom: hp ('1.5%'),
    marginTop: hp ('2.5%'),
    borderColor: colors.redeemborder,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.redeemconfirmbg,
  },
  text: {
    color: colors.redeemconfirmtext,
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    margin: hp ('2%'),
  },
  secondline: {
    marginTop: hp ('1%'),
    borderBottomColor: colors.redeemborder,
    borderBottomWidth: wp ('0.5%'),
    width: width - 95,
    marginLeft: hp ('1%'),
    marginRight: hp ('1%'),
  },
  btnContainer: {
    marginLeft: hp ('1.5%'),
    marginRight: hp ('1.5%'),
    marginBottom: hp ('1%'),
    marginTop: hp ('2%'),
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  undobtn: {
    backgroundColor: colors.undoclr,
    borderRadius: 5,
    borderColor: colors.undoclr,
    borderWidth: 1,
    padding: hp ('1.2%'),
    marginRight: hp ('1.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: hp ('1.8%'),
  },
  continuebtn: {
    backgroundColor: colors.btncolor,
    borderRadius: 5,
    borderColor: colors.btncolor,
    borderWidth: 1,
    padding: hp ('1.5%'),
    paddingRight: hp ('1.8%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonEnable: {
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
  iconStyle: {
    marginLeft: hp ('1%'),
    marginTop: hp ('1%'),
  },
});

export default styles;
