import React from 'react';
import PropTypes from 'prop-types';
import { Button, View, Text } from 'react-native';

// Styles
import styles from './Styles/SearchJobsViewStyle';

const propTypes = {
  navigation: PropTypes.object.isRequired
}

class SearchJobsView extends React.Component {
  handlePress = () => {
    this.props.navigation.navigate('JobDetailScreen');
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainContainer}>This is a sesarch jobs view</Text>
        <Button
          title={"Go to details"}
          onPress={this.handlePress}
        />
      </View>
    )
  }
}

SearchJobsView.propTypes = propTypes;

export default SearchJobsView;
