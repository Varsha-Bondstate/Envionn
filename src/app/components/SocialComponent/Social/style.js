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
  socialContainer: {
    margin: hp ('2%'),
    marginTop: hp ('3%'),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconTextContainer: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    paddingLeft: hp ('1%'),
    color: colors.white,
    fontWeight: 'bold',
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
  tabviewText: {
    fontSize: hp ('2%'),
    fontFamily: fonts.text,
    color: colors.white,
  },
  tabtitle: {
    paddingRight: hp ('2%'),
    paddingLeft: hp ('2%'),
    paddingTop: hp ('2%'),
    paddingBottom: hp ('2%'),
    borderRadius: 100,
  },
  tabtitletext: {
    paddingLeft: hp ('1%'),
  },

  iconwithtext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: hp ('4%'),
    marginRight: hp ('4%'),
  },
  flatlistContainer: {
    borderRadius: 5,
    // paddingLeft: hp ('1%'),
    // paddingRight: hp ('1%'),
  },
  socialimgListContainer: {
    marginTop: hp ('3%'),
    width: width - 10,
  },
  imgView: {
    overflow: 'hidden',
    height: hp ('50%'),
  },
  line: {
    borderTopWidth: wp ('0.3%'),
    borderColor: colors.gray,
  },
  img: {
    width: width - 15,
    height: hp ('50%'),
  },
  likecontainer: {
    flexDirection: 'row',
    margin: hp ('2%'),
  },
  likescount: {
    fontFamily: fonts.text,
    fontSize: hp ('2.5%'),
    color: colors.black,
    paddingLeft: hp ('2%'),
  },
  verticalline: {
    borderRightWidth: wp ('0.4%'),
    borderColor: colors.gray,
    paddingLeft: hp ('2%'),
  },
  imageContainer: {
    paddingLeft: hp ('2%'),
  },
  userText: {
    fontSize: hp ('2%'),
    fontFamily: fonts.text,
    color: colors.black,
    paddingLeft: hp ('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp ('1%'),
    textDecorationLine: 'underline',
  },
  explorelist: {
    flexDirection: 'row',
  },
  exploreimg: {
    width: wp ('30%'),
    margin: hp ('3%'),
  },
  tabContainer: {},
  boxContainer: {
    width: width - 30,
  },
});

export default styles;
