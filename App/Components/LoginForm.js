import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import Yup from 'yup';
import { connectStyle, H1, Content, Form, View, Button, Text } from 'native-base';

import InputGroup from './InputGroup';
import ValidationErrorModal from './ValidationErrorModal';

class LoginForm extends React.Component {
  renderLinks() {
    const { navigation: { navigate }} = this.props;
    return (
      <View>
        <Button
          transparent
          dark
          style={{ flex: 1, alignSelf: 'center' }}
          onPress={() => navigate('ForgotPasswordScreen')}
        >
          <Text>Forgot your password?</Text>
        </Button>
        <Button
          transparent
          dark
          style={{ flex: 1, alignSelf: 'center' }}
          onPress={() => navigate('CreateAccountScreen')}
        >
          <Text>Need a new account?</Text>
        </Button>
      </View>
    );
  }

  render() {
    const {
      style,
      errors,
      values,
      setFieldTouched,
      setFieldValue,
      handleSubmit,
      fetching,
      touched,
      requestErrors,
      clearRequestErrors,
    } = this.props;
    return (
      <Content>
        <H1 style={{ flex: 1, alignSelf: 'center', marginTop: 30 }}>Login</H1>
        <Form>
          <InputGroup
            required
            label="Email"
            help="Type in your email"
            type="email"
            name="email"
            value={values.email}
            error={errors.email}
            touched={!!touched.email}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
          />
          <InputGroup
            required
            label="Password"
            help="Type in your password"
            type="password"
            name="password"
            secureTextEntry
            error={errors.password}
            value={values.password}
            touched={!!touched.password}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
          />
        </Form>
        <Text>{fetching}</Text>
        <Button
          block
          full
          title="Login"
          style={style.button}
          onPress={handleSubmit}
          disabled={fetching}
        >
          <Text>Login</Text>
        </Button>
        { this.renderLinks() }
        { requestErrors
          && requestErrors.message
          && (
          <ValidationErrorModal
            errors={requestErrors}
            clearRequestErrors={clearRequestErrors}
          />
          )
        }
      </Content>
    );
  }
}

LoginForm.defaultProps = {
  errors: null,
  values: null,
  touched: {},
};

LoginForm.propTypes = {
  style: PropTypes.object.isRequired,
  errors: PropTypes.object,
  values: PropTypes.object,
  touched: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  requestErrors: PropTypes.object.isRequired,
  clearRequestErrors: PropTypes.func.isRequired,
};

const emailValidation = Yup
  .string()
  .email('Invalid email address!')
  .required('Email is required!');

const passwordValidation = Yup
  .string()
  .required('Password is required!');

const validationSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

const LoginFormWithFormik = withFormik({
  mapPropsToValues: () => ({ email: 'admin@simpleyachtjobs.com', password: '' }),
  validationSchema,
  handleSubmit(values, { props }) {
    props.login(values);
  },
})(LoginForm);

const styles = {
  button: {
    margin: 10,
    marginTop: 30,
  },
};

export default connectStyle('NativeBase.LoginForm', styles)(LoginFormWithFormik);
