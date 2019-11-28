import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';

import sagas from './sagas';
import reducers from './modules/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware)),
);

sagas.forEach(saga => sagaMiddleware.run(saga));

export const persistor = persistStore(store, null, () => {
  // After rehydration completes, we detect initial connection
});
