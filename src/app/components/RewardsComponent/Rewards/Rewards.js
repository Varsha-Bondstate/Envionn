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
  TextInput,
  FlatList,
  Image,
  ImageBackground,
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
import {Item, Input, Button, Card} from 'native-base';
import RewardSearchModal from './RewardSearchModal';
import InvitesModal from '@components/InvitesComponent/Invites/Invites';
import RewardsFilterModal from './RewardsFilter/RewardsFilter';
import {
  Get_all_category,
  Get_Rewards,
  Get_Coins,
} from '@redux/Rewards/operations';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import I18n from '@localization/i18n';
import CustomSpinner from '@components/SpinnerComponent/Spinner/Spinner';
import Spinner from 'react-native-spinkit';
// for lodash
import _ from 'lodash';
import moment from 'moment';
const dataItems = {
  list: [
    {
      id: '6801',
      user_id: '91',
      space_type: '1',
      is_mail_send: '0',
      fromDate: '0000-00-00',
      more_list: '0',
      toDate: '0000-00-00',
      address: '49',
      city: 'Pondicherry',
      state: 'Puducherry',
      zip: '605009',
      country: 'India',
      img_url: require ('@assets/images/reward_magasin_logo.png'),
    },
    {
      id: '6802',
      user_id: '91',
      space_type: '1',
      is_mail_send: '0',
      fromDate: '0000-00-00',
      more_list: '0',
      toDate: '0000-00-00',
      address: '49',
      city: 'Pondicherry',
      state: 'Puducherry',
      zip: '605009',
      country: 'India',
      img_url: require ('@assets/images/reward_royalrun_logo.png'),
    },
    {
      id: '6803',
      user_id: '91',
      space_type: '1',
      is_mail_send: '0',
      fromDate: '0000-00-00',
      more_list: '0',
      toDate: '0000-00-00',
      address: '49',
      city: 'Pondicherry',
      state: 'Puducherry',
      zip: '605009',
      country: 'India',
      img_url: require ('@assets/images/reward_loberen_logo.png'),
    },
    {
      id: '6804',
      user_id: '91',
      space_type: '1',
      is_mail_send: '0',
      fromDate: '0000-00-00',
      more_list: '0',
      toDate: '0000-00-00',
      address: '49',
      city: 'Pondicherry',
      state: 'Puducherry',
      zip: '605009',
      country: 'India',
      img_url: require ('@assets/images/rewards_madklubben_logo.png'),
    },
    {
      id: '6805',
      user_id: '91',
      space_type: '1',
      is_mail_send: '0',
      fromDate: '0000-00-00',
      more_list: '0',
      toDate: '0000-00-00',
      address: '49',
      city: 'Pondicherry',
      state: 'Puducherry',
      zip: '605009',
      country: 'India',
      img_url: require ('@assets/images/rewards_palads_logo.png'),
    },
  ],
};

