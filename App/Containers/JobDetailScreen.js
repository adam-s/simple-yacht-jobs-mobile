import React from 'react';

import JobDetailView from '../Components/JobDetailView.js';

const navigationOptions = ({ navigation }) => {
  return {
    title: 'Job Detail'
  }
}

class JobDetailScreen extends React.Component {
  render() {
    return (
      <JobDetailView />
    );
  }
}

JobDetailScreen.navigationOptions = navigationOptions;

export default JobDetailScreen;
