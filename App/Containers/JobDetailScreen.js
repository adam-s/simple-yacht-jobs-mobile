import React from 'react';

import JobDetailView from '../Components/JobDetailView.js';

export default class JobDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Job Detail'
    }
  }
  render() {
    return (
      <JobDetailView />
    );
  }
}
