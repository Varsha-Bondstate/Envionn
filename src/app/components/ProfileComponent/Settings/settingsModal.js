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
  Picker,
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
import LinearGradient from 'react-native-linear-gradient';
// import I18n from 'i18n-js';

const languages = [
  {label: 'Danish', value: 'da'},
  {label: 'English', value: 'en'},
];
class settingsModal extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      modalVisible: false,
      langauge: '',
      pickerOpacity: 0,
      fieldValue: '',
      opacityOfOtherItems: 1, //THIS IS THE OPACITY OF ALL OTHER ITEMS, WHICH COLLIDES WITH YOUR PICKER.
    };
  }

  componentDidMount () {
    if (this.props.openValue) {
      this.setState (
        {
          modalVisible: this.props.openValue,
          fieldValue: this.props.fieldValue,
        },
        function () {}
      );
    }
  }
  // modal close
  toggleModal (visible) {
    this.setState ({modalVisible: visible}, () => {});
    this.props.closeModal (visible, this.state);
  }

  render () {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
      >
        <LinearGradient
          colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
          style={baseStyles.content}
        >
          <View style={styles.popupClose}>
            <Icon
              name="done"
              type="material"
              color={colors.white}
              size={hp ('3.5%')}
              onPress={() => {
                this.toggleModal (!this.state.modalVisible, this.state);
              }}
            />
            <TouchableOpacity>
              <Text
                style={styles.resetText}
                onPress={() => {
                  this.toggleModal (!this.state.modalVisible);
                }}
              >
                {I18n.t ('signup_page.Cancel_btn')}
              </Text>
            </TouchableOpacity>
          </View>

          {this.state.fieldValue == 'languagemodal'
            ? <View
                style={{
                  borderWidth: wp ('0.4%'),
                  borderColor: colors.white,
                  marginLeft: hp ('3%'),
                  marginRight: hp ('3%'),
                  marginTop: hp ('3%'),
                }}
              >
                <Picker
                  selectedValue={this.state.langauge}
                  style={{
                    height: hp ('8%'),
                    width: wp ('90%'),
                    color: colors.white,
                    alignSelf: 'center',
                  }}
                  onValueChange={(itemValue1, itemIndex) => {
                    this.setState ({langauge: itemValue1}, function () {});
                  }}
                >
                  <Picker.Item label="Select language" value="0" />
                  {languages.map ((v, item) => {
                    return (
                      <Picker.Item label={v.label} value={v.value} key={item} />
                    );
                  })}
                </Picker>
              </View>
            : null}
          {/* </View> */}

        </LinearGradient>
      </Modal>
    );
  }
}
export default settingsModal;
