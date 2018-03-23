import React from 'react';
import PropTypes from 'prop-types';
import { Content, View } from 'native-base';

import JobList from './JobList';

class JobSearchView extends React.Component {
  render() {
    const {
      records,
      navigation,
      filterIsVisible,
      filterPoint,
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Content scrollEnabled={!filterIsVisible} backgroundWhite>
          <JobList
            records={records}
            navigation={navigation}
            filterPoint={filterPoint}
          />
        </Content>
      </View>
    );
  }
}

const defaultProps = {
  records: [],
};

const propTypes = {
  navigation: PropTypes.object.isRequired,
  records: PropTypes.array,
  filterIsVisible: PropTypes.bool.isRequired,
  filterPoint: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }).isRequired,
};

JobSearchView.propTypes = propTypes;
JobSearchView.defaultProps = defaultProps;

export default JobSearchView;
