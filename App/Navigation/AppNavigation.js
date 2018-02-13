import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LaunchScreen from '../Containers/LaunchScreen'
import SearchJobsScreen from '../Containers/SearchJobsScreen';
import SearchResumesScreen from '../Containers/SearchResumesScreen';

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  SearchJobsScreen: {
    screen: SearchJobsScreen,
    navigationOptions: () => ({
      title: 'Jobs'
    })
  },
  SearchResumesScreen: {
    screen: SearchResumesScreen,
    navigationOptions: () => ({
      title: 'Resumes'
    })
  }
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;

      let iconName;
      if (routeName === 'SearchJobsScreen') {
        iconName = `ios-briefcase${focused ? '' : '-outline'}`;
      } else if (routeName === 'SearchResumesScreen') {
        iconName = `ios-paper${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    }
  }),
  key: 'SearchJobsScreen',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  headerMode: 'none',
  initialRouteName: 'SearchJobsScreen',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'grey'
  }
})

export default PrimaryNav
