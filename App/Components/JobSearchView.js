import React from 'react';
import PropTypes from 'prop-types';
import { Content, View } from 'native-base';

import JobList from './JobList';
import JobSearchFilter from './JobSearchFilter';

class JobSearchView extends React.Component {
  render() {
    const {
      records,
      navigation,
      filterIsVisible,
      toggleFilter,
      tableState,
      updateTableState,
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Content scrollEnabled={!filterIsVisible} backgroundWhite>
          <JobList records={records} navigation={navigation} />
        </Content>
        {filterIsVisible &&
          <JobSearchFilter
            toggleFilter={toggleFilter}
            navigation={navigation}
            tableState={tableState}
            updateTableState={updateTableState}
          />
        }
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
  toggleFilter: PropTypes.func.isRequired,
  tableState: PropTypes.shape({
    jobType: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    name: PropTypes.string,
    position: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  updateTableState: PropTypes.func.isRequired,
};

JobSearchView.propTypes = propTypes;
JobSearchView.defaultProps = defaultProps;

export default JobSearchView;
