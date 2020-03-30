import { Navigation } from 'react-native-navigation';
import { startApp as startReduxApp } from './App';

Navigation.events().registerAppLaunchedListener(() => {
    startReduxApp();
});
