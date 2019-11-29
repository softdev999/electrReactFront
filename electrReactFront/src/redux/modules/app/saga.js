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
  updateSortTypeRequest,
  updateSortTypeSuccess,
  updateHideComplete,
  toggleCompleteRequest,
  toggleCompleteSuccess,
  toggleCompleteFailure,
} from './actions';

const getItemsFromLocal = state => state.app.taskList;
const getSortType = state => state.app.sortType;
function* getItemsWorker({payload}) {
  try {
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
    const sortedResponse = yield sortTasks(response);
    yield put(addItemSuccess(sortedResponse));
  } catch (err) {
    yield put(addItemFailure(err.message));
  }
}

function* editItemWorker({payload}) {
  const {id, description} = payload;
  try {
    let response = yield select(getItemsFromLocal);
    response.forEach(res => {
      if (res.id === id) {
        res.description = description;
        res.date_created = new Date();
      }
    });
    const sortedResponse = yield sortTasks(response);
    yield put(editItemSuccess(sortedResponse));
  } catch (err) {
    yield put(editItemFailure(err.message));
  }
}

function* removeItemWorker({payload}) {
  try {
    let response = yield select(getItemsFromLocal);
    const removeIndex = response
      .map(function(item) {
        return item.id;
      })
      .indexOf(payload);
    response.splice(removeIndex, 1);
    const sortedResponse = yield sortTasks(response);
    yield put(removeItemSuccess(sortedResponse));
  } catch (err) {
    yield put(removeItemFailure(err.message));
  }
}

function* updateSortTypeWorker({payload}) {
  yield put(updateSortTypeSuccess(payload));
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

function* sortTasks(tasks) {
  const sortType = yield select(getSortType);
  switch (sortType) {
    case 1:
      tasks.sort(function(a, b) {
        return new Date(b.date_created) - new Date(a.date_created);
      });
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      break;
  }
  return tasks;
}

export default function*() {
  yield takeLatest(getItemsRequest, getItemsWorker);
  yield takeLatest(addItemRequest, addItemWorker);
  yield takeLatest(editItemRequest, editItemWorker);
  yield takeLatest(removeItemRequest, removeItemWorker);
  yield takeLatest(updateSortTypeRequest, updateSortTypeWorker);
  yield takeLatest(updateHideComplete, updateHideCompleteWorker);
  yield takeLatest(toggleCompleteRequest, toggleCompleteWorker);
}
