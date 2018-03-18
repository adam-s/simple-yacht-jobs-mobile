import { StackNavigator } from 'react-navigation';

import JobSearchScreen from '../Containers/JobSearchScreen';
import JobFilterScreen from '../Containers/JobFilterScreen';

export default StackNavigator(
  {
    JobSearchScreen: { screen: JobSearchScreen },
    JobFilterScreen: { screen: JobFilterScreen },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);
