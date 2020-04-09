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
  Dimensions,
} from 'react-native';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';
import baseStyles from '@lib/base';
import {Icon, Overlay} from 'react-native-elements';
import I18n from '@localization/i18n';
import {Card} from 'native-base';
const {width, height} = Dimensions.get ('window');
class Invites extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {modalVisible: false};
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
      <Overlay
        isVisible={this.state.modalVisible}
        windowBackgroundColor="rgba(0, 0, 0, .5)"
        overlayBackgroundColor="transparent"
        width="auto"
        height="auto"
        overlayStyle={styles.overlay}
      >
        <Card style={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.shareIconContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.InvitesOpenModal (true);
                }}
                style={styles.shareContainer}
              >
                <Icon
                  name="share-alt"
                  type="font-awesome"
                  color="black"
                  size={hp ('3.5%')}
                />
              </TouchableOpacity>
              <Text style={styles.titleText}>Inviter venner</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.toggleModal (!this.state.modalVisible);
              }}
              style={styles.shareContainer}
            >
              <Icon
                name="close"
                type="font-awesome"
                color="gray"
                size={hp ('3.5%')}
              />
            </TouchableOpacity>

          </View>
          <View style={styles.firstline} />
          <Text style={styles.text}>
            Inviter en ven, og modtag en gratis belønning, når personen har oprettet en profil.
            Linket åbner appen "iMessage", hvor du kan sende invitationen.
          </Text>
          <View style={styles.firstline} />
          <View>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={this.onLogin}
            >
              <View style={styles.buttonEnable}>
                <Text style={styles.BtnTextFont}>
                  Del
                </Text>
              </View>
            </TouchableOpacity>

          </View>
        </Card>
      </Overlay>
    );
  }
}
export default Invites;
