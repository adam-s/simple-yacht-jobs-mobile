import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import JobStackNavigator from './JobStackNavigator';
import ResumeStackNavigator from './ResumeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';

// Move the PrimaryNav into its own file
// Create a stack navigator with logged in and logged out screens

const PrimaryNav = TabNavigator({
  Resumes: {
    screen: ResumeStackNavigator,
    navigationOptions: () => ({
      title: 'Search Resumes',
    }),
  },
  Jobs: {
    screen: JobStackNavigator,
    navigationOptions: () => ({
      title: 'Search Jobs',
    }),
  },
  Profile: {
    screen: ProfileStackNavigator,
    navigationOptions: () => ({
      title: 'Profile',
    }),
  },
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;

      let iconName;
      if (routeName === 'Jobs') {
        iconName = `ios-briefcase${focused ? '' : '-outline'}`;
      } else if (routeName === 'Resumes') {
        iconName = `ios-paper${focused ? '' : '-outline'}`;
      } else if (routeName === 'Profile') {
        iconName = `ios-paper${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  headerMode: 'none',
  initialRouteName: 'Jobs',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'grey',
  },
});

export default PrimaryNav;
