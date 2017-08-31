import { AppRegistry, UIManager } from 'react-native';
import App from './src/App';

console.ignoredYellowBox = ['Setting a timer'];
UIManager.setLayoutAnimationEnabledExperimental(true);
AppRegistry.registerComponent('manager', () => App);