class Rewards extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      modalVisible: false, // modal boolean
      SearchedName: '',
      filterID: '',
      InvitesmodalVisible: false, //modal boolean
      filtermodalVisible: false,
      categories: [],
      categories_arr: [],
      categorylist: [
        {
          id: '1',
          title: I18n.t ('rewards_page.cinema_label'),
        },
        {
          id: '2',
          title: I18n.t ('rewards_page.shopping_label'),
        },
        {
          id: '3',
          title: I18n.t ('rewards_page.events_label'),
        },
        {
          id: '4',
          title: I18n.t ('rewards_page.experiences_label'),
        },
        {
          id: '5',
          title: I18n.t ('rewards_page.restaurant_label'),
        },
      ],
      dataItems: [],
      unusedCoins: '',
      page: 1,
      refreshing: false,
      service: 0, //inifite scroll
      islistLoading: false,
      norecords: false,
    };
    this.retainItems = [];
  }

  componentDidMount () {
    this.get_unusedcoins ();
    this._initial_category ();
    this.get_rewardslist ();
  }
  get_unusedcoins () {
    let _this = this;
    this.props.Get_Coins ().then (function () {
      if (
        _this.props.getallcoins &&
        _this.props.getallcoins.status.code == '200'
      ) {
        let coins = _this.props.getallcoins.records.total_coins;
        _this.setState (
          {
            unusedCoins: coins,
          },
          function () {
            console.log ('unusedCoins', _this.state.unusedCoins);
          }
        );
      }
    });
  }
  get_rewardslist () {
    let _this = this;
    let params = {
      page: _this.state.page,
      search: _this.state.SearchedName,
      category_id: _this.state.filterID,
    };
    _this.setState ({service: 0}, function () {});
    this.props.Get_Rewards (params).then (function () {
      if (
        _this.props.getallRewards &&
        _this.props.getallRewards.status.code == '200' &&
        _this.props.getallRewards.records.length > 0
      ) {
        _this.setState ({service: 1}, function () {});
        let rewards = _this.props.getallRewards.records;
        _.forEach (rewards, function (item, key) {
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
            dataItems: _.flatten (_this.retainItems),
          },
          function () {
            console.log ('dataItems', _this.state.dataItems);
          }
        );
      } else if (
        _this.props.getallRewards &&
        _this.props.getallRewards.status.code == '404'
      ) {
        _this.setState (
          {dataItems: [], norecords: true, refreshing: true},
          function () {}
        );
      }
    });
  }
  _initial_category () {
    let _this = this;
    this.props.Get_all_category ().then (function () {
      if (
        _this.props.getallcategory &&
        _this.props.getallcategory.status.code == '200'
      ) {
        let categories = _this.props.getallcategory.records;
        if (categories.length > 0) {
          _this.setState (
            {
              categories: categories,
            },
            function () {
              _this.process_category_arr (_this.state.categories);
            }
          );
        }
      }
    });
  }

  //match the db filter items with translation
  process_category_arr (data) {
    let _this = this;
    let categories_db = data;
    let categorylist = _this.state.categorylist;
    let arr = _this.state.categories_arr;
    _.forEach (categories_db, function (item1, key1) {
      if (item1 == null && key1 == undefined) {
        return null;
      } else {
        _.forEach (categorylist, function (item2, key2) {
          if (item2 == null && key2 == undefined) {
            return null;
          } else {
            if (item1.id === item2.id) {
              arr.push (item2);
              return arr;
            }
          }
        });
      }
    });

    _this.setState (
      {
        categories_arr: arr,
      },
      function () {}
    );
  }

  onimageclick (data) {
    let venueparams = {rewards_id: data, coins: this.state.unusedCoins};
    this.props.navigation.navigate ('venueside', {venueparams});
  }

  // flat list view

  renderRewardsList = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.onimageclick (item.item.id);
        }}
      >

        <Card style={styles.rewardsListContainer}>
          <View style={styles.imgView}>
            <TouchableOpacity
              onPress={() => {
                this.onimageclick (item.item.id);
              }}
            >
              {item.item.image === 'NO_IMAGE'
                ? <Image
                    source={require ('@assets/images/no-photo-available.png')}
                    style={styles.noimg}
                  />
                : <ImageBackground
                    source={{uri: item.item.image}}
                    style={styles.img}
                  >
                    {item.item.price > this.state.unusedCoins
                      ? <View style={styles.notenoughcoins}>
                          <View style={styles.coinsiconView}>
                            <Icon
                              name="lock"
                              size={hp ('2.5%')}
                              type="material"
                              color={colors.black}
                            />
                          </View>
                          <View style={styles.coinsiconView}>
                            <Text style={styles.closeText}>
                              Not Enough Coins
                            </Text>
                          </View>
                        </View>
                      : null}

                  </ImageBackground>}

            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <View style={{marginBottom: hp ('2%')}}>
            <View style={styles.titleContainer}>
              <Text style={styles.datatitleText}>{item.item.title}</Text>
            </View>
            <View style={styles.iconwithtext}>
              <View style={styles.iconView}>
                <Icon
                  name="gift"
                  size={hp ('4%')}
                  type="font-awesome"
                  color={colors.black}
                />
              </View>
              <View>
                <Text style={styles.dataText}>
                  {item.item.description}
                  {' '}
                  {item.item.expiry_date !== '00-00-0000'
                    ? moment (item.item.expiry_date).format ('DD/MM/YYYY')
                    : null}
                </Text>
              </View>
            </View>
            <View style={styles.iconwithtext}>
              <View style={styles.iconView}>
                <FontAwesome5
                  name="coins"
                  color={colors.yellowColor}
                  size={hp ('3%')}
                />
              </View>
              <Text style={styles.dataText}>
                Pris:{item.item.price}
              </Text>

            </View>
          </View>

        </Card>

      </TouchableOpacity>
    );
  };

  InvitesOpenModal (visible, fieldName) {
    this.setState ({InvitesmodalVisible: visible});
  }
  // edit singup modal open
  openOrCloseinvitesModal (visible, data) {
    this.setState ({InvitesmodalVisible: visible}, function () {});
  }

  RewardsFilterOpenModal (visible, fieldName) {
    this.setState ({filtermodalVisible: visible});
  }
  // rewards filter modal open
  openOrCloseRewardsFilterModal (visible, data) {
    console.log ('visible', visible);
    console.log ('data', data);
    this.setState (
      {filtermodalVisible: visible, filterID: data.filterID, page: 1},
      function () {
        console.log ('filterID', this.state.filterID);
        this.search_api_call ();
      }
    );
  }
  search_api_call () {
    let _this = this;
    let params = {
      page: _this.state.page,
      search: _this.state.SearchedName,
      category_id: _this.state.filterID,
    };
    _this.setState ({service: 0}, function () {});
    this.props.Get_Rewards (params).then (function () {
      if (
        _this.props.getallRewards &&
        _this.props.getallRewards.status.code == '200' &&
        _this.props.getallRewards.records.length > 0
      ) {
        _this.setState ({service: 1}, function () {});
        let rewards = _this.props.getallRewards.records;

        _this.setState (
          {
            dataItems: rewards,
          },
          function () {
            console.log ('dataItems after search', _this.state.dataItems);
          }
        );
      } else {
        _this.setState ({norecords: true, refreshing: false}, function () {});
      }
    });
  }

  _handleLoadMore = () => {
    if (this.state.service === 1) {
      this.setState (
        (prevState, nextProps) => ({
          page: prevState.page + 1,
          islistLoading: true,
        }),
        () => {
          this.get_rewardslist ();
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
        this.get_rewardslist ();
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
          this.props.getallRewards.records &&
          this.props.getallRewards.records.length > 0
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
  render () {
    return (
      <LinearGradient
        colors={['rgba(70,95,70,1)', 'rgba(50,50,50,1)']}
        style={baseStyles.content}
      >

        <View style={styles.rewardscontainer}>

          {/* headerContainer */}
          <View style={styles.headerContainer}>

            <TouchableOpacity />
            <View style={styles.iconTextContainer}>

              <TouchableOpacity>
                <FontAwesome5
                  name="coins"
                  color={colors.yellowColor}
                  size={hp ('3%')}
                />
              </TouchableOpacity>
              <Text style={styles.titleText}>
                Mønter:
                {' '}
                {this.state.unusedCoins != '' && this.state.unusedCoins != 0
                  ? this.state.unusedCoins
                  : 0}
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
                size={hp ('3.5%')}
              />
            </TouchableOpacity>
          </View>
          {/* searchContainer */}
          <View style={styles.mainContent}>
            {/* <TouchableOpacity
            onPress={() => {
              this.rewardSearchOpenModal (true);
            }}
            > */}
            <Card style={styles.cardView}>

              <View style={styles.piniconContainer}>
                <View style={styles.searchIcon}>
                  <Icon
                    name="search"
                    type="font-awesome"
                    color={colors.btncolor}
                    size={hp ('3%')}
                  />
                </View>
                <View style={styles.InputContainer}>
                  <TextInput
                    style={styles.textinput}
                    placeholder="Søg"
                    // onTouchStart={() => {
                    //   this.rewardSearchOpenModal (true);
                    // }}

                    keyboardType="default"
                    returnKeyLabel="done"
                    onChangeText={text => {
                      this.setState (
                        {SearchedName: text, page: 1, filterID: ''},
                        function () {
                          console.log ('SearchedName', this.state.SearchedName);
                          this.search_api_call ();
                          // this.get_rewardslist ();
                        }
                      );
                    }}
                    value={this.state.SearchedName}
                  />
                </View>
              </View>

              <TouchableOpacity
                style={styles.fliterContainer}
                onPress={() => {
                  this.RewardsFilterOpenModal (true);
                }}
              >
                <Icon
                  name="filter"
                  type="font-awesome"
                  color={colors.btncolor}
                />
              </TouchableOpacity>
            </Card>
            {/* </TouchableOpacity> */}
          </View>
          {this.state.dataItems && this.state.dataItems.length > 0
            ? <View style={styles.flatlistContainer}>
                <FlatList
                  // data={dataItems.list}
                  data={this.state.dataItems}
                  extraData={this.state}
                  keyExtractor={(item, index) => index.toString ()}
                  renderItem={this.renderRewardsList}
                  contentContainerStyle={{paddingBottom: 500}}
                  // initialNumToRender={dataItems.list.length}
                  initialNumToRender={this.state.dataItems.length}
                  onEndReachedThreshold={0.5}
                  onEndReached={this._handleLoadMore}
                  ListFooterComponent={this._renderFooter}
                  onRefresh={this._handleRefresh}
                  refreshing={this.state.refreshing}
                  removeClippedSubviews
                />
              </View>
            : <CustomSpinner loading={this.props.isLoading} />}
          {this.state.norecords == true
            ? <Card style={styles.nocardView}>
                <View style={styles.NoContainer}>
                  <Text style={styles.noText}>NO RECORDS FOUND</Text>
                </View>

              </Card>
            : null}

          {this.state.InvitesmodalVisible
            ? <InvitesModal
                openValue={this.state.InvitesmodalVisible}
                closeModal={(visible, data) => {
                  this.openOrCloseinvitesModal (visible, data);
                }}
              />
            : null}

          {this.state.filtermodalVisible
            ? <RewardsFilterModal
                openValue={this.state.filtermodalVisible}
                categories={
                  this.state.categories_arr.length > 0
                    ? this.state.categories_arr
                    : []
                }
                closeModal={(visible, data) => {
                  this.openOrCloseRewardsFilterModal (visible, data);
                }}
              />
            : null}

        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  return {
    getallcategory: state.Rewards.getcategory ? state.Rewards.getcategory : {},
    getallRewards: state.Rewards.getrewards ? state.Rewards.getrewards : {},
    getallcoins: state.Rewards.getcoins ? state.Rewards.getcoins : {},
    error: state.Rewards.error,
    isLoading: state.Rewards.loading,
  };
};
const mapDispatchToProps = {
  Get_all_category,
  Get_Rewards,
  Get_Coins,
};
export default withNavigation (
  connect (mapStateToProps, mapDispatchToProps) (Rewards)
);

// country modal open
// rewardSearchOpenModal (visible) {
//   this.setState ({modalVisible: visible}, function () {
//     console.log ('modalVisible', this.state.modalVisible);
//   });
// }

// modal close get the country values
// openOrCloseModal = (visible, SearchedId, SearchedValue) => {
//   this.setState ({
//     modalVisible: visible,
//     SearchedId: SearchedId,
//     SearchedValue: SearchedValue,
//   });
// };

// renderRewardsList = item => {
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         this.onimageclick ();
//       }}
//     >
//       <Card style={styles.rewardsListContainer}>
//         <View style={styles.imgView}>
//           <TouchableOpacity
//             onPress={() => {
//               this.onimageclick ();
//             }}
//           >
//             <Image source={item.item.img_url} style={styles.img} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.line} />
//         <View>
//           <View style={styles.titleContainer}>
//             <Text style={styles.datatitleText}>Magasin</Text>
//           </View>
//           <View style={styles.iconwithtext}>
//             <View style={styles.iconView}>
//               <Icon
//                 name="gift"
//                 size={hp ('4%')}
//                 type="font-awesome"
//                 color={colors.black}
//               />
//             </View>
//             <View>
//               <Text style={styles.dataText}>
//                 Gavekort á kr. 200,-
//               </Text>
//             </View>
//           </View>
//           <View style={styles.iconwithtext}>
//             <View style={styles.iconView}>
//               <FontAwesome5
//                 name="coins"
//                 color={colors.yellowColor}
//                 size={hp ('3%')}
//               />
//             </View>
//             <Text style={styles.dataText}>
//               Pris: 40
//             </Text>

//           </View>
//         </View>

//       </Card>

//     </TouchableOpacity>
//   );
// };
{
  /* Search modal component */
}
{
  /* {this.state.modalVisible
            ? <RewardSearchModal
                openValue={this.state.modalVisible}
                modelSearchText={this.state.SearchedName}
                closeModal={(visible, SearchedId, SearchedValue) => {
                  this.openOrCloseModal (visible, SearchedId, SearchedValue);
                }}
              />
            : null} */
}
