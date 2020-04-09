/* jshint ignore:start */

// header style
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';

const baseStyles = StyleSheet.create ({
  content: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {},
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonDisable: {
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: hp ('1.8%'),
  },
  buttonEnable: {
    backgroundColor: colors.btncolor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: hp ('1%'),
  },
  buttonFont: {
    fontSize: hp ('2%'),
    color: colors.white,
  },
});

export default baseStyles;
