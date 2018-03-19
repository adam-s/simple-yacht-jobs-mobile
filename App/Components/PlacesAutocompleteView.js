import React from 'react';
import PropTypes from 'prop-types';
import Secrets from 'react-native-config';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import idx from 'idx';

import { connectStyle, View, Text, Icon } from 'native-base';

class PlacesAutocompleteView extends React.Component {
  handleOnPress(data, details){
    const { updateLocation, navigation } = this.props;
    navigation.goBack();
    const name = idx(details, _ => _.formatted_address);
    const latitude = idx(details, _ => _.geometry.location.lat);
    const longitude = idx(details, _ => _.geometry.location.lng);
    updateLocation({
      name,
      latitude,
      longitude,
    });
  }
  renderRow(renderRow) {
    const { style } = this.props;
    return (
      <View style={style.renderRow}>
        <Text>{renderRow.description}</Text>
        <Icon style={style.arrowForward} name="ios-arrow-forward" />
      </View>
    );
  }
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="search"
        minLength={2}
        autoFocus
        fetchDetails
        query={{
          key: Secrets.GOOGLE_MAPS_API_KEY,
          language: 'en',
          types: '(cities)',
        }}
        onPress={(data, details) => this.handleOnPress(data, details)}
        enablePoweredByContainer={false}
        renderRow={renderRow => this.renderRow(renderRow)}
      />
    );
  }
}

PlacesAutocompleteView.propTypes = {
  navigation: PropTypes.object.isRequired,
  updateLocation: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

const styles = {
  renderRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowForward: {
    color: '#898989',
  },
};

export default connectStyle('NativeBase.PlacesAutocompleteView', styles)(PlacesAutocompleteView);
