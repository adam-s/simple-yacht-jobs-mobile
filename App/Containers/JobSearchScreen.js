import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Button, Text } from 'native-base';

import JobSearchView from '../Components/JobSearchView';
import JobSearchFilter from '../Components/JobSearchFilter';
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
    this.props.fetchJobsIndex(this.props.tableState);
  }

  render() {
    const {
      filterIsVisible,
      toggleFilter,
      navigation,
      tableState,
      tempTableState,
      updateTempTableState,
      records,
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <JobSearchView
          navigation={navigation}
          records={records}
          filterIsVisible={filterIsVisible}
          filterPoint={{
            latitude: tableState.latitude,
            longitude: tableState.longitude,
          }}
        />
        <JobSearchFilter
          filterIsVisible={filterIsVisible}
          toggleFilter={toggleFilter}
          navigation={navigation}
          tempTableState={tempTableState}
          updateTempTableState={updateTempTableState}
        />
      </View>
    );
  }
}

const propTypes = {
  navigation: PropTypes.object.isRequired,
  fetchJobsIndex: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  filterIsVisible: PropTypes.bool.isRequired,
  records: PropTypes.array.isRequired,
  tempTableState: PropTypes.shape({
    jobType: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    name: PropTypes.string,
    position: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  tableState: PropTypes.shape({
    jobType: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    name: PropTypes.string,
    position: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  updateTempTableState: PropTypes.func.isRequired,
};

JobSearchScreen.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    records: state.jobs.records,
    metadata: state.jobs.metadata,
    fetching: state.jobs.fetching,
    error: state.jobs.error,
    tableState: state.jobs.tableState,
    tempTableState: state.jobs.tempTableState,
    filterIsVisible: state.jobs.filterIsVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobsIndex: () => dispatch(JobsActions.jobsIndexRequest()),
    updateTempTableState: tempTableState =>
      dispatch(JobsActions.jobsUpdateTempTableState(tempTableState)),
    toggleFilter: () => dispatch(JobsActions.jobsToggleFilter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchScreen);
