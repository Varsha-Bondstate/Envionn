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
  dashboardContainer: {
    marginTop: hp ('3%'),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
  },
  shareContainer: {
    marginTop: hp ('1.5%'),
  },
  nameText: {
    color: colors.white,
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    fontWeight: 'bold',
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

  stepsorContainer: {
    marginTop: hp ('5%'),
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
  },
  orText: {
    color: colors.white,
    fontSize: hp ('1.9%'),
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
  piechartContainer: {
    flexDirection: 'row',
    marginTop: hp ('5%'),
    justifyContent: 'space-evenly',
  },
  textvalueContainer: {flexDirection: 'row'},
  highText: {
    color: colors.white,
    fontSize: hp ('4.5%'),
    fontFamily: fonts.text,
  },
  lowText: {
    color: colors.white,
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    marginTop: hp ('2%'),
  },
  pieChart: {marginLeft: hp ('2%')},
  dtContainer: {
    margin: hp ('2%'),
  },
  dticon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DaysContainer: {
    flex: 1,
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
    marginTop: hp ('3%'),
    marginBottom: hp ('5%'),
    width: width - 30,
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
  tabtitletext: {
    paddingLeft: hp ('1%'),
    paddingRight: hp ('1%'),
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
  },
  swipeContainer: {},
  row1: {
    flexDirection: 'row',
    marginTop: hp ('3%'),
    justifyContent: 'space-between',
  },
  column1: {
    width: wp ('55%'),
    paddingLeft: hp ('10%'),
    paddingRight: hp ('5%'),
  },
  column3: {
    width: wp ('65%'),
    paddingLeft: hp ('2%'),
    paddingRight: hp ('2%'),
  },
  column2: {
    height: hp ('60%'),
    width: wp ('55%'),
    paddingLeft: hp ('15%'),
    paddingRight: hp ('5%'),
  },
  kmText: {
    color: colors.btncolor,
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
    fontWeight: 'bold',
  },
  kmtextContainer: {
    marginTop: hp ('1.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rkmtextContainer: {
    marginTop: hp ('1.5%'),
  },

  clockicon: {
    marginLeft: hp ('2%'),
  },
  chartconfig: {
    marginVertical: 8,
  },
  ColumnContainer: {
    marginLeft: hp ('10%'),
    marginRight: hp ('15%'),
    marginTop: hp ('5%'),
  },
  ColumnContainer2: {
    // marginLeft: hp ('1%'),
    // marginRight: hp ('2%'),
    // marginTop: hp ('2%'),
  },
  RowContainer: {
    marginBottom: hp ('5%'),
  },
  gridContainer: {},
  nextlevelText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.white,
    fontSize: hp ('2.2%'),
    fontFamily: fonts.text,
  },
  nextlevelTitle: {
    marginLeft: hp ('10%'),
  },
  nextlevel: {
    marginLeft: hp ('15%'),
    marginRight: hp ('8%'),
  },
});

export default styles;
