/* jshint ignore:start */

import {StyleSheet, Platform} from 'react-native';
import colors from '@lib/color';
// import fonts from '@lib/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create ({
  topnotchContainer:{
    flex: 0,
    backgroundColor: colors.EnvionnTheme,
  },
  bottomnotchContainer:{
    flex: 1,
    //  backgroundColor: 'rgba(50,50,50,1)',
     backgroundColor: colors.EnvionnTheme,
  }
});

export default styles;
