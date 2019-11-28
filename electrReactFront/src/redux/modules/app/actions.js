import {createAction} from 'redux-actions';
import {
  GET_ITEMS,
  ADD_ITEM,
  EDIT_ITEM,
  REMOVE_ITEM,
  UPDATE_SORT_TYPE,
  UPDATE_HIDE_COMPLETE,
  TOGGLE_COMPLETE,
} from './actionTypes';

export const getItemsRequest = createAction(GET_ITEMS.REQUEST);
export const getItemsSuccess = createAction(GET_ITEMS.SUCCESS);
export const getItemsFailure = createAction(GET_ITEMS.FAILURE);

export const addItemRequest = createAction(ADD_ITEM.REQUEST);
export const addItemSuccess = createAction(ADD_ITEM.SUCCESS);
export const addItemFailure = createAction(ADD_ITEM.FAILURE);

export const editItemRequest = createAction(EDIT_ITEM.REQUEST);
export const editItemSuccess = createAction(EDIT_ITEM.SUCCESS);
export const editItemFailure = createAction(EDIT_ITEM.FAILURE);

export const removeItemRequest = createAction(REMOVE_ITEM.REQUEST);
export const removeItemSuccess = createAction(REMOVE_ITEM.SUCCESS);
export const removeItemFailure = createAction(REMOVE_ITEM.FAILURE);

export const updateSortType = createAction(UPDATE_SORT_TYPE);
export const updateHideComplete = createAction(UPDATE_HIDE_COMPLETE);

export const toggleCompleteRequest = createAction(TOGGLE_COMPLETE.REQUEST);
export const toggleCompleteSuccess = createAction(TOGGLE_COMPLETE.SUCCESS);
export const toggleCompleteFailure = createAction(TOGGLE_COMPLETE.FAILURE);
