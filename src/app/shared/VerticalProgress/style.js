import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';
const {width, height} = Dimensions.get ('window');
const styles = StyleSheet.create ({
    container: {
     paddingTop: 0,
     marginTop: 0,
     backgroundColor: '#333',
     alignItems: 'center',
     width:400,
     alignSelf:"center",
     
  },
  text1: {
     color: '#fff',
     textAlign:'center',
     flex: 1,
    justifyContent: 'flex-end',
    marginTop:-10
     
  },
  text1_bot: {
    marginTop:0
  },
  text2: {
     color: '#fff',
     textAlign:'center',
     fontWeight:"bold",
     marginTop:0,
  },
  text2_bottom_text: {
    marginTop:10
 }
});

export default styles;
