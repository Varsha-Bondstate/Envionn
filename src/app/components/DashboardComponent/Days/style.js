/* jshint ignore:start */

import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';

const styles = StyleSheet.create ({
  text: {
    color: colors.white,
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    fontWeight: 'bold',
  },

  tabContainer: {
    marginTop: hp ('3%'),
  },
  tabviewText: {
    fontSize: hp ('2%'),
    fontFamily: fonts.text,
    color: colors.black,
  },
  titletabviewText: {
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    color: colors.black,
  },
  cardView: {
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    height: hp ('30%'),
  },
  cardtextContainer: {
    margin: hp ('3%'),
  },
  firstline: {
    marginTop: hp ('3%'),
    borderBottomColor: colors.gray,
    borderBottomWidth: wp ('0.3%'),
    width: wp ('81%'),
  },
  cyclingiconview: {
    marginTop: hp ('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cycleText: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.black,
    paddingLeft: hp ('1%'),
  },
  cyclingdistview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cyclingtimeview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cycletimeText: {
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    color: colors.black,
    paddingRight: hp ('1%'),
  },
  noText: {
    color: colors.white,
    fontSize: hp ('3%'),
    fontFamily: fonts.text,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NocardView: {
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    height: hp ('30%'),
  },
});

export default styles;
