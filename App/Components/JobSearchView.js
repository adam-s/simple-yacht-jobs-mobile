import React from 'react';
import PropTypes from 'prop-types';
import { Content, View } from 'native-base';

import JobList from './JobList';
import JobSearchFilter from './JobSearchFilter';

const defaultProps = {
  records: [],
};

const propTypes = {
  navigation: PropTypes.object.isRequired,
  records: PropTypes.array,
  filterIsVisible: PropTypes.bool.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

class JobSearchView extends React.Component {
  render() {
    const { records, navigation, filterIsVisible, toggleFilter } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Content scrollEnabled={!filterIsVisible} backgroundWhite>
          <JobList records={records} navigation={navigation} />
        </Content>
        {filterIsVisible &&
          <JobSearchFilter
            toggleFilter={toggleFilter}
            navigation={navigation}
          />
        }
      </View>
    );
  }
}

JobSearchView.propTypes = propTypes;
JobSearchView.defaultProps = defaultProps;

export default JobSearchView;
