import React from 'react';

import ResumeDetailView from '../Components/ResumeDetailView';

export default class ResumeDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Resume Detail'
    }
  }
  render() {
    return (
      <ResumeDetailView />
    );
  }
}
