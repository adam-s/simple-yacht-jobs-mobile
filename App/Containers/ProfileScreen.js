import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthActions, { isAuthenticated } from '../Redux/AuthRedux';
import ProfileView from '../Components/ProfileView';

const propTypes = {
  navigation: PropTypes.object.isRequired,
};

const navigationOptions = {
  title: 'Profile',
};

class Profile extends React.Component {
  render() {
    return (
      <ProfileView {...this.props} />
    );
  }
}


Profile.propTypes = propTypes;
Profile.navigationOptions = navigationOptions;

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(AuthActions.authLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
