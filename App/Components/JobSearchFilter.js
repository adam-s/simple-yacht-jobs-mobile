import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Dimensions } from 'react-native';
import { connectStyle, Content, View, Text } from 'native-base';
import MapView, { Circle, Marker } from 'react-native-maps';

import { mapStyle } from '../Lib/LocationUtils';

const { width, height } = Dimensions.get('window');

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;
const MAP_HEIGHT = 180;
const CIRCLE_RADIUS = 2000;
const CIRCLE_LATITUDE_OFFSET = 0.005;

class JobSearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.updateLocation = this.updateLocation.bind(this);
  }

  // Although using the screen we can use connect to directly update the store,
  // I'm going to treat the form control modals like they are part of the parent
  // and pass props and dispatch function through the navigation hack.
  // It should be obvious after people see a few times.
  handlePressChange() {
    const { navigation: { navigate } } = this.props;
    navigate('PlacesAutocompleteScreen', { updateLocation: this.updateLocation });
  }

  updateLocation(values) {
    // This is where the dispatch action to update tableState happens.
    const { updateTempTableState } = this.props;
    updateTempTableState(values);
  }

  renderMapInfoBar() {
    const { style, tempTableState: { name } } = this.props;
    return (
      <View style={style.mapInfoBar}>
        <Text style={style.mapInfoItem}>{name}</Text>
        <TouchableOpacity
          style={style.mapInfoItem}
          onPress={() => this.handlePressChange()}
        >
          <Text>Change</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const {
      style,
      toggleFilter,
      filterIsVisible,
      tempTableState: { latitude, longitude },
    } = this.props;

    const circle = {
      center: {
        latitude: latitude + CIRCLE_LATITUDE_OFFSET,
        longitude,
      },
      radius: CIRCLE_RADIUS,
    };

    return (
      filterIsVisible ?
        <View style={style.container}>
          <View style={{ flex: 1 }}>
            <Content style={style.filterContainer}>
              <View>
                <MapView
                  style={{ height: MAP_HEIGHT, width }}
                  region={{
                    latitude,
                    longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                  }}
                  customMapStyle={mapStyle}
                  scrollEnabled={false}
                  zoomEnabled={false}
                  pitchEnabled={false}
                  rotateEnabled={false}
                >
                  <Marker coordinate={{ latitude, longitude }} />
                  <Circle
                    center={circle.center}
                    radius={circle.radius}
                    fillColor="rgba(255, 99, 71, 0.4)"
                    strokeColor="rgba(0,0,0,0.2)"
                    zIndex={2}
                    strokeWidth={2}
                  />
                </MapView>

                {this.renderMapInfoBar()}
              </View>
              <View><Text>Filter controls go here</Text></View>
              <View><Text>Can put job type filter here</Text></View>
            </Content>
            <TouchableOpacity
              style={style.bottomContainer}
              onPress={() => toggleFilter()}
            />
          </View>
        </View>
        : null
    );
  }
}

JobSearchFilter.propTypes = {
  style: PropTypes.object.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  tempTableState: PropTypes.shape({
    jobType: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    name: PropTypes.string,
    position: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  updateTempTableState: PropTypes.func.isRequired,
  filterIsVisible: PropTypes.bool.isRequired,
};

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height,
    width,
  },
  filterContainer: {
    backgroundColor: 'white',
    flexGrow: 4,
  },
  bottomContainer: {
    flexGrow: 3,
  },
  mapInfoBar: {
    width,
    height: 40,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  mapInfoItem: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    backgroundColor: 'white',
    borderRadius: 5,
  },
};

export default connectStyle('NativeBase.JobSearchFilter', styles)(JobSearchFilter);
