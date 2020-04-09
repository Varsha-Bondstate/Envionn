/* jshint ignore:start */

import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';

const styles = StyleSheet.create ({
  venuesidecontainer: {
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
  whiteContainer: {
    margin: hp ('2%'),
    marginBottom: hp ('18%'),
  },
  venueimg: {
    height: hp ('40%'),
    width: wp ('100%'),
  },
  textView: {
    paddingTop: hp ('3%'),
    // paddingLeft: hp ('3%'),
    // paddingRight: hp ('3%'),
  },
  boldText: {
    fontSize: hp ('3.5%'),
    fontFamily: fonts.titleFont,
    color: colors.iconblack,
  },
  titleText: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.titleFont,
    color: colors.iconblack,
  },
  normalText: {
    fontSize: hp ('2%'),
    fontFamily: fonts.text,
    color: colors.iconblack,
    fontStyle: 'italic',
  },
  addressView: {
    marginTop: hp ('2%'),
  },
  leftAlign: {},
  detailsContainer: {marginTop: hp ('2%')},
  btnContainer: {
    marginBottom: hp ('1%'),
    marginTop: hp ('2%'),
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
  buttonDisable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.btncolor,
    borderRadius: 5,
    padding: hp ('1%'),
    paddingLeft: hp ('3%'),
    opacity: 0.8,
  },
  BtnTextFont: {
    paddingLeft: hp ('1.5%'),
    fontSize: hp ('2.5%'),
    color: colors.white,
    fontFamily: fonts.button,
  },
  line: {
    marginTop: hp ('1.5%'),
    borderTopWidth: wp ('0.3%'),
    borderColor: colors.gray,
  },
  label: {
    marginTop: hp ('2%'),
    fontSize: hp ('2.6%'),
    fontFamily: fonts.titleFont,
    color: colors.iconblack,
    fontWeight: 'bold',
  },
  labelText: {
    marginTop: hp ('2%'),
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.iconblack,
  },
  contactTitle: {
    marginTop: hp ('2%'),
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.iconblack,
    fontWeight: 'bold',
  },
  ContactContainer: {
    margin: hp ('1%'),
    flexDirection: 'row',
  },
  contactText: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.iconblack,
    marginRight: hp ('2%'),
    flexDirection: 'row',
  },
  ContactTextContainer: {
    marginLeft: hp ('2%'),
    width: wp ('70%'),
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  webTextContainer: {
    marginLeft: hp ('8%'),
    width: wp ('70%'),
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  phoneText: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.fbColor,
    marginRight: hp ('2%'),
  },
  hyperlinkStyle: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.fbColor,
    marginRight: hp ('2%'),
    textDecorationLine: 'underline',
  },
  htcontainer: {
    margin: hp ('1%'),
  },

  timeText: {
    fontFamily: fonts.text,
    color: colors.black,
    fontSize: hp ('2.5%'),
  },
  dayscontainer: {
    flex: 1,
    flexDirection: 'row',
    margin: hp ('1%'),
  },
  daystext: {
    marginRight: hp ('2%'),
    fontFamily: fonts.text,
    color: colors.black,
    textAlign: 'center',
    fontSize: hp ('2.5%'),
  },
  weektextline: {
    marginTop: hp ('1.5%'),
    borderBottomWidth: wp ('0.4%'),
    borderColor: colors.gray,
    fontFamily: fonts.text,
    color: colors.black,
    flexDirection: 'row',
    fontSize: hp ('2.5%'),
  },
  daysText: {
    marginTop: hp ('1%'),
    marginBottom: hp ('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    paddingLeft: hp ('8%'),
    paddingTop: hp ('1%'),
    paddingBottom: hp ('1%'),
    paddingRight: hp ('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Openinghours: {
    paddingLeft: hp ('1%'),
  },
});

export default styles;
