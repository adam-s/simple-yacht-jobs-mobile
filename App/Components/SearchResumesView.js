import React from 'react';
import PropTypes from 'prop-types';
import { Button, View, Text } from 'react-native';

// Styles
import styles from './Styles/SearchResumesViewStyle';

const propTypes = {
  navigation: PropTypes.object.isRequired
}

class SearchResumesView extends React.Component {
  handlePress = () => {
    this.props.navigation.navigate('ResumeDetailScreen')
  }
  render() {
    console.log(this.props);
    const { records } = this.props
    return (
      <View style={styles.mainContainer}>
        <Text>This is a search resume view</Text>
        {records.map((record) => {
          return (
            <View key={record._id}>
              <Text>{record.title}</Text>
            </View>
          );
        })}
      </View>
    )
  }
}

SearchResumesView.propTypes = propTypes;

export default SearchResumesView;
