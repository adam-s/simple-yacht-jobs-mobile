import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/lib/views/CardStackStyleInterpolator';

import ResumeDetailScreen from '../Containers/ResumeDetailScreen';
import ResumeSearchScreen from '../Containers/ResumeSearchScreen';

export default StackNavigator(
  {
    ResumeSearchScreen: { screen: ResumeSearchScreen },
    ResumeDetailScreen: { screen: ResumeDetailScreen },
  },
  {
    transitionConfig: () => ({
      screenInterpolator: sceneProps => CardStackStyleInterpolator.forHorizontal(sceneProps),
    }),
  },
);
