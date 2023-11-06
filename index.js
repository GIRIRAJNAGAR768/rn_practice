/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import CodePush from 'react-native-code-push';

const codePushOptions = {
  checkFrequency:
    Platform.OS === 'ios'
      ? CodePush.CheckFrequency.MANUAL
      : CodePush.CheckFrequency.ON_APP_START,
  installMode: CodePush.InstallMode.IMMEDIATE,
};

AppRegistry.registerComponent(appName, () => CodePush(codePushOptions)(App));
