import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';

import JobSearchView from '../Components/JobSearchView';
import JobsActions from '../Redux/JobsRedux';

class JobSearchScreen extends React.Component {
  static navigationOptions({ navigation }) {
    const params = navigation.state.params || {};
    return {
      headerTitle: 'Search jobs',
      headerRight: (
        <Button
          transparent
          onPress={params.toggleFilter}
          title="Filter"
        >
          <Text>Filter</Text>
        </Button>
      ),
    };
  }

  // A hack to pass instance methods to the static navigationOptions
  componentWillMount() {
    const { toggleFilter } = this.props;
    this.props.navigation.setParams({ toggleFilter });
  }

  componentDidMount() {
    this.props.fetchJobsIndex();
  }

  render() {
    return (
      <JobSearchView {...this.props} />
    );
  }
}

const propTypes = {
  navigation: PropTypes.object.isRequired,
  fetchJobsIndex: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  filterIsVisible: PropTypes.bool.isRequired,
  tableState: PropTypes.shape({
    jobType: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    name: PropTypes.string,
    position: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  updateTableState: PropTypes.func.isRequired,
};

JobSearchScreen.propTypes = propTypes;

const mapStateToProps = state => ({
  records: state.jobs.records,
  metadata: state.jobs.metadata,
  fetching: state.jobs.fetching,
  error: state.jobs.error,
  tableState: state.jobs.tableState,
  filterIsVisible: state.jobs.filterIsVisible,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobsIndex: () => dispatch(JobsActions.jobsIndexRequest()),
    updateTableState: tableState =>
      dispatch(JobsActions.jobsUpdateTableState(tableState)),
    toggleFilter: () => dispatch(JobsActions.jobsToggleFilter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchScreen);
