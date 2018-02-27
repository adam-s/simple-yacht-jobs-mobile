import React from 'react';
import PropTypes from 'prop-types';
import { Content, Text, Card } from 'native-base';

import JobList from './JobList';

const propTypes = {
  navigation: PropTypes.object.isRequired
}

class JobSearchView extends React.Component {
  render() {
    const { records, navigation } = this.props;
    return (
      <Content backgroundWhite>
        <JobList records={records} navigation={navigation}/>
      </Content>
    )
  }
}

JobSearchView.propTypes = propTypes;

export default JobSearchView;
