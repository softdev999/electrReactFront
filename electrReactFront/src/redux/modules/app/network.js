import {put, select, delay} from 'redux-saga/effects';
import {showNetworkToaster} from './actions';

export default function* networkSaga() {
  const getNetworkState = state => state.network.isConnected;
  const isConnected = yield select(getNetworkState);

  if (isConnected) {
    return true;
  }

  yield put(showNetworkToaster(true));
  yield delay(1000); // instead of settimeout
  yield put(showNetworkToaster(false));
  return false;
}
