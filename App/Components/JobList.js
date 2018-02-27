import React from 'react';
import PropTypes from 'prop-types';
import { Button, List, ListItem, Text, Body, Right, Icon, View } from 'native-base';

import { formatData } from '../Lib/DateUtils';

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDetail: false
    }
  }

  handleListItemOnPress(record) {
    this.props.navigation.navigate('JobDetailScreen', { record });
  }

  componentDidUpdate() {
    const { records } = this.props;
    if (records.length && !this.state.openDetail) {
      this.handleListItemOnPress(records[0]);
      this.setState({ openDetail: true });
    }
  }


  render() {
    const { records } = this.props;

    return (
      <List>
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

JobList.propTypes = {
  records: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
}

export default JobList;
