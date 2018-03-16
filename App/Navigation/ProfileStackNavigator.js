import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/lib/views/CardStackStyleInterpolator';

import ProfileScreen from '../Containers/ProfileScreen';

export default StackNavigator(
  {
    ProfileScreen: { screen: ProfileScreen },
  },
  {
    transitionConfig: () => ({
      screenInterpolator: sceneProps =>
        CardStackStyleInterpolator.forHorizontal(sceneProps),
    }),
  },
);
