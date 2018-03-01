import DismissableStackNavigator from './DismissableStackNavigator'
import LoginScreen from '../Containers/LoginScreen';
import CreateAccountScreen from '../Containers/CreateAccountScreen';
import ForgotPasswordScreen from '../Containers/ForgotPasswordScreen';

export default DismissableStackNavigator({
  LoginScreen: { screen: LoginScreen },
  CreateAccountScreen: { screen: CreateAccountScreen },
  ForgotPasswordScreen: { screen: ForgotPasswordScreen }
});
