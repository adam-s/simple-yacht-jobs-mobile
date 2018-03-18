import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import JobSearchView from '../Components/JobSearchView';
import JobsActions from '../Redux/JobsRedux';

const propTypes = {
  navigation: PropTypes.object.isRequired,
  fetchJobsIndex: PropTypes.func.isRequired,
};

const navigationOptions = (navigation) => {
  console.log(navigation);
  return {
    headerTitle: 'Search jobs',
  };
};

class JobSearchScreen extends React.Component {
  componentDidMount() {
    this.props.fetchJobsIndex();
  }

  render() {
    return (
      <JobSearchView {...this.props} />
    );
  }
}

JobSearchScreen.propTypes = propTypes;
JobSearchScreen.navigationOptions = navigationOptions;

const mapStateToProps = state => ({
  records: state.jobs.records,
  metadata: state.jobs.metadata,
  fetching: state.jobs.fetching,
  error: state.jobs.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobsIndex: () => {
      return dispatch(JobsActions.jobsIndexRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchScreen);
