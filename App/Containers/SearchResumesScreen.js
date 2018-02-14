import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchResumesView from '../Components/SearchResumesView'

class SearchResumesScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  static navigationOptions = {
    title: 'Search Resumes'
  }
  render() {
    return (
      <SearchResumesView {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(SearchResumesScreen);
