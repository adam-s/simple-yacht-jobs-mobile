import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text, Body, Right, Icon, View } from 'native-base';
import HaversineGeolocation from 'haversine-geolocation';
import idx from 'idx';

class JobList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     openDetail: false
  //   }
  // }

  handleListItemOnPress(record) {
    this.props.navigation.navigate('JobDetailScreen', { record });
  }

  getDistance(record) {
    const { filterPoint } = this.props;
    const recordPoint = {
      latitude: idx(record, _ => _.location.coordinates[1]),
      longitude: idx(record, _ => _.location.coordinates[0]),
    };
    return HaversineGeolocation.getDistanceBetween(filterPoint, recordPoint, 'mi');
  }

  render() {
    const { records } = this.props;

    return (
      <List>
        { records.map(record => (
          <ListItem
            key={record._id}
            onPress={() => this.handleListItemOnPress(record)}
            title={record.title}
          >
            <Body>
              <View>
                <Text numberOfLines={1}>{record.title}</Text>
              </View>
              <View>
                <Text numberOfLines={1} value>
                  <Text>{record.location.locality},</Text>
                  <Text> {record.location.country}</Text>
                  <Text value> {this.getDistance(record)} mi</Text>
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
  navigation: PropTypes.object.isRequired,
  filterPoint: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }).isRequired,
};

export default JobList;
