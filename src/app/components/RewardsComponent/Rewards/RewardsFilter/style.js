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
    width: width - wp ('55%'),
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
    // marginTop: hp ('-24%'),
    marginTop: hp ('28%'),
    elevation: 0,
    shadowOpacity: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  textContainer: {
    marginLeft: hp ('5%'),
    marginRight: hp ('5%'),
    marginTop: hp ('2%'),
  },
  text: {
    color: colors.iconblack,
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
  },
  selecttext: {
    color: colors.grayshadeColor2,
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
  },
});

export default styles;
