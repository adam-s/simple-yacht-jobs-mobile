import { StackNavigator } from 'react-navigation';

import AuthNavigation from './AuthNavigation';
import PrimaryNavigation from './PrimaryNavigation';

const AppNavigation = StackNavigator({
  AuthNavigation: { screen: AuthNavigation },
  PrimaryNavigation: { screen: PrimaryNavigation },
}, {
  initialRouteName: 'AuthNavigation',
  headerMode: 'none',
  mode: 'modal',
});

export default AppNavigation;
