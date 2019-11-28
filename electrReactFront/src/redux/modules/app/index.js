import {handleActions, combineActions} from 'redux-actions';
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
  toggleCompleteSuccess,
  toggleCompleteFailure,
} from './actions';

const defaultState = {
  isLoading: false,
  taskList: [],
  sortType: 1,
  hideComplete: false,
  errorMessage: '',
};

export default handleActions(
  {
    [combineActions(
      getItemsRequest,
      addItemRequest,
      editItemRequest,
      removeItemRequest,
    )]: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    [combineActions(
      getItemsSuccess,
      addItemSuccess,
      editItemSuccess,
      removeItemSuccess,
    )]: (state, {payload}) => ({
      ...state,
      taskList: payload,
      isLoading: false,
    }),
    [combineActions(
      getItemsFailure,
      addItemFailure,
      editItemFailure,
      removeItemFailure,
      toggleCompleteFailure,
    )]: (state, {payload}) => ({
      ...state,
      isLoading: false,
      errorMessage: payload,
    }),
    [updateSortType]: (state, {payload}) => ({
      ...state,
      sortType: payload,
    }),
    [updateHideComplete]: (state, {payload}) => ({
      ...state,
      hideComplete: payload,
    }),
    [toggleCompleteSuccess]: (state, {payload}) => ({
      ...state,
      taskList: payload,
    }),
  },
  defaultState,
);
