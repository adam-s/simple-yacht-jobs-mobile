import React from 'react';
import PropTypes from 'prop-types';
import { Button, View, Text } from 'react-native';

// Styles
import styles from './Styles/SearchResumesViewStyle';

class SearchResumesView extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  handlePress = () => {
    this.props.navigation.navigate('ResumeDetailScreen')
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.container}>This is a search resume view</Text>
        <Button
          title={"Go to details"}
          onPress={this.handlePress}
        />
      </View>
    )
  }
}

export default SearchResumesView;
