import React from 'react';
import PropTypes from 'prop-types';
import { connectStyle, View, Text, Input, Item, Label } from 'native-base';

class InputGroup extends React.Component {

  renderInput() {
    const {
      style,
      type,
      name,
      value,
      required,
      setFieldValue,
      setFieldTouched,
      secureTextEntry,
    } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Item stackedLabel style={{ height: 37, marginBottom: 2 }}>
          <Input
            style={style.input}
            type={type}
            name={name}
            secureTextEntry={secureTextEntry}
            onChangeText={text => setFieldValue(name, text)}
            onBlur={text => setFieldTouched(name, text)}
            value={value}
            required={required}
          />
        </Item>
      </View>
    );
  }

  renderLabel() {
    const { style, label, required } = this.props;
    return (
      <Label style={style.label}>
        {label} { required && <Text style={{ color: 'red' }}>*</Text>}
      </Label>
    );
  }

  renderInfo() {
    const {
      style,
      help,
      error,
      touched
    } = this.props;
    return (
      <View style={style.info}>
        { !error && help && <Text numberOfLines={2} style={style.help}>{help}</Text> }
        { touched && error && <Text style={style.error}>{error}</Text> }
      </View>
    );
  }

  render() {
    const { label, help } = this.props;

    return (
      <View style={{ marginTop: 10 }}>
        { label && this.renderLabel() }
        { this.renderInput() }
        { help && this.renderInfo() }
      </View>
    );
  }
}

InputGroup.defaultProps = {
  label: null,
  help: null,
  required: false,
  type: 'text',
  value: null,
  secureTextEntry: false,
  error: null,
  touched: false,
};

InputGroup.propTypes = {
  style: PropTypes.object.isRequired,
  label: PropTypes.string,
  help: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

const styles = {
  label: {
    padding: 4,
    paddingLeft: 10,
    color: 'black',
    fontSize: 16,
  },
  info: {
    padding: 4,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
  },
  help: {
    color: '#898989',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    lineHeight: 10,
  },
};

export default connectStyle('NativeBase.InputGroup', styles)(InputGroup);
