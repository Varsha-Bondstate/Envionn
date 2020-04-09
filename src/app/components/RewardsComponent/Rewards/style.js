/* jshint ignore:start */

import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';

const styles = StyleSheet.create ({
  rewardscontainer: {
    flex: 1,
    marginTop: hp ('3%'),
    marginLeft: hp ('2%'),
    marginRight: hp ('2%'),
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
  mainContent: {
    paddingTop: hp ('2%'),
  },
  cardView: {
    height: hp ('6%'),
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  nocardView: {
    height: hp ('6%'),
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  noText: {
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    paddingLeft: hp ('1%'),
    color: colors.black,
    fontWeight: 'bold',
  },
  NoContainer: {
    margin: hp ('1%'),
  },
  piniconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchIcon: {
    padding: hp ('2%'),
    paddingTop: hp ('1%'),
    justifyContent: 'center',
  },
  InputContainer: {paddingLeft: hp ('2%'), width: hp ('40%')},
  textinput: {
    color: colors.placeholderColor,
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
  },
  fliterContainer: {
    justifyContent: 'center',
    padding: hp ('2%'),
    paddingTop: hp ('1%'),
  },
  flatlistContainer: {
    borderRadius: 5,
    // padding: hp ('0.5%'),
  },
  imgView: {
    overflow: 'hidden',
    // height: hp ('35%'),
  },

  dataText: {
    fontFamily: fonts.titleFont,
    fontSize: hp ('2.5%'),
    color: colors.black,
    paddingTop: hp ('2%'),
    flexWrap: 'wrap',
    flexDirection: 'row',
    // marginBottom: hp ('3%'),
    marginRight: hp ('1.5%'),
  },
  datatitleText: {
    fontFamily: fonts.titleFont,
    fontSize: hp ('3%'),
    paddingTop: hp ('2%'),
    fontWeight: 'bold',
  },
  cityText: {
    fontSize: hp ('2%'),
    fontFamily: fonts.text,
    color: colors.black,
  },
  costText: {
    fontSize: hp ('2.5%'),
    fontFamily: fonts.text,
    color: colors.black,
  },
  rewardsListContainer: {
    marginTop: hp ('1.5%'),
    width: wp ('93%'),
    borderRadius: 5,
  },
  line: {
    borderTopWidth: wp ('0.3%'),
    borderColor: colors.gray,
  },
  titleContainer: {
    margin: hp ('2%'),
  },
  iconwithtext: {
    flexDirection: 'row',
    marginLeft: hp ('2%'),
  },
  iconView: {
    paddingTop: hp ('1.5%'),
    paddingRight: wp ('2%'),
  },

  //rewards search modal
  popUpContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: hp ('-2%'),
  },
  cardstyle: {
    margin: hp ('2%'),
    borderColor: colors.white,
    borderWidth: 10,
    elevation: 8,
    shadowOffset: {width: wp ('5%'), height: hp ('2%')},
    shadowColor: 'black',
    shadowOpacity: 1,
  },
  iconContainer: {
    alignSelf: 'flex-start',
    margin: hp ('2%'),
  },
  resetContainer: {
    alignSelf: 'flex-end',
    marginTop: hp ('-5%'),
  },
  resetText: {
    fontSize: hp ('3.5%'),
    fontFamily: fonts.title,
    color: colors.black,
  },
  textinputContainer: {
    marginLeft: hp ('2%'),
    marginTop: hp ('3%'),
    textAlign: 'center',
  },
  searchtext: {
    fontFamily: fonts.title,
    fontSize: hp ('4%'),
  },
  noimg: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp ('95%'),
    height: hp ('40%'),
  },
  img: {
    width: wp ('95%'),
    height: hp ('40%'),
  },
  descriptionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: wp ('50%'),
    paddingBottom: hp ('2%'),
  },
  notenoughcoins: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: wp ('35%'),
    height: wp ('8%'),
    backgroundColor: colors.white,
    margin: hp ('2%'),
  },
  coinsiconView: {
    marginTop: hp ('1%'),
    marginLeft: hp ('1%'),
    // margin: hp ('2%'),
  },
});

export default styles;
