import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Dimensions } from 'react-native';
import { connectStyle, Content, View, Text, Button } from 'native-base';

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

  render() {
    const { style, toggleFilter, filterIsVisible } = this.props;
    return (
      filterIsVisible ?
        <View style={style.container}>
          <View style={{ flex: 1 }}>
            <Content style={style.filterContainer}>
              <View>
                <Text>Filters go here</Text>
                <Button
                  title="Change"
                  onPress={() => this.handlePressChange()}
                >
                  <Text>Change</Text>
                </Button>
              </View>
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

const window = Dimensions.get('window');

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: window.height,
    width: window.width,
  },
  filterContainer: {
    backgroundColor: 'white',
    flexGrow: 4,
  },
  bottomContainer: {
    flexGrow: 3,
  },
};

export default connectStyle('NativeBase.JobSearchFilter', styles)(JobSearchFilter);
