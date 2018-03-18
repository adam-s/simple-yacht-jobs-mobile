import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import { connectStyle, View, Text } from 'native-base';

class JobFilterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  handleClose() {
    this.setState({ isVisible: false });
  }
  render() {
    const { style } = this.props;
    const { isVisible } = this.state;
    return (
      <Modal
        style={style.modal}
        isVisible={isVisible}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        animationInTiming={2000}
        animationOutTiming={2000}
        backdropTransitionInTiming={2000}
        backdropTransitionOutTiming={2000}
      >
        <View style={style.modalContent}><Text>Top part</Text></View>
        <TouchableOpacity
          style={style.bottomContent}
          onPress={() => this.handleClose()}
          activeOpacity={0}
        />
      </Modal>
    );
  }
}

JobFilterModal.propTypes = {
  style: PropTypes.object.isRequired,
};

const styles = {
  modal: {
    margin: 0,
  },
  modalContent: {
    flex: 3,
    backgroundColor: 'white',
  },
  bottomContent: {
    flex: 1,
    backgroundColor: 'transparent',
  },
};

export default connectStyle('NativeBase.JobFilterModal', styles)(JobFilterModal);
