import React from 'react';
import { connect } from 'react-redux';

import ResumeDetailView from '../Components/ResumeDetailView';
import CrewActions from '../Redux/CrewRedux';

const navigationOptions = ({ navigation }) => {
  return {
    title: 'Resume Detail'
  }
}

class ResumeDetailScreen extends React.Component {
  componentWillMount() {
    const { record } = this.props.navigation.state.params;
  }
  render() {
    return (
      <ResumeDetailView {...this.props} />
    );
  }
}

ResumeDetailScreen.navigationOptions = navigationOptions;

export default ResumeDetailScreen;
