import React from 'react';
import PropTypes from 'prop-types';
import { Content, Text, Card } from 'native-base';

import ResumeList from './ResumeList';

const propTypes = {
  navigation: PropTypes.object.isRequired
}

class ResumeSearchView extends React.Component {
  render() {
    const { records, navigation } = this.props
    return (
      <Content>
        <ResumeList records={records} navigation={navigation}/>
      </Content>
    )
  }
}

ResumeSearchView.propTypes = propTypes;

export default ResumeSearchView;
