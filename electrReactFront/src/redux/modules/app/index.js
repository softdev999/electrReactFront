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
  updateHideComplete,
  toggleCompleteRequest,
  toggleCompleteSuccess,
  toggleCompleteFailure,
  updateSortTypeSuccess,
} from './actions';

const defaultState = {
  isLoading: false,
  taskList: [],
  sortType: 0,
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
      toggleCompleteRequest,
    )]: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    [combineActions(
      getItemsSuccess,
      addItemSuccess,
      editItemSuccess,
      removeItemSuccess,
      toggleCompleteSuccess,
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
    [updateSortTypeSuccess]: (state, {payload}) => ({
      ...state,
      sortType: payload,
    }),
    [updateHideComplete]: (state, {payload}) => ({
      ...state,
      hideComplete: payload,
    }),
  },
  defaultState,
);
