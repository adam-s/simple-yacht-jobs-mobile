import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import JobSearchView from '../Components/JobSearchView';
import JobsActions from '../Redux/JobsRedux';

const propTypes = {
  navigation: PropTypes.object.isRequired,
};

const navigationOptions = {
  title: 'Search Jobs',
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
