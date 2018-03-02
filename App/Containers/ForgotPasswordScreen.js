import React from 'react';
import { NavigationActions } from 'react-navigation';

import { Text, Button } from 'native-base';
import ForgotPasswordForm from '../Components/ForgotPasswordForm';

class ForgotPasswordScreen extends React.Component {
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
    return <ForgotPasswordForm {...this.props} />
  }
}

export default ForgotPasswordScreen;
