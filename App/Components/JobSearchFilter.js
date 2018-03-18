import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Dimensions } from 'react-native';
import { connectStyle, Content, View, Text } from 'native-base';

class JobSearchFilter extends React.Component {


  render() {
    const { style, toggleFilter } = this.props;
    return (
      <View style={style.container}>
        <View style={{ flex: 1 }}>
          <Content style={style.filterContainer}>
            <View>
              <Text>Filters go here</Text>
            </View>
          </Content>
          <TouchableOpacity
            style={style.bottomContainer}
            onPress={() => toggleFilter()}
          />
        </View>
      </View>
    );
  }
}

JobSearchFilter.propTypes = {
  style: PropTypes.object.isRequired,
  toggleFilter: PropTypes.func.isRequired,
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
