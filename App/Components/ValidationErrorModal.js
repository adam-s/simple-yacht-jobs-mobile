import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import { connectStyle, View, Text, Button, H2 } from 'native-base';

class ValidationErrorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  handleClose() {
    const { clearRequestErrors } = this.props;
    this.setState({ isVisible: false });
    clearRequestErrors();
  }
  renderValidationMessages() {
    const { errors } = this.props;
    return errors.errors.map(error => <View key={error.param}><Text>{error.msg}</Text></View>);
  }
  render() {
    const { style, errors } = this.props;
    const { isVisible } = this.state;
    return (
      <Modal isVisible={isVisible}>
        <View style={style.modalContent}>
          <H2>{errors.message}</H2>
          {Array.isArray(errors.errors) && this.renderValidationMessages()}
          <Button
            transparent
            warning
            style={style.button}
            title="Close"
            onPress={() => this.handleClose()}
          >
            <Text>Close</Text>
          </Button>
        </View>
      </Modal>
    );
  }
}

ValidationErrorModal.propTypes = {
  errors: PropTypes.object.isRequired,
  clearRequestErrors: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
};

export default connectStyle('NativeBase.ValidationErrorModal', styles)(ValidationErrorModal);
