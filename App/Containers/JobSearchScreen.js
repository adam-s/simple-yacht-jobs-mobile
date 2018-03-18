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

  constructor(props) {
    super(props);
    this.state = {
      filterIsVisible: false,
    };

    this.toggleFilter = this.toggleFilter.bind(this);
  }

  // A hack to pass instance methods to the static navigationOptions
  componentWillMount() {
    this.props.navigation.setParams({ toggleFilter: this.toggleFilter });
  }

  componentDidMount() {
    this.props.fetchJobsIndex();
  }

  toggleFilter() {
    const { filterIsVisible } = this.state;
    this.setState({ filterIsVisible: !filterIsVisible });
  }

  render() {
    const { filterIsVisible } = this.state;
    return (
      <JobSearchView
        {...this.props}
        filterIsVisible={filterIsVisible}
        toggleFilter={this.toggleFilter}
      />
    );
  }
}

const propTypes = {
  navigation: PropTypes.object.isRequired,
  fetchJobsIndex: PropTypes.func.isRequired,
};

JobSearchScreen.propTypes = propTypes;

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
