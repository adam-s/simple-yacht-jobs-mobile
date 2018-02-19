import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchResumesView from '../Components/SearchResumesView'
import CrewActions from "../Redux/CrewRedux";

const propTypes = {
  navigation: PropTypes.object.isRequired
}

const navigationOptions = {
  title: 'Search Resumes'
}

class SearchResumesScreen extends React.Component {
  componentDidMount() {
    console.log(this);
    this.props.fetchCrewIndex();
  }

  render() {
    return (
      <SearchResumesView {...this.props} />
    );
  }
}

SearchResumesScreen.navigationOptions = navigationOptions;
SearchResumesScreen.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    records: state.crew.records,
    metadata: state.crew.metadata,
    fetching: state.crew.fetching,
    error: state.crew.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCrewIndex: () => dispatch(CrewActions.crewIndexRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResumesScreen);
