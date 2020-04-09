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
  FlatList,
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
import {Icon} from 'react-native-elements';
import I18n from '@localization/i18n';
import LinearGradient from 'react-native-linear-gradient';
import {
  withNavigation,
  HeaderBackButton,
  NavigationEvents,
} from 'react-navigation';
import InvitesModal from '@components/InvitesComponent/Invites/Invites';
import {connect} from 'react-redux';
import {
  get_friends_profile,
  friends_follow,
  friends_Unfollow,
} from '@redux/Social/operations';
import {ActionSheet} from 'native-base';
import Toast from 'react-native-root-toast';
import toaster from '@config/toaster';
const {width, height} = Dimensions.get ('window');
import CustomSpinner from '@components/SpinnerComponent/Spinner/Spinner';
const images = [
  {
    image: 'http://envion.bondstate.com/api_envionn/social_post/2/thumb/5e79afc44a053f2020075916.jpg',
  },
  {
    image: 'http://envion.bondstate.com/api_envionn/social_post/3/thumb/5e79fbead2f90f2020012410.jpeg',
  },
  {
    image: 'http://envion.bondstate.com/api_envionn/social_post/2/thumb/5e79afc44a053f2020075916.jpg',
  },
  {
    image: 'http://envion.bondstate.com/api_envionn/social_post/3/thumb/5e79fbead2f90f2020012410.jpeg',
  },
  {
    image: 'http://envion.bondstate.com/api_envionn/social_post/2/thumb/5e79afc44a053f2020075916.jpg',
  },
  {
    image: 'http://envion.bondstate.com/api_envionn/social_post/3/thumb/5e79fbead2f90f2020012410.jpeg',
  },
  {
    image: 'http://envion.bondstate.com/api_envionn/social_post/2/thumb/5e79afc44a053f2020075916.jpg',
  },
  {
    image: 'http://envion.bondstate.com/api_envionn/social_post/2/thumb/5e79afc44a053f2020075916.jpg',
  },
  {
    image: 'http://envion.bondstate.com/api_envionn/social_post/2/thumb/5e79afc44a053f2020075916.jpg',
  },
  {
    image: 'http://envion.bondstate.com/api_envionn/social_post/2/thumb/5e79afc44a053f2020075916.jpg',
  },
];
const numColumns = 3;

var BUTTONS = ['Unfollow', 'Cancel'];
// var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 1;

