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
  filterModalIsVisible: PropTypes.bool.isRequired,
};

class JobSearchView extends React.Component {
  render() {
    const { records, navigation, filterModalIsVisible } = this.props;
    console.log('isVisible', filterModalIsVisible);
    return (
      <Content backgroundWhite>
        <JobList records={records} navigation={navigation} />
        <JobFilterModal isVisible={filterModalIsVisible} />
      </Content>
    );
  }
}

JobSearchView.propTypes = propTypes;
JobSearchView.defaultProps = defaultProps;

export default JobSearchView;
