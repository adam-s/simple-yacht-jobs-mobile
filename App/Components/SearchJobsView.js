import React from 'react';
import { View, Text } from 'react-native';

// Styles
import styles from './Styles/SearchJobsViewStyle';

export default class SearchJobsView extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainContainer}>This is a sesarch jobs view</Text>
      </View>
    )
  }
}
