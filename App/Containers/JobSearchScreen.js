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
          onPress={params.toggleFilterModal}
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
      filterModalIsVisible: false,
    };

    this.toggleFilterModal = this.toggleFilterModal.bind(this);
  }

  // A hack to pass instance methods to the static navigationOptions
  componentWillMount() {
    this.props.navigation.setParams({ toggleFilterModal: this.toggleFilterModal });
  }

  componentDidMount() {
    this.props.fetchJobsIndex();
  }

  toggleFilterModal() {
    const { filterModalIsVisible } = this.state;
    this.setState({ filterModalIsVisible: !filterModalIsVisible });
  }

  render() {
    const { filterModalIsVisible } = this.state;
    return (
      <JobSearchView {...this.props} filterModalIsVisible={filterModalIsVisible} />
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
