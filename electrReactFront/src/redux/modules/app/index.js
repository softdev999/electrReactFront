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
} from './actions';

const defaultState = {
  isLoading: false,
  taskList: [],
  sortType: 1,
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
    )]: (state, {payload}) => ({
      ...state,
      isLoading: false,
      errorMessage: payload,
    }),
    [updateSortType]: (state, {payload}) => ({
      ...state,
      sortType: payload,
    }),
  },
  defaultState,
);
