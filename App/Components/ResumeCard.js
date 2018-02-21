import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, Text, Body } from 'native-base';

class ResumeCard extends React.Component {
  render() {
    const { record } = this.props;

    return (
      <Card>
        <CardItem header>
          <Text>{record.title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{record.description}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

ResumeCard.propTypes = {
  record: PropTypes.shape({}).isRequired,
}

export default ResumeCard
