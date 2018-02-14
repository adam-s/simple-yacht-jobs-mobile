import { StackNavigator } from 'react-navigation';
import JobDetailScreen from '../Containers/JobDetailScreen';
import SearchJobsScreen from '../Containers/SearchJobsScreen';

export default StackNavigator({
  SearchJobsScreen: { screen: SearchJobsScreen },
  JobDetailScreen: { screen: JobDetailScreen }
});
