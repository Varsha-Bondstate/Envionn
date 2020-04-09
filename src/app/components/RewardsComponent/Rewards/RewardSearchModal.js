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
import {Card} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
class RewardSearchModal extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      modalVisible: false, // modal boolean
      searchText: '',
      SearchedValue: '', //particular country name
      SearchedId: 0,
      searchkey: false,
      currency_id: 0,
      storedArray: [],
      search_List: false,
    };
    this._resetvalue = this._resetvalue.bind (this);
  }
  componentDidMount () {
    this.setState ({
      modalVisible: this.props.openValue,
      searchText: this.props.modelSearchText,
    });
  }

  // modal close
  toggleModal (visible) {
    this.setState ({modalVisible: visible, search_List: false}, function () {});
    this.props.closeModal (visible);
  }

  _resetvalue () {
    this.setState ({
      searchText: '',
      search_List: false,
    });
  }
  // get searchlist
  SearchChange (searchedText) {
    this.setState (
      {
        search_List: true,
      },
      function () {}
    );
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
          <View style={styles.popUpContainer}>
            <Card containerStyle={styles.cardstyle}>
              <View>
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => {
                    this.toggleModal (!this.state.modalVisible);
                  }}
                >
                  <Icon name="close" type="antdesign" color={colors.black} />
                </TouchableOpacity>

                {this.state.searchText !== ''
                  ? <View style={styles.resetContainer}>
                      <TouchableOpacity onPress={this._resetvalue}>
                        <Text style={styles.resetText}>Reset</Text>
                      </TouchableOpacity>
                    </View>
                  : null}
              </View>

              <View style={styles.textinputContainer}>
                <TextInput
                  placeholder="search"
                  autoFocus={true}
                  style={styles.searchtext}
                  value={this.state.searchText}
                  onChangeText={text => {
                    this.setState ({searchText: text});
                    this.SearchChange (text);
                  }}
                />
              </View>
            </Card>

          </View>
        </LinearGradient>
      </Modal>
    );
  }
}
export default RewardSearchModal;
