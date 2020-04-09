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
  profileContainer: {
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
    marginTop: hp ('4%'),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  profileimgContainer: {
    marginTop: hp ('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  nameText: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    paddingTop: hp ('2.5%'),
    color: colors.white,
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: colors.white,
    borderBottomWidth: wp ('0.4%'),
    width: wp ('31%'),
  },
  stepsorContainer: {
    marginTop: hp ('7%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  stepstextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
  },
  orText: {
    color: colors.white,
    fontSize: hp ('1.8%'),
    fontFamily: fonts.titleFont,
    fontWeight: 'bold',
    paddingLeft: hp ('1%'),
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
  boxContainer: {
    flex: 1,
    width: width - 30,
  },
  tabContainer: {
    margin: hp ('2%'),
  },
  tabview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabviewText: {
    fontSize: hp ('2%'),
    fontFamily: fonts.text,
    color: colors.white,
  },
  tabtitle: {
    paddingRight: hp ('1.5%'),
    paddingLeft: hp ('1.5%'),
    paddingTop: hp ('2%'),
    paddingBottom: hp ('2%'),
    borderRadius: hp ('100%'),
  },
  tabtitletext: {
    paddingLeft: hp ('1%'),
    paddingRight: hp ('1%'),
  },
  feedsorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  feedstextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
  },
  feedline: {
    borderBottomColor: colors.white,
    borderBottomWidth: wp ('0.4%'),
    width: wp ('35%'),
  },
  nopicsContainer: {
    margin: hp ('2%'),
  },
  tabcontent: {
    margin: hp ('1%'),
  },
});

export default styles;
