import React from 'react';

import ResumeDetailView from '../Components/ResumeDetailView';

const navigationOptions = ({ navigation }) => {
  return {
    title: 'Resume Detail'
  }
}

class ResumeDetailScreen extends React.Component {
  render() {
    return (
      <ResumeDetailView />
    );
  }
}

ResumeDetailScreen.navigationOptions = navigationOptions;

export default ResumeDetailScreen;
