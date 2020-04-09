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
// for lodash
import _ from 'lodash';

class RewardsFilter extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      filtermodalVisible: false,
      filterID: '',
      categories_arr: [],
    };
    // this.getfilterID = this.getfilterID.bind (this);
  }
  componentDidMount () {
    if (this.props.openValue && this.props.categories.length > 0) {
      this.setState (
        {
          filtermodalVisible: this.props.openValue,
          categories_arr: this.props.categories,
        },
        function () {}
      );
    }
  }

  // modal close
  toggleModal (visible) {
    console.log (this.state.filtermodalVisible);
    this.setState ({filtermodalVisible: visible}, () => {});
    this.props.closeModal (visible, this.state);
  }

  // componentWillUnmont () {
  //   this.toggleModal (!this.state.filtermodalVisible);
  // }

  getfilterID = id => {
    this.setState ({filterID: id}, function () {
      console.log ('filterID inside filter', this.state.filterID);
      this.toggleModal (!this.state.filtermodalVisible);
    });
  };

  render () {
    return (
      <Overlay
        fullScreen={true}
        isVisible={this.state.filtermodalVisible}
        windowBackgroundColor="rgba(0, 0, 0, 0)"
        overlayBackgroundColor="transparent"
        width={width - wp ('95%')}
        height="auto"
        overlayStyle={styles.overlay}
        onBackdropPress={() =>
          this.toggleModal (!this.state.filtermodalVisible)}
      >

        <Card style={styles.cardContainer}>
          <View style={styles.textContainer}>

            <Text
              style={styles.selecttext}
              onPress={() => {
                this.setState ({filterID: ''}, function () {
                  this.toggleModal (!this.state.filtermodalVisible);
                });
              }}
            >
              {I18n.t ('rewards_page.select_label')}
            </Text>
          </View>
          {this.state.categories_arr && this.state.categories_arr.length > 0
            ? <View>
                {this.state.categories_arr.map ((item, key) => {
                  console.log ('item in act_arr', item);
                  return (
                    <View style={styles.textContainer} key={key}>

                      <TouchableOpacity
                        key={key}
                        onPress={() => this.getfilterID (item.id)}
                      >
                        <Text style={styles.text}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>

                    </View>
                  );
                })}

              </View>
            : null}
        </Card>

      </Overlay>
    );
  }
}
export default RewardsFilter;
