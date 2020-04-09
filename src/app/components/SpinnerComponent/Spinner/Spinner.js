/**
* Sample React Native App
* https: //github.com/facebook/react-native
*
* @format
* @flow
*/
/* jshint ignore:start */
import React, {PureComponent} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
  Modal,
} from 'react-native';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';
import baseStyles from '@lib/base';
import {Icon} from 'react-native-elements';
import I18n from '@localization/i18n';
class Spinner extends PureComponent {
  constructor (props) {
    super (props);
  }
  componentDidMount () {}
  render () {
    return (
      <View style={styles.container}>
        <Modal
          transparent={true}
          animationType={'none'}
          visible={this.props.loading}
          onRequestClose={() => {
            console.log ('close modal');
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              <Image
                source={require ('@assets/images/Spinner.gif')}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}
export default Spinner;
