import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LaunchScreen from '../Containers/LaunchScreen';
import JobDetailScreen from '../Containers/JobDetailScreen';
import ResumeDetailScreen from '../Containers/ResumeDetailScreen';
import SearchJobsScreen from '../Containers/SearchJobsScreen';
import SearchResumesScreen from '../Containers/SearchResumesScreen';

import styles from './Styles/NavigationStyles'

const JobsStack = StackNavigator({
  SearchJobsScreen: { screen: SearchJobsScreen },
  JobDetailScreen: { screen: JobDetailScreen }
});

const ResumesStack = StackNavigator({
  SearchResumesScreen: { screen: SearchResumesScreen },
  ResumeDetailScreen: { screen: ResumeDetailScreen }
})

const PrimaryNav = TabNavigator({
  Jobs: {
    screen: JobsStack,
    navigationOptions: () => ({
      title: 'Search Jobs'
    })
  },
  Resumes: {
    screen: ResumesStack,
    navigationOptions: () => ({
      title: 'Search Resumes'
    })
  }
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;

      let iconName;
      if (routeName === 'Jobs') {
        iconName = `ios-briefcase${focused ? '' : '-outline'}`;
      } else if (routeName === 'Resumes') {
        iconName = `ios-paper${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    }
  }),
  key: 'Resumes',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  headerMode: 'none',
  initialRouteName: 'Resumes',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'grey'
  }
})

export default PrimaryNav
