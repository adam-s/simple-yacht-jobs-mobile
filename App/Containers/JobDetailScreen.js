import React from 'react';

import JobDetailView from '../Components/JobDetailView';

const navigationOptions = () => ({ title: 'Job Detail' });

class JobDetailScreen extends React.Component {
  render() {
    return (
      <JobDetailView {...this.props} />
    );
  }
}

JobDetailScreen.navigationOptions = navigationOptions;

export default JobDetailScreen;
