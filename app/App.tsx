/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import Router from './src/routers';
import ContextDataProvider from './src/utils/context_provider';
import {AlertNotificationRoot} from 'react-native-alert-notification';

class App extends Component {
  render(): React.ReactNode {
    return (
      <NavigationContainer>
        <ContextDataProvider>
          <AlertNotificationRoot theme="dark">
            <Router />
          </AlertNotificationRoot>
        </ContextDataProvider>
      </NavigationContainer>
    );
  }
}

export default App;
