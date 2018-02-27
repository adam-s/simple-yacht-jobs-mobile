import React from 'react';

import JobDetailView from '../Components/JobDetailView.js';
import JobsActions from '../Redux/JobsRedux';

const navigationOptions = ({ navigation }) => {
  return {
    title: 'Job Detail'
  }
}

class JobDetailScreen extends React.Component {
  componentWillMount() {
    const { record } = this.props.navigation.state.params;
  }
  render() {
    return (
      <JobDetailView {...this.props} />
    );
  }
}

JobDetailScreen.navigationOptions = navigationOptions;

export default JobDetailScreen;
