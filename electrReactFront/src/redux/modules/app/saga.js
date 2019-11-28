import {takeLatest, put, call, select} from 'redux-saga/effects';
// import AppModule from '@Api/modules/app';
import {
  getItemsRequest,
  getItemsSuccess,
  getItemsFailure,
  addItemRequest,
  addItemSuccess,
  addItemFailure,
  editItemRequest,
  editItemSuccess,
  editItemFailure,
  removeItemRequest,
  removeItemSuccess,
  removeItemFailure,
  updateSortType,
  updateHideComplete,
  toggleCompleteRequest,
  toggleCompleteSuccess,
  toggleCompleteFailure,
} from './actions';

const getItemsFromLocal = state => state.app.taskList;

function* getItemsWorker({payload}) {
  try {
    // const response = yield call(AppModule.getItmes, payload); //api call

    const response = yield select(getItemsFromLocal);
    yield put(getItemsSuccess(response));
  } catch (err) {
    yield put(getItemsFailure(err.message));
  }
}

function* addItemWorker({payload}) {
  try {
    let response = yield select(getItemsFromLocal);
    response.push(payload);
    yield put(addItemSuccess(response));
  } catch (err) {
    yield put(addItemFailure(err.message));
  }
}

function* editItemWorker({payload}) {}

function* removeItemWorker({payload}) {
  try {
    let response = yield select(getItemsFromLocal);
    const removeIndex = response
      .map(function(item) {
        return item.id;
      })
      .indexOf(payload);
    response.splice(removeIndex, 1);
    yield put(removeItemSuccess(response));
  } catch (err) {
    yield put(removeItemFailure(err.message));
  }
}

function* updateSortTypeWorker({payload}) {
  yield put(updateSortType(payload));
}

function* updateHideCompleteWorker({payload}) {
  yield put(updateHideComplete(payload));
}

function* toggleCompleteWorker({payload}) {
  const {id, isChanged} = payload;
  try {
    let response = yield select(getItemsFromLocal);
    response.forEach(res => {
      if (res.id === id) {
        res.isCompleted = isChanged;
      }
    });
    yield put(toggleCompleteSuccess(response));
  } catch (err) {
    yield put(toggleCompleteFailure(err.message));
  }
}

export default function*() {
  yield takeLatest(getItemsRequest, getItemsWorker);
  yield takeLatest(addItemRequest, addItemWorker);
  yield takeLatest(editItemRequest, editItemWorker);
  yield takeLatest(removeItemRequest, removeItemWorker);
  yield takeLatest(updateSortType, updateSortTypeWorker);
  yield takeLatest(updateHideComplete, updateHideCompleteWorker);
  yield takeLatest(toggleCompleteRequest, toggleCompleteWorker);
}
