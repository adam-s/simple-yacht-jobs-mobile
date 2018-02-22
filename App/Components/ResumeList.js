import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text, Body, Right, Icon, View } from 'native-base';

import { formatDate } from '../Lib/DateUtils';

class ResumeList extends React.Component {
  render() {
    const { records } = this.props;
    return (
      <List style={{backgroundColor: 'white'}}>
        { records.map(record => (
          <ListItem key={record._id}>
            <Body>
              <View>
                <Text numberOfLines={1}>{record.title}</Text>
              </View>
              <View>
                <Text numberOfLines={1} note>
                  {record.location.locality}, {record.location.country}
                </Text>
              </View>
              <View>
                <Text numberOfLines={1}>
                  <Text name>Position: </Text>
                  <Text value>{record.position}</Text>
                </Text>
              </View>
              <View>
                <Text numberOfLines={1}>
                  <Text name>Start date: </Text>
                  <Text value>{formatDate(record.startDate, 'long')}</Text>
                </Text>
              </View>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          ))}
      </List>
    );
  }
}

ResumeList.propTypes = {
  records: PropTypes.array
}

export default ResumeList;
