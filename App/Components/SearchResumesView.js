import React from 'react';
import { View, Text } from 'react-native';

// Styles
import styles from './Styles/SearchResumesViewStyle';

export default class SearchResumesView extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.container}>This is a search resume view</Text>
      </View>
    )
  }
}
