import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/lib/views/CardStackStyleInterpolator';

import JobSearchScreen from '../Containers/JobSearchScreen';
import PlacesAutocompleteScreen from '../Containers/PlacesAutocompleteScreen';
import JobDetailScreen from '../Containers/JobDetailScreen';

export default StackNavigator(
  {
    JobSearchScreen: { screen: JobSearchScreen },
    PlacesAutocompleteScreen: { screen: PlacesAutocompleteScreen},
    JobDetailScreen: { screen: JobDetailScreen },
  },
  {
    transitionConfig: () => ({
      screenInterpolator: sceneProps =>
        CardStackStyleInterpolator.forHorizontal(sceneProps),
    }),
  },
);
