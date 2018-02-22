import React from 'react';
import PropTypes from 'prop-types';
import { Button, List, ListItem, Text, Body, Right, Icon, View } from 'native-base';

import { formatDate } from '../Lib/DateUtils';

class ResumeList extends React.Component {
  handleListItemOnPress(record) {
    this.props.navigation.navigate('ResumeDetailScreen', { id: record._id });
  }

  render() {
    const { records } = this.props;
    return (
      <List style={{backgroundColor: 'white'}}>
        { records.map(record => (
          <ListItem
            key={record._id}
            onPress={() => this.handleListItemOnPress(record)}
          >
            <Body>
              <View>
                <Text numberOfLines={1}>{record.title}</Text>
              </View>
              <View>
                <Text numberOfLines={1} value>
                  {record.location.locality}, {record.location.country}
                </Text>
              </View>
              <View>
                <Text numberOfLines={1}>
                  <Text name>Position: </Text>
                  <Text value>{record.position}</Text>
                </Text>
              </View>
            </Body>
            <Right>
              <Icon name="ios-arrow-forward" />
            </Right>
          </ListItem>
          ))}
      </List>
    );
  }
}

ResumeList.propTypes = {
  records: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
}

export default ResumeList;
