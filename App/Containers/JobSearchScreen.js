import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import JobSearchView from '../Components/JobSearchView';

const propTypes = {
  navigation: PropTypes.object.isRequired
}

const navigationOptions = {
  title: 'Search Jobs'
}

class JobSearchScreen extends React.Component {
  render() {
    return (
      <JobSearchView {...this.props} />
    );
  }
}

JobSearchScreen.propTypes = propTypes;
JobSearchScreen.navigationOptions = navigationOptions;

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(JobSearchScreen);
