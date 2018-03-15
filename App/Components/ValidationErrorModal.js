import React from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { View, Text} from 'native-base';

class ValidationErrorModal extends React.Component {
  render() {
    const { validationErrors } = this.props;
    // refractor this here
    return (
      <Modal isVisible={false}>
        <View style={styles.modalContent}>
          <Text>Modal is open</Text>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
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
});

export default ValidationErrorModal;
