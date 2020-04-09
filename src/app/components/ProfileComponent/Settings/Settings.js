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
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import InvitesModal from '@components/InvitesComponent/Invites/Invites';
import SettingsModal from './settingsModal';
import RNRestart from 'react-native-restart';
class Settings extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      InvitesmodalVisible: false,
      settingsmodalVisible: false,
      fieldName: '',
      language: '',
    };
  }
  componentDidMount () {}
  onSettings () {
    this.props.navigation.navigate ('profile');
  }
  // logout = async () => {
  //   // this.removeValue ();
  //   const asyncStorageKeys = await AsyncStorage.getAllKeys ();
  //   if (asyncStorageKeys.length > 0) {
  //     console.log ('asyncStorageKeys.length', asyncStorageKeys.length);
  //     AsyncStorage.clear ();
  //   }
  // };
  // logout () {
  //   this.removeValue ();
  // }
  logout = async () => {
    try {
      await AsyncStorage.removeItem ('userToken');
      await AsyncStorage.removeItem ('Istermsagree');
      this.props.navigation.navigate ('AuthLoading');
    } catch (e) {
      // remove error
    }
  };

  InvitesOpenModal (visible, fieldName) {
    this.setState ({InvitesmodalVisible: visible});
  }
  // edit invites modal open
  openOrCloseinvitesModal (visible, data) {
    this.setState ({InvitesmodalVisible: visible}, function () {});
  }

  settingsOpenModal (visible, fieldName) {
    this.setState ({settingsmodalVisible: visible, fieldName: fieldName});
  }
  // edit settings modal open
  openOrClosesettingsModal (visible, data) {
    this.setState (
      {settingsmodalVisible: visible, language: data.langauge},
      function () {
        this.language_change (data);
      }
    );
  }

  language_change (data) {
    console.log ('langdata', data);
    if (data == 'da') {
      // I18n.locale = 'da';
      this.savelang ('da');
    } else if (data == 'en') {
      // I18n.locale = 'en';
      this.savelang ('en');
    } else {
      // I18n.locale = 'da';
      this.savelang ('da');
    }
  }

  // save lang in storage
  savelang = async data => {
    try {
      let items = await AsyncStorage.setItem ('lang', data);
      // RNRestart.Restart ();
    } catch (e) {
      // save error
      console.log ('err', e);
    }
  };

  editProfile = () => {
    this.props.navigation.navigate ('Editprofile');
  };
  render () {
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >

        {/* headerContainer */}
        <View style={styles.headerContainer}>

          <TouchableOpacity onPress={() => this.onSettings ()}>
            <Icon
              name="chevron-left"
              type="font-awesome"
              color="#fff"
              size={hp ('3.5%')}
            />
          </TouchableOpacity>
          <View style={styles.iconTextContainer}>

            <Text style={styles.titleText}>
              {I18n.t ('settings_page.Settings_label')}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.InvitesOpenModal (true);
            }}
          >
            <Icon
              name="share-alt"
              type="font-awesome"
              color={colors.white}
              size={hp ('3.5%')}
            />
          </TouchableOpacity>
        </View>
        {/* whitebgContainer */}
        <ScrollView>
          <View style={styles.settingsContainer}>
            <View style={styles.whiteContainer}>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.generalview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Text style={styles.generaltext}>
                    {I18n.t ('settings_page.general_label')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.memberview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Text style={styles.membertext}>
                    {I18n.t ('settings_page.membership_label')}
                  </Text>
                  <Text style={styles.membervaluetext}>
                    Premium 19 kr. / md. - fornyes d. 21.07.2019
                  </Text>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.optionview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Text style={styles.optiontext}>
                    {I18n.t ('settings_page.usetting_label')}
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={hp ('2%')}
                    type="font-awesome"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.appoptionview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Image
                    style={{
                      width: wp ('10%'),
                      height: hp ('8%'),
                      marginLeft: hp ('2%'),
                    }}
                    source={require ('@assets/images/apple_health_logo.png')}
                  />
                  <Text style={styles.appoptiontext}>
                    {I18n.t ('settings_page.apple_label')}
                  </Text>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.iconappoptionview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >

                  <Icon
                    name="facebook-square"
                    size={hp ('5%')}
                    type="font-awesome"
                    color={colors.fbColor}
                    containerStyle={styles.fbicon}
                  />
                  <Text style={styles.iconappoptiontext}>
                    {I18n.t ('settings_page.fb_label')}
                  </Text>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.appoptionview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Image
                    style={{
                      width: wp ('10%'),
                      height: hp ('8%'),
                      marginLeft: hp ('2%'),
                    }}
                    source={require ('@assets/images/garmin_logo.png')}
                  />
                  <Text style={styles.appoptiontext}>
                    {I18n.t ('settings_page.garmin_label')}
                  </Text>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.optionview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Text style={styles.optiontext}>
                    {I18n.t ('settings_page.about_label')}
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={hp ('2%')}
                    type="font-awesome"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.optionview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Text style={styles.optiontext}>
                    {I18n.t ('settings_page.termscondt_label')}
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={hp ('2%')}
                    type="font-awesome"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.optionview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Text style={styles.optiontext}>
                    {I18n.t ('settings_page.privacy_label')}
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={hp ('2%')}
                    type="font-awesome"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.generalview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Text style={styles.generaltext}>
                    {I18n.t ('settings_page.support_label')}
                  </Text>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.optionview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Text style={styles.optiontext}>
                    {I18n.t ('settings_page.Contact_label')}
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={hp ('2%')}
                    type="font-awesome"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.generalview}
                >
                  <Text style={styles.generaltext}>Feedback </Text>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.optionview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Text style={styles.optiontext}>
                    Dapibus ac facilisis in
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={hp ('2%')}
                    type="font-awesome"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.optionview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Text style={styles.optiontext}>Morbi leo risus </Text>
                  <Icon
                    name="chevron-right"
                    size={hp ('2%')}
                    type="font-awesome"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.optionview}
                  // onPress={() => {
                  //   this.changePassword ();
                  // }}
                >
                  <Text style={styles.optiontext}>
                    Porta ac consectetur ac
                  </Text>
                  <Icon
                    name="chevron-right"
                    size={hp ('2%')}
                    type="font-awesome"
                  />
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.generalview}
                  onPress={() => {
                    this.settingsOpenModal (true, 'languagemodal');
                  }}
                />
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.optionview}
                  onPress={() => {
                    this.settingsOpenModal (true, 'languagemodal');
                  }}
                >
                  <Text style={styles.optiontext}>
                    {I18n.t ('settings_page.lang_label')}
                  </Text>
                  <Icon name="translate" size={hp ('3%')} type="material" />
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.generalview}
                  onPress={() => {
                    this.settingsOpenModal (true, 'languagemodal');
                  }}
                />
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.optionview}
                  onPress={() => {
                    this.editProfile ();
                  }}
                >
                  <Text style={styles.optiontext}>
                    {I18n.t ('settings_page.editprofile_label')}
                  </Text>
                  <Icon
                    name="account-edit"
                    size={hp ('3%')}
                    type="material-community"
                  />
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.generalview}
                  onPress={() => {
                    this.changePassword ();
                  }}
                />
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.optionview}
                  onPress={this.logout}
                >
                  <Text style={styles.optiontext}>
                    {I18n.t ('settings_page.logout_label')}
                  </Text>
                  <Icon
                    name="logout"
                    size={hp ('3%')}
                    type="material-community"
                  />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
        {this.state.InvitesmodalVisible
          ? <InvitesModal
              openValue={this.state.InvitesmodalVisible}
              closeModal={(visible, data) => {
                this.openOrCloseinvitesModal (visible, data);
              }}
            />
          : null}
        {this.state.settingsmodalVisible
          ? <SettingsModal
              openValue={this.state.settingsmodalVisible}
              fieldValue={this.state.fieldName}
              closeModal={(visible, data) => {
                this.openOrClosesettingsModal (visible, data);
              }}
            />
          : null}
      </LinearGradient>
    );
  }
}
export default withNavigation (Settings);
