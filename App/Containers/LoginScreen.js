import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, Button, Icon } from 'native-base';

import LoginForm from '../Components/LoginForm';
import LoginActions from '../Redux/LoginRedux';

class LoginScreen extends React.Component {
  static navigationOptions({ navigation }) {
    const { dismiss, navigate } = navigation;
    return {
      headerLeft: (
        <Button
          title="cancel"
          transparent
          onPress={() => dismiss()}
        >
          <Text>cancel</Text>
        </Button>
      ),
      headerRight: (
        <Button
          title="Create Account"
          iconLeft
          transparent
          onPress={() => navigate('CreateAccountScreen')}
        >
          <Icon name="ios-add" />
          <Text style={{ paddingLeft: 5 }}>Create account</Text>
        </Button>
      ),
    };
  }

  render() {
    return <LoginForm {...this.props} />;
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    errors: state.login.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: credentials => dispatch(LoginActions.loginRequest(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
