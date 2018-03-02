import React from 'react';
import { NavigationActions } from 'react-navigation';

import { Text, Button } from 'native-base';
import CreateAccountForm from '../Components/CreateAccountForm';

class CreateAccountScreen extends React.Component {
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
    return <CreateAccountForm {...this.props} />
  }
}

export default CreateAccountScreen;
