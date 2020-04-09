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
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import baseStyles from '@lib/base';
import {Icon} from 'react-native-elements';
import colors from '@lib/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Item, Input, Button, Card, Radio, ActionSheet} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import InvitesModal from '@components/InvitesComponent/Invites/Invites';
import I18n from '@localization/i18n';
import {connect} from 'react-redux';
import {
  Save_Image,
  get_friends_post,
  get_explore_post,
  social_like,
} from '@redux/Social/operations';
import {withNavigation} from 'react-navigation';
import CustomSpinner from '@components/SpinnerComponent/Spinner/Spinner';
import Spinner from 'react-native-spinkit';
// for lodash
import _ from 'lodash';
import Toast from 'react-native-root-toast';
import toaster from '@config/toaster';
const {width, height} = Dimensions.get ('window');
var BUTTONS = ['Take Photo', 'Choose from Gallery', 'Cancel'];
var CANCEL_INDEX = 2;
const box = [
  {
    name: I18n.t ('Social_page.Social_label'),
    value: 'Tab1',
    iconName: 'group',
  },
  {
    name: I18n.t ('Social_page.explore_label'),
    value: 'Tab2',
    iconName: 'globe',
  },
];
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
];
const dataItems = {
  list: [
    {
      id: '6801',
      likescount: 24,
      userName: 'Patrick Kofoed',
      img_url: require ('@assets/images/social_pk1.jpeg'),
      userimage: require ('@assets/images/profile_img.jpg'),
    },
    {
      id: '6802',
      likescount: 12,
      userName: 'Julia Thomsen',
      img_url: require ('@assets/images/social_jt1.jpeg'),
      userimage: require ('@assets/images/profile_img.jpg'),
    },
    {
      id: '6803',
      likescount: 39,
      userName: 'Patrick Kofoed',
      img_url: require ('@assets/images/pk_profile.jpg'),
      userimage: require ('@assets/images/profile_img.jpg'),
    },
    {
      id: '6804',
      likescount: 24,
      userName: ' Patrick Kofoed',
      img_url: require ('@assets/images/social_pk1.jpeg'),
      userimage: require ('@assets/images/profile_img.jpg'),
    },
    {
      id: '6805',
      likescount: 24,
      userName: 'Patrick Kofoed',
      img_url: require ('@assets/images/social_pk1.jpeg'),
      userimage: require ('@assets/images/profile_img.jpg'),
    },
    {
      id: '6806',
      likescount: 24,
      userName: 'Patrick Kofoed',
      img_url: require ('@assets/images/social_pk1.jpeg'),
      userimage: require ('@assets/images/profile_img.jpg'),
    },
    {
      id: '6807',
      likescount: 24,
      userName: 'Patrick Kofoed',
      img_url: require ('@assets/images/social_pk1.jpeg'),
      userimage: require ('@assets/images/profile_img.jpg'),
    },
    {
      id: '6808',
      likescount: 24,
      userName: 'Patrick Kofoed',
      img_url: require ('@assets/images/social_pk1.jpeg'),
      userimage: require ('@assets/images/profile_img.jpg'),
    },
    {
      id: '6809',
      likescount: 24,
      userName: 'Patrick Kofoed',
      img_url: require ('@assets/images/social_pk1.jpeg'),
      userimage: require ('@assets/images/profile_img.jpg'),
    },
    {
      id: '6810',
      likescount: 24,
      userName: 'Patrick Kofoed',
      img_url: require ('@assets/images/social_pk1.jpeg'),
      userimage: require ('@assets/images/profile_img.jpg'),
    },
  ],
};
const numColumns = 2;
class Social extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      defaultFilter: 'Tab1',
      filterViewItem: I18n.t ('Social_page.Social_label'),
      imagearr: [],
      images_arr: [],
      clicked: ' ',
      imageloading: false,
      imagepath: '',
      InvitesmodalVisible: false, //modal boolean
      image: '',
      ext: '',
      friendsPost: {},
      explorerPost: {},
      page: 1,
      refreshing: false,
      service: 0, //inifite scroll
      islistLoading: false,
      norecords: false,
      liked: false,
      arr_local: [],
      refresh: false,
    };
    this.retainItems = [];
  }

  componentDidMount () {
    this.get_friends_list ();
    this.get_explorer_list ();
  }
  get_friends_list () {
    let _this = this;
    let params = {page: _this.state.page};
    _this.setState ({service: 0}, function () {});
    this.props.get_friends_post (params).then (function () {
      if (
        _this.props.getfriendspost &&
        _this.props.getfriendspost.status.code == '200'
      ) {
        let posts = _this.props.getfriendspost.records;
        _.forEach (posts, function (item, key) {
          if (item == null && item == undefined) {
            return null;
          } else {
            let isPresent = _this.retainItems.some (function (el) {
              return el.id == item.id;
            });
            if (!isPresent) {
              _this.retainItems.push (item);
              return _this.retainItems;
            }
          }
        });
        _this.setState (
          {
            friendsPost: _.flatten (_this.retainItems),
            refreshing: false,
            norecords: false,
          },
          function () {
            // console.log ('friendsPost', _this.state.friendsPost);
            // _this.format_friends_post ();
          }
        );
      } else {
        _this.setState ({norecords: true}, function () {});
      }
    });
  }

  // format_friends_post () {
  //   let arr_db = this.state.friendsPost;
  //   let arr_local = this.state.arr_local;

  //   _.forEach (arr_db, function (item, key) {
  //     if (item == null && item == undefined) {
  //       return null;
  //     } else {
  //       arr_local.push ({
  //         image: item.image,
  //         id: item.id,
  //         likes: item.likes,
  //         poster_id: item.poster_id,
  //         profile_image: item.profile_image,
  //         f_name: item.f_name,
  //         l_name: item.l_name,
  //         liked: item.likes == '0' ? false : true,
  //       });
  //       return arr_local;
  //     }
  //   });

  //   console.log ('arr_local', arr_local);
  //   this.setState (
  //     {
  //       arr_local: arr_local,
  //     },
  //     function () {}
  //   );
  // }

  get_explorer_list () {
    let _this = this;
    // let params = {page: _this.state.page};
    this.props.get_explore_post ().then (function () {
      if (
        _this.props.getexplorerpost &&
        _this.props.getexplorerpost.status.code == '200'
      ) {
        let posts = _this.props.getexplorerpost.records;
        _this.setState (
          {
            explorerPost: posts,
          },
          function () {
            // console.log ('explorerPost', _this.state.explorerPost);
          }
        );
      }
    });
  }

  // today,week,month,total
  selectionONprocess = item => {
    this.setState (
      {defaultFilter: item.value, filterViewItem: item.name},
      function () {}
    );
  };
  // tab1 view
  renderTab1 = () => {
    return (
      <View style={styles.flatlistContainer}>
        {this.state.friendsPost && this.state.friendsPost.length > 0
          ? <FlatList
              // data={dataItems.list}
              data={this.state.friendsPost}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString ()}
              renderItem={this.rendersocialimgList}
              contentContainerStyle={{paddingBottom: 500}}
              initialNumToRender={this.state.friendsPost.length}
              onEndReachedThreshold={0.5}
              onEndReached={this._handleLoadMore}
              ListFooterComponent={this._renderFooter}
              onRefresh={this._handleRefresh}
              refreshing={this.state.refreshing}
              removeClippedSubviews
            />
          : null}
      </View>
    );
  };

  // flat list view
  rendersocialimgList = ({item, index}) => {
    // debugger;
    // console.log (item);
    return (
      <View>
        <Card style={styles.socialimgListContainer}>
          <View style={styles.imgView}>
            <TouchableOpacity>

              <Image source={{uri: item.image}} style={styles.img} />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <View style={styles.likecontainer}>
            {item.like_color == true
              ? <TouchableOpacity>
                  <Icon
                    name="trophy"
                    type="font-awesome"
                    size={hp ('3.5%')}
                    color={colors.yellowColor}
                  />
                </TouchableOpacity>
              : <TouchableOpacity
                  onPress={() => {
                    this.likePost ({item, index});
                  }}
                >
                  <Icon
                    name="trophy"
                    type="font-awesome"
                    size={hp ('3.5%')}
                    color={colors.gray}
                  />
                </TouchableOpacity>}

            <Text style={styles.likescount}>
              {item.likes}
            </Text>
            <View style={styles.verticalline} />
            {item.profile_image == 'NO_USER'
              ? <View style={styles.imageContainer}>
                  <Image
                    source={require ('@assets/images/profile_avatar.png')}
                    style={{width: 32, height: 32, borderRadius: 32 / 2}}
                  />
                </View>
              : <View style={styles.imageContainer}>
                  <Image
                    source={{uri: item.profile_image}}
                    style={{width: 32, height: 32, borderRadius: 32 / 2}}
                  />
                </View>}

            <View>
              <Text
                style={styles.userText}
                onPress={() => {
                  this.props.navigation.navigate (
                    'FriendsProfile',
                    item.poster_id
                  );
                }}
              >
                {item.f_name + ' ' + item.l_name}
              </Text>
            </View>
          </View>
        </Card>

      </View>
    );
  };

  _handleLoadMore = () => {
    if (this.state.service === 1) {
      this.setState (
        (prevState, nextProps) => ({
          page: prevState.page + 1,
          islistLoading: true,
        }),
        () => {
          this.get_friends_list ();
        }
      );
    }
  };
  _handleRefresh = () => {
    this.setState (
      {
        page: 1,
        refreshing: true,
      },
      () => {
        this.get_friends_list ();
      }
    );
  };

  _renderFooter = () => {
    return (
      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        {this.state.islistLoading &&
          this.props.getfriendspost.records &&
          this.props.getfriendspost.records.length > 0
          ? <Spinner
              isVisible={this.state.islistLoading}
              size={50}
              type="ThreeBounce"
              color={colors.white}
            />
          : null}
      </View>
    );
  };

  likePost({item, index}) {
    this.savelike ({item, index});
  }
  savelike({item, index}) {
    let _this = this;

    let params = {
      poster_id: item.poster_id,
      social_id: item.id,
    };
    if (item.likes == '0') {
      this.props.social_like (params).then (function () {
        if (
          _this.props.getlikesave &&
          _this.props.getlikesave.status.code == '200'
        ) {
          _this.get_friends_list ();
          Alert.alert ('successfully saved');
        } else {
          Alert.alert ('something went wrong');
        }
      });
    }
  }

  // tab2 view
  renderTab2 = () => {
    return (
      <View
        style={{
          paddingTop: hp ('2%'),
          // marginLeft: hp ('2%'),
          // marginRight: hp ('2%'),
        }}
      >
        <CustomSpinner loading={this.props.isLoading} />
        {this.state.explorerPost.length > 0
          ? <FlatList
              data={this.formatdata (this.state.explorerPost, numColumns)}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString ()}
              numColumns={numColumns}
              renderItem={this.renderitem}
              initialNumToRender={this.state.explorerPost.length}
              ListFooterComponent={() => <View style={{height: 150}} />}
            />
          : <View>
              <Text style={{color: 'white'}}>NO Records Found</Text>
            </View>}

      </View>
    );
  };
  // flat list view
  renderexploreList = item => {
    return (
      <View style={styles.exploreContainer}>
        <TouchableOpacity>
          <Image source={{uri: item.item.image}} style={styles.exploreimg} />
        </TouchableOpacity>

      </View>
    );
  };

  //for choose image
  pickImageHandler = () => {
    ActionSheet.show (
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        title: 'Choose Image Source',
      },
      buttonIndex => {
        this.setState (
          {
            clicked: BUTTONS[buttonIndex],
            imageloading: true,
          },
          function () {
            if (this.state.clicked == 'Take Photo') {
              ImagePicker.openCamera ({
                width: 300,
                height: 400,
                cropping: true,
                multiple: true,
                includeBase64: true,
              }).then (image => {
                let images = [];
                images.push (image);
                let imageUri = images[0].path;
                var lastslashindex = images[0].mime.lastIndexOf ('/');
                var result = images[0].mime.substring (lastslashindex + 1);
                let ext = String (`.${result}`);

                if (imageUri != '' && imageUri != undefined) {
                  let base64_image = `data:${images[0].mime};base64,${images[0].data}`;
                  this.setState (
                    {
                      imagepath: image.path,
                      imageloading: false,
                      ext: ext,
                      image: base64_image,
                    },
                    function () {
                      this.imageUpload ();
                    }
                  );
                }
              });
            } else if (this.state.clicked == 'Choose from Gallery') {
              ImagePicker.openPicker ({
                width: 300,
                height: 400,
                cropping: true,
                multiple: false,
                includeBase64: true,
              }).then (images => {
                let imageUri = images.path;
                var lastslashindex = images.mime.lastIndexOf ('/');
                var result = images.mime.substring (lastslashindex + 1);
                let ext = String (`.${result}`);
                if (imageUri != '' && imageUri != undefined) {
                  let base64_image = `data:${images.mime};base64,${images.data}`;
                  this.setState (
                    {
                      imagepath: images.path,
                      imageloading: false,
                      ext: ext,
                      image: base64_image,
                    },
                    function () {
                      this.imageUpload ();
                    }
                  );
                }
              });
            }
          }
        );
      }
    );
  };

  imageUpload () {
    let _this = this;
    let params = {
      image: _this.state.image,
      ext: _this.state.ext,
    };

    this.props.Save_Image (params).then (function () {
      if (
        _this.props.getsaveimage &&
        _this.props.getsaveimage.status.code == '200'
      ) {
        let toast = Toast.show (
          'Photo Uploaded Successfully ',
          toaster.toastparam
        );
        _this.get_friends_list ();
      } else {
        let toast = Toast.show ('Something Went Wrong', toaster.toastparam);
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

  formatdata = (dataList, numColumns) => {
    const totalRows = Math.floor (dataList.length / numColumns);
    let totalLastRow = dataList.length - totalRows * numColumns;
    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push ({image: 'blank', empty: true});
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
              flex: 1,
              margin: hp ('1%'),
              paddingBottom: hp ('20%'),
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
          flex: 1,
          margin: hp ('1%'),
          height: width / numColumns,
        }}
      >
        <Image source={{uri: item.image}} style={styles.exploreimg} />
      </View>
    );
  };
  render () {
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >
        {/* <ScrollView> */}
        <View style={styles.socialContainer}>
          {/* headerContainer */}
          <View style={styles.headerContainer}>

            <TouchableOpacity onPress={this.pickImageHandler}>
              <Icon
                name="camera"
                type="font-awesome"
                color={colors.white}
                size={hp ('3%')}
              />
            </TouchableOpacity>
            <View style={styles.iconTextContainer}>
              <Icon
                type="font-awesome"
                name="group"
                size={hp ('3%')}
                color={colors.white}
              />
              <Text style={styles.titleText}>
                {I18n.t ('Social_page.Social_label')}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.InvitesOpenModal (true);
              }}
              style={styles.shareContainer}
            >
              <Icon
                name="share-alt"
                type="font-awesome"
                color={colors.white}
                size={hp ('3%')}
              />
            </TouchableOpacity>
          </View>

          {/* tabsContainer */}
          <View style={styles.boxContainer}>
            <View style={[styles.boxContentView, styles.BoxView]}>
              {box.map ((item, key) => {
                return (
                  <TouchableOpacity
                    onPress={() => this.selectionONprocess (item)}
                    key={key}
                    style={[
                      {
                        backgroundColor: this.state.filterViewItem === item.name
                          ? colors.btncolor
                          : 'transparent',
                      },
                      styles.tabtitle,
                    ]}
                  >
                    <View style={styles.iconwithtext}>
                      <Icon
                        name={item.iconName}
                        type="font-awesome"
                        color={
                          this.state.filterViewItem === item.name
                            ? colors.white
                            : colors.btncolor
                        }
                        size={hp ('2.5%')}
                      />
                      <Text
                        style={[
                          {
                            color: this.state.filterViewItem === item.name
                              ? colors.white
                              : colors.btncolor,
                          },
                          styles.tabtitletext,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </View>

                  </TouchableOpacity>
                );
              })}
            </View>

          </View>

          <ScrollView>
            {this.state.defaultFilter == 'Tab1' ? this.renderTab1 () : null}
            {this.state.defaultFilter == 'Tab2' ? this.renderTab2 () : null}

          </ScrollView>

        </View>

        {this.state.InvitesmodalVisible
          ? <InvitesModal
              style={{width: width - 10}}
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

// export default Social;
const mapStateToProps = state => {
  return {
    getsaveimage: state.Social.saveimg ? state.Social.saveimg : {},
    getfriendspost: state.Social.friendsList ? state.Social.friendsList : {},
    getexplorerpost: state.Social.explorerList ? state.Social.explorerList : {},
    getlikesave: state.Social.savelike ? state.Social.savelike : {},
    error: state.Social.error,
    isLoading: state.Social.loading,
  };
};
const mapDispatchToProps = {
  Save_Image,
  get_friends_post,
  get_explore_post,
  social_like,
};
export default withNavigation (
  connect (mapStateToProps, mapDispatchToProps) (Social)
);
