import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchJobsView from '../Components/SearchJobsView';

class SearchJobsScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  static navigationOptions = {
    title: 'Search Jobs'
  }
  render() {
    return (
      <SearchJobsView {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(SearchJobsScreen);
