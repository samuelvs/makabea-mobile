import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';
// import Slider from '@react-native-community/slider';
import api from '../../services/api';
import { StackActions, NavigationActions } from 'react-navigation';
import TabBar from "@mindinventory/react-native-tab-bar-interaction";
import EmotionalState from '../Shared/EmotionalState'

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <TabBar bgNavBar='#7E8CE6' bgNavBarSelector='#7E8CE6'  >
        <TabBar.Item
          icon={require('~/images/newspaper.png')}
          selectedIcon={require('~/images/newspaper.png')}
          title="Tab1"
        >
          <View>
            {/*Page Content*/}
          </View>
        </TabBar.Item>
        <TabBar.Item
          icon={require('./../../images/plus.png')}
          selectedIcon={require('./../../images/checked.png')}
          title="Tab2"
        >
          <EmotionalState></EmotionalState>
          
        </TabBar.Item>
        <TabBar.Item
          icon={require('~/images/more.png')}
          selectedIcon={require('~/images/more.png')}
          title="Tab3"
        >
          <View>
            {/*Page Content*/}
          </View>
        </TabBar.Item>
      </TabBar>
    );
  }
}