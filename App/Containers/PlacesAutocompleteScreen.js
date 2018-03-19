import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocompleteView from '../Components/PlacesAutocompleteView';

class PlacesAutocompleteScreen extends React.Component {
  static navigationOptions() {
    return {
      tabBarVisible: false,
    };
  }

  render() {
    const { navigation, navigation: { state: { params: { updateLocation } } } } = this.props;
    return <PlacesAutocompleteView
      {...this.props}
      updateLocation={updateLocation}
      navigation={navigation}
    />;
  }
}

PlacesAutocompleteScreen.propTypes = {
  // Just want to pass a callback function instead of
  // connecting to a store. This who thing should be dumb.
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        updateLocation: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PlacesAutocompleteScreen;
