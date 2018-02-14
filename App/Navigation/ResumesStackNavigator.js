import { StackNavigator } from 'react-navigation';
import ResumeDetailScreen from '../Containers/ResumeDetailScreen';
import SearchResumesScreen from '../Containers/SearchResumesScreen';

export default StackNavigator({
  SearchResumesScreen: { screen: SearchResumesScreen },
  ResumeDetailScreen: { screen: ResumeDetailScreen }
})
