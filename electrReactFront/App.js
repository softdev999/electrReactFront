import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import {BackHandler} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from './src/redux/store';
import NavigationService from './src/navigation/NavigationService';
import RootStack from './src/navigation';

class App extends Component {
  forbidAndroidBackHandler = () =>
    BackHandler.addEventListener('hardwareBackPress', () => true);

  handleSetNavigationReference = navigatorRef => {
    NavigationService.setTopLevelNavigator(navigatorRef);
  };

  render() {
    return <RootStack ref={this.handleSetNavigationReference} />;
  }
}

const RootNavigator = connect(
  state => ({}),
  dispatch => ({}),
)(App);

// NOTE: ROOT COMPONENT

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootNavigator />
    </PersistGate>
  </Provider>
);
