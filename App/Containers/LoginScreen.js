import React from 'react';
import { NavigationActions } from 'react-navigation';

import { View, Text, Button } from 'native-base';

class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation: { dismiss } }) => {
    return {
      headerLeft: (
        <Button onPress={() => dismiss()}>
          <Text>cancel</Text>
        </Button>
      )
    }
  }

  render() {
    return (
      <View>
        <Text>Login screen</Text>
      </View>
    )
  }
}

export default LoginScreen;
