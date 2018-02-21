import React from 'react';
import PropTypes from 'prop-types';
import { Content, Text, Card } from 'native-base';

import ResumeCard from './ResumeCard';

const propTypes = {
  navigation: PropTypes.object.isRequired
}

class SearchResumesView extends React.Component {
  handlePress = () => {
    this.props.navigation.navigate('ResumeDetailScreen')
  }
  render() {
    const { records } = this.props
    return (
      <Content padder>
        <Text>This is a search resume view</Text>
        {records.map((record, i) => (
          <ResumeCard
            key={record._id}
            record={record}
          />
        ))}
      </Content>
    )
  }
}

SearchResumesView.propTypes = propTypes;

export default SearchResumesView;
