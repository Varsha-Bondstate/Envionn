import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
} from 'react-native';
import Pulse from './Pulse';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './style';
import colors from '@lib/color';
export default class LocationPulseLoader extends React.PureComponent {
  constructor (props) {
    super (props);

    this.state = {
      circles: [],
    };

    this.counter = 1;
    this.setInterval = null;
    this.anim = new Animated.Value (1);
  }

  componentDidMount () {
    this.setCircleInterval ();
  }

  setCircleInterval () {
    this.setInterval = setInterval (
      this.addCircle.bind (this),
      this.props.interval
    );
    this.addCircle ();
  }

  addCircle () {
    this.setState ({circles: [...this.state.circles, this.counter]});
    this.counter++;
  }

  onPressIn () {
    Animated.timing (this.anim, {
      toValue: this.props.pressInValue,
      duration: this.props.pressDuration,
      easing: this.props.pressInEasing,
    }).start (() => clearInterval (this.setInterval));
  }

  onPressOut () {
    Animated.timing (this.anim, {
      toValue: 1,
      duration: this.props.pressDuration,
      easing: this.props.pressOutEasing,
    }).start (this.setCircleInterval.bind (this));
  }

  render () {
    const {size, avatar, avatarBackgroundColor, interval} = this.props;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp ('5%'),
        }}
      >
        {this.state.circles.map (circle => (
          <Pulse key={circle} {...this.props} />
        ))}

        <TouchableOpacity
          activeOpacity={1}
          // onPressIn={this.onPressIn.bind (this)}
          // onPressOut={this.onPressOut.bind (this)}
          style={{
            marginBottom: hp ('20%'),
            transform: [
              {
                scale: this.anim,
              },
            ],
          }}
        >
          <View
            style={{
              width: size,
              height: size,
              marginTop: hp ('5%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={styles.pausebtnText}>
              Pause
            </Text>
          </View>

        </TouchableOpacity>
      </View>
    );
  }
}

LocationPulseLoader.propTypes = {
  interval: PropTypes.number,
  size: PropTypes.number,
  pulseMaxSize: PropTypes.number,
  // avatar: PropTypes.string.isRequired,
  // avatarBackgroundColor: PropTypes.string,
  pressInValue: PropTypes.number,
  pressDuration: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  getStyle: PropTypes.func,
};

LocationPulseLoader.defaultProps = {
  interval: 2000,
  size: 100,
  pulseMaxSize: 250,
  avatar: undefined,
  // avatarBackgroundColor: 'white',
  pressInValue: 0.8,
  pressDuration: 150,
  pressInEasing: Easing.in,
  pressOutEasing: Easing.in,
  borderColor: colors.btncolor,
  backgroundColor: 'rgba(70,95,70,1)',
  getStyle: undefined,
};
