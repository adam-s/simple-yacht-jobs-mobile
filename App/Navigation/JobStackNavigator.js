import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/lib/views/CardStackStyleInterpolator';

import JobDetailScreen from '../Containers/JobDetailScreen';
import JobSearchScreen from '../Containers/JobSearchScreen';

export default StackNavigator({
    JobSearchScreen: { screen: JobSearchScreen },
    JobDetailScreen: { screen: JobDetailScreen }
  },
  {
    transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        return CardStackStyleInterpolator.forHorizontal(sceneProps);
      }
    })
  }
);
