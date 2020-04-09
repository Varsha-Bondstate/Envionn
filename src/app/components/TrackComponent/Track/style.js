/* jshint ignore:start */

import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';

const styles = StyleSheet.create ({
  trackContainer: {
    marginTop: hp ('3%'),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: hp ('20%'),
  },
  textContainer: {
    paddingLeft: hp ('2%'),
  },
  nameText: {
    color: colors.white,
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    fontWeight: 'bold',
  },
  shareContainer: {
    marginTop: hp ('1.5%'),
  },
  stepsorContainer: {
    marginTop: hp ('3%'),
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
  },
  orText: {
    color: colors.white,
    fontSize: hp ('2.2%'),
    fontFamily: fonts.titleFont,
    fontWeight: 'bold',
    paddingLeft: hp ('1%'),
  },
  stepstextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: hp ('4%'),
    marginRight: hp ('2%'),
    width: wp ('25%'),
  },
  firstline: {
    borderBottomColor: colors.white,
    borderBottomWidth: wp ('0.4%'),
    width: wp ('28%'),
  },
  secondline: {
    borderBottomColor: colors.white,
    borderBottomWidth: wp ('0.4%'),
    width: wp ('29%'),
  },
  pickerView: {
    borderWidth: wp ('0.5%'),
    borderColor: colors.btncolor,
    margin: hp ('2%'),
    marginTop: hp ('3%'),
    borderRadius: 5,
  },
  pickerStyle: {
    height: hp ('4%'),
    width: wp ('90%'),
    margin: hp ('1%'),
    color: colors.white,
    alignSelf: 'center',
  },
  distText: {
    color: colors.btncolor,
    fontSize: hp ('8%'),
    fontFamily: fonts.titleFont,
  },
  CountdownContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    flex: 1,
    marginTop: hp ('2%'),
  },
  timeText: {
    color: colors.btncolor,
    fontSize: hp ('5%'),
    fontFamily: fonts.titleFont,
  },
  startbtnText: {
    color: colors.white,
    fontSize: hp ('3%'),
    fontFamily: fonts.titleFont,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    marginTop: hp ('5%'),
  },
  CircleShapeView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: hp ('15%'),
    height: hp ('15%'),
    borderRadius: hp ('15%') / 2,
    backgroundColor: colors.btncolor,
  },
  disableCircleShapeView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: hp ('15%'),
    height: hp ('15%'),
    borderRadius: hp ('15%') / 2,
    backgroundColor: colors.gray,
  },
  quitCircleShapeView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: hp ('15%'),
    height: hp ('15%'),
    borderRadius: hp ('15%') / 2,
    borderWidth: 0.8,
    borderColor: colors.btncolor,
  },
  quitdisableCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: hp ('15%'),
    height: hp ('15%'),
    borderRadius: hp ('15%') / 2,
    borderWidth: 0.8,
    borderColor: colors.btncolor,
    backgroundColor: colors.gray,
  },
  pauseView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: hp ('15%'),
    height: hp ('15%'),
    borderRadius: hp ('15%') / 2,
    borderColor: colors.btncolor,
    borderWidth: hp ('0.2%'),
  },
  pausebtnText: {
    color: colors.btncolor,
    fontSize: hp ('3%'),
    fontFamily: fonts.titleFont,
  },
  cqContainer: {
    flexDirection: 'row',
  },
  qbtnContainer: {
    marginTop: hp ('5%'),
    paddingLeft: hp ('5%'),
  },
  pasueTextContainer: {
    flexDirection: 'row',
    marginTop: hp ('3%'),
  },
  pausetext: {
    color: colors.white,
    fontSize: hp ('2%'),
    fontFamily: fonts.titleFont,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: hp ('1%'),
  },
});

export default styles;
