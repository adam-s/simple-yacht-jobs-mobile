import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchJobsView from '../Components/SearchJobsView';

const propTypes = {
  navigation: PropTypes.object.isRequired
}

const navigationOptions = {
  title: 'Search Jobs'
}

class SearchJobsScreen extends React.Component {
  render() {
    return (
      <SearchJobsView {...this.props} />
    );
  }
}

SearchJobsScreen.propTypes = propTypes;
SearchJobsScreen.navigationOptions = navigationOptions;

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(SearchJobsScreen);
