import React from 'react';
import { NavigationActions } from 'react-navigation';

import { Text, Button } from 'native-base';
import LoginForm from '../Components/LoginForm';

class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation: { dismiss } }) => {
    return {
      headerLeft: (
        <Button transparent onPress={() => dismiss()}>
          <Text>cancel</Text>
        </Button>
      )
    }
  }

  render() {
    return <LoginForm {...this.props} />
  }
}

export default LoginScreen;
