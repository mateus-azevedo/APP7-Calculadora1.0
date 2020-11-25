import React from 'react';
import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';

import App from './src/App';

const app7 = () => (
  <App />
);

AppRegistry.registerComponent(appName, () => app7);
