import React from 'react';
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import axios from 'axios';
import { realTimeUrl } from './firebaseData';

import storeConfig from './src/store/store.config';

import Navigator from './src/Navigator';
import {name as appName} from './app.json';

axios.defaults.baseURL = realTimeUrl;

const store = storeConfig();
const Redux = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
