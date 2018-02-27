import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ResumeSearchView from '../Components/ResumeSearchView'
import CrewActions from '../Redux/CrewRedux';

const propTypes = {
  navigation: PropTypes.object.isRequired
}

const navigationOptions = {
  title: 'Search Resumes'
}

class ResumeSearchScreen extends React.Component {
  componentDidMount() {
    this.props.fetchCrewIndex();
  }

  render() {
    return (
      <ResumeSearchView {...this.props} />
    );
  }
}

ResumeSearchScreen.navigationOptions = navigationOptions;
ResumeSearchScreen.propTypes = propTypes;

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

export default connect(mapStateToProps, mapDispatchToProps)(ResumeSearchScreen);
