import React from 'react';
import PropTypes from 'prop-types';
import { Content, Button, Text } from 'native-base';

const defaultProps = {};

const propTypes = {
  navigation: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

class ProfileView extends React.Component {
  handleLogin() {
    const { navigation } = this.props;
    navigation.navigate('LoginScreen');
  }

  handleLogout() {
    this.props.logout();
  }

  componentDidUpdate(nextProps) {
    console.log('this props', this.props);
    console.log('asdas', nextProps);
  }

  render() {
    const { navigation, isAuthenticated } = this.props;
    console.log('authenticated', isAuthenticated)
    return (
      <Content backgroundWhite>
        {isAuthenticated
          ? (
            <Button
              style={{ margin: 10, marginTop: 30 }}
              block
              full
              title="Logout"
              onPress={() => this.handleLogout()}
            >
              <Text>Logout</Text>
            </Button>
          ) : (
            <Button
              style={{ margin: 10, marginTop: 30 }}
              block
              full
              title="Login"
              onPress={() => this.handleLogin()}
            >
              <Text>Login</Text>
            </Button>
          )
        }
      </Content>
    );
  }
}

ProfileView.propTypes = propTypes;
ProfileView.defaultProps = defaultProps;

export default ProfileView;
