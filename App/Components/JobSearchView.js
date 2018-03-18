import React from 'react';
import PropTypes from 'prop-types';
import { Content } from 'native-base';

import JobList from './JobList';
import JobFilterModal from './JobFilterModal';

const defaultProps = {
  records: [],
};

const propTypes = {
  navigation: PropTypes.object.isRequired,
  records: PropTypes.array,
};

class JobSearchView extends React.Component {
  render() {
    const { records, navigation } = this.props;
    return (
      <Content backgroundWhite>
        <JobList records={records} navigation={navigation} />
        <JobFilterModal />
      </Content>
    );
  }
}

JobSearchView.propTypes = propTypes;
JobSearchView.defaultProps = defaultProps;

export default JobSearchView;
