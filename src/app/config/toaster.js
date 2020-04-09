import Toast from 'react-native-root-toast';
import colors from '@lib/color';
const toastparam = {
  duration: Toast.durations.SHORT,
  position: 30,
  shadow: true,
  animation: true,
  hideOnPress: true,
  delay: 0,
  backgroundColor: colors.yellowColor,
  textColor: 'white',
  shadowColor: colors.EnvionnTheme,
};

export default {
  toastparam,
};
