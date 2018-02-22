import React from 'react';
import { View, Text } from 'react-native';

export default class ResumeDetailView extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    return (
      <View>
        <Text>This is id { id } </Text>
      </View>
    )
  }
}
