/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
import images from '@lib/image';
import I18n from '@localization/i18n';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
class FrontPage extends PureComponent {
  constructor (props) {
    super (props);

    this.state = {
      email: '',
    };
  }
  componentDidMount () {}

  onCreateprofile = () => {
    console.log (this.props.navigation);
    this.props.navigation.navigate ('SignUp');
  };
  onLogin = () => {
    console.log (this.props.navigation);
    this.props.navigation.navigate ('Login');
  };
  render () {
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={images.logo} />
        </View>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={this.onCreateprofile}
        >
          <View style={styles.buttonEnable}>

            <Icon
              name="user-plus"
              type="font-awesome"
              color={colors.white}
              size={hp ('2.5%')}
            />

            <Text style={styles.BtnTextFont}>
              {I18n.t ('front_page.profile_button')}
            </Text>

          </View>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <View style={styles.orTextContainer}>
            <Text style={styles.orText}>{I18n.t ('front_page.or_text')}</Text>
          </View>
          <View style={styles.line} />
        </View>
        <View>
          <TouchableOpacity style={styles.btnContainer} onPress={this.onLogin}>
            <View style={styles.buttonEnable}>
              <Icon
                name="sign-in"
                type="font-awesome"
                color={colors.white}
                size={hp ('2.5%')}
              />

              <Text style={styles.BtnTextFont}>
                {I18n.t ('front_page.login_button')}
              </Text>
            </View>
          </TouchableOpacity>

        </View>

      </LinearGradient>
    );
  }
}
export default FrontPage;