// const dataList = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}];
class FriendsProfile extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      profileimage: '',
      profileName: '',
      follow: '',
      InvitesmodalVisible: false, //modal boolean
      profile: {},
      social: {},
      imagesList: [],
      id: 0,
    };
  }
  componentDidMount () {
    let param = this.props.navigation.state.params;
    console.log ('param in fp page', param);
    if (param != '' && param !== undefined) {
      this.getfriendsprofile (param);
    }
  }

  getfriendsprofile (param) {
    let _this = this;
    let params = {f_id: param};
    this.props.get_friends_profile (params).then (function () {
      if (
        _this.props.getfprofile &&
        _this.props.getfprofile.status.code == '200'
      ) {
        let profile = _this.props.getfprofile.records.profile;
        let social = _this.props.getfprofile.records.social;
        _this.setState (
          {
            profile: profile,
            profileimage: profile.image,
            profileName: profile.f_name + ' ' + profile.l_name,
            follow: profile.follow,
            social: social,
            imagesList: social.feeds,
            id: profile.id,
          },
          function () {
            console.log ('profile', _this.state.profile);
            console.log ('social', _this.state.social);
            console.log ('imagesList', _this.state.imagesList);
          }
        );
      }
    });
  }
  InvitesOpenModal (visible, fieldName) {
    this.setState ({InvitesmodalVisible: visible});
  }
  // edit singup modal open
  openOrCloseinvitesModal (visible, data) {
    this.setState ({InvitesmodalVisible: visible}, function () {});
  }

  onback () {
    this.props.navigation.navigate ('social');
  }

  formatdata = (dataList, numColumns) => {
    const totalRows = Math.floor (dataList.length / numColumns);
    let totalLastRow = dataList.length - totalRows * numColumns;
    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push ({key: 'blank', empty: true});
      totalLastRow++;
    }
    return dataList;
  };

  // flat list view
  renderitem = ({item, index}) => {
    if (item.empty) {
      return (
        <View
          style={[
            {
              backgroundColor: colors.white,
              alignItems: 'center',
              justifyContent: 'center',
              height: 100,
              flex: 1,
              margin: hp ('1%'),
              height: width / numColumns,
            },
            {backgroundColor: 'transparent'},
          ]}
        />
      );
    }
    return (
      <View
        style={{
          backgroundColor: colors.white,
          alignItems: 'center',
          justifyContent: 'center',
          height: 100,
          flex: 1,
          margin: hp ('1%'),
          height: width / numColumns,
        }}
      >
        {/* <Text style={{fontSize: hp ('3%')}}>{item.key}</Text> */}
        <Image source={{uri: item.social_image}} style={styles.exploreimg} />
      </View>
    );
  };
  unfollow_callback () {
    let name = this.state.profileName;
    ActionSheet.show (
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        title: name,
      },
      buttonIndex => {
        this.setState ({clicked: BUTTONS[buttonIndex]}, function () {
          if (buttonIndex == 0) {
            this.unfollow_apicall ();
          }
        });
      }
    );
  }
  unfollow_apicall () {
    let _this = this;
    let params = {friend_id: this.state.id};
    this.props.friends_Unfollow (params).then (function () {
      if (
        _this.props.friendsunfollow &&
        _this.props.friendsunfollow.status.code == '200'
      ) {
        _this.setState (
          {
            follow: 0,
          },
          function () {}
        );
        let toast = Toast.show ('UnFollowed Successfully', toaster.toastparam);
      }
    });
  }
  follow_apicall () {
    let _this = this;
    let params = {friend_id: this.state.id};
    this.props.friends_follow (params).then (function () {
      if (
        _this.props.friendsfollow &&
        _this.props.friendsfollow.status.code == '200'
      ) {
        _this.setState (
          {
            follow: 1,
          },
          function () {}
        );
        let toast = Toast.show ('Following Successfully', toaster.toastparam);
      }
    });
  }
  render () {
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >
        <CustomSpinner loading={this.props.isLoading} />
        <ScrollView>
          <View style={styles.profileContainer}>

            {/* headerContainer */}
            <View style={styles.headerContainer}>

              <TouchableOpacity onPress={() => this.onback ()}>
                <Icon
                  name="chevron-left"
                  type="font-awesome"
                  color={colors.white}
                  size={hp ('3.5%')}
                />
              </TouchableOpacity>
              <View style={styles.iconTextContainer}>
                <Icon
                  name="user-circle-o"
                  size={hp ('3%')}
                  type="font-awesome"
                  color={colors.white}
                />
                <Text style={styles.titleText}>
                  {I18n.t ('fprofile_page.profile_label')}
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
            {/* imageContainer */}
            {this.state.profile && this.state.profile !== null
              ? <View style={styles.profileimgContainer}>
                  {this.state.profileimage == '' ||
                    this.state.profileimage == 'NO_USER'
                    ? <Image
                        source={require ('@assets/images/profile_avatar.png')}
                        style={styles.profileImg}
                      />
                    : <Image
                        source={{
                          uri: this.state.profileimage,
                        }}
                        style={styles.profileImg}
                      />}
                  <Text style={styles.nameText}>
                    {this.state.profileName}
                  </Text>
                  {this.state.follow == 1
                    ? <TouchableOpacity
                        style={styles.btnContainer}
                        onPress={() => {
                          this.unfollow_callback ();
                        }}
                      >

                        <View style={styles.followingbtn}>
                          <Text style={styles.FollowingText}>
                            Following
                          </Text>
                          <View style={styles.ficon}>
                            <Icon
                              name="chevron-down"
                              type="font-awesome"
                              color={colors.btncolor}
                              size={hp ('2.5%')}
                            />
                          </View>

                        </View>
                      </TouchableOpacity>
                    : null}
                  {this.state.follow == 0
                    ? <TouchableOpacity
                        style={styles.btnContainer}
                        onPress={() => {
                          this.follow_apicall ();
                        }}
                      >

                        <View style={styles.followbtn}>

                          <Text style={styles.BtnTextFont}>
                            Follow
                          </Text>
                        </View>
                      </TouchableOpacity>
                    : null}

                </View>
              : null}

            {/* feedsorContainer */}
            <View style={styles.feedsorContainer}>
              <View style={styles.feedline} />

              <View style={styles.feedstextContainer}>
                <Icon
                  name="camera"
                  type="font-awesome"
                  color={colors.white}
                  size={hp ('3%')}
                />

                <Text style={styles.orText}>

                  {I18n.t ('profile_page.feed_label')}
                </Text>

              </View>
              <View style={styles.feedline} />
            </View>
            {this.state.imagesList.length > 0
              ? <View
                  style={{
                    flex: 1,
                    paddingTop: hp ('2%'),
                  }}
                >
                  <FlatList
                    data={this.formatdata (this.state.imagesList, numColumns)}
                    renderItem={this.renderitem}
                    keyExtractor={(item, index) => index.toString ()}
                    numColumns={numColumns}
                    extraData={this.state}
                    ListFooterComponent={() => <View style={{height: 100}} />}
                  />
                </View>
              : null}

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
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  return {
    getfprofile: state.Social.getfriendsprofile
      ? state.Social.getfriendsprofile
      : {},
    friendsfollow: state.Social.follow ? state.Social.follow : {},
    friendsunfollow: state.Social.unfollow ? state.Social.unfollow : {},
    error: state.Social.error,
    isLoading: state.Social.loading,
  };
};
const mapDispatchToProps = {
  get_friends_profile,
  friends_follow,
  friends_Unfollow,
};
export default withNavigation (
  connect (mapStateToProps, mapDispatchToProps) (FriendsProfile)
);
