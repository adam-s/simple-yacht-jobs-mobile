import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchResumesView from '../Components/SearchResumesView'

const propTypes = {
  navigation: PropTypes.object.isRequired
}

const navigationOptions = {
  title: 'Search Resumes'
}

class SearchResumesScreen extends React.Component {
  render() {
    return (
      <SearchResumesView {...this.props} />
    );
  }
}

SearchResumesScreen.navigationOptions = navigationOptions;
SearchResumesScreen.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(SearchResumesScreen);
