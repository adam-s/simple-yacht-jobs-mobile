import React from 'react';
import PropTypes from 'prop-types';
import { Content, Text, Card } from 'native-base';

import ResumeList from './ResumeList';

const propTypes = {
  navigation: PropTypes.object.isRequired
}

class SearchResumesView extends React.Component {
  handlePress = () => {
    this.props.navigation.navigate('ResumeDetailScreen')
  }
  render() {
    const { records } = this.props
    console.log(records);
    return (
      <Content>
        <ResumeList records={records}/>
      </Content>
    )
  }
}

SearchResumesView.propTypes = propTypes;

export default SearchResumesView;
