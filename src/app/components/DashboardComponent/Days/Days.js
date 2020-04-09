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
import {Card} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Days extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {};
  }
  componentDidMount () {}

  render () {
    return (
      <View style={styles.tabContainer}>
        <Card style={styles.cardView}>
          <View style={styles.cardtextContainer}>

            {this.props.bikingdetails.map ((item, key) => {
              console.log ('item', item);
              return (
                <View key={key}>
                  <Text style={styles.titletabviewText}>
                    {item.day_name}
                  </Text>
                  <View style={styles.firstline} />
                  <View style={styles.cyclingiconview}>
                    <View style={styles.cyclingdistview}>
                      <Icon
                        name="directions-bike"
                        type="material"
                        color={colors.iconblack}
                        size={hp ('3%')}
                      />
                      <Text style={styles.cycleText}>
                        {item.w_distance}{' '}Km
                      </Text>
                    </View>
                    <View style={styles.cyclingtimeview}>
                      <Text style={styles.cycletimeText}>
                        {item.w_min}{' '}m:{item.w_sec}{' '}s.
                      </Text>
                      <Icon
                        name="clock"
                        type="feather"
                        color={colors.iconblack}
                        size={hp ('3%')}
                      />
                    </View>

                  </View>

                </View>
              );
            })}
            <View style={styles.firstline} />
            {this.props.racedetails.map ((item, key) => {
              console.log ('item1', item);
              return (
                <View style={styles.cyclingiconview} key={key}>
                  <View style={styles.cyclingdistview}>
                    <TouchableOpacity>
                      <FontAwesome5
                        name="running"
                        color={colors.iconblack}
                        size={hp ('3%')}
                      />
                    </TouchableOpacity>
                    <Text style={styles.cycleText}>
                      {item.w_distance}{' '}Km
                    </Text>
                  </View>
                  <View style={styles.cyclingtimeview}>
                    <Text style={styles.cycletimeText}>
                      {item.w_min}{' '}m:{item.w_sec}{' '}s.
                    </Text>
                    <Icon
                      name="clock"
                      type="feather"
                      color={colors.iconblack}
                      size={hp ('3%')}
                    />
                  </View>

                </View>
              );
            })}
          </View>
        </Card>
      </View>
    );
  }
}
export default Days;
