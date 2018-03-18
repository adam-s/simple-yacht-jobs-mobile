import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/lib/views/CardStackStyleInterpolator';

import JobDetailScreen from '../Containers/JobDetailScreen';
import JobStackNavigator from './JobSearchStackNavigator';

export default StackNavigator(
  {
    JobSearchScreen: { screen: JobStackNavigator },
    JobDetailScreen: { screen: JobDetailScreen },
  },
  {
    transitionConfig: () => ({
      screenInterpolator: sceneProps =>
        CardStackStyleInterpolator.forHorizontal(sceneProps),
    }),
  },
);
