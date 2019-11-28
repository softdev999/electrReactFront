import createActionConstants from '../../../helpers/actionCreatorHelper';

export const GET_ITEMS = createActionConstants('app/GET_ITEMS');
export const ADD_ITEM = createActionConstants('app/ADD_ITEM');
export const EDIT_ITEM = createActionConstants('app/EDIT_ITEM');
export const REMOVE_ITEM = createActionConstants('app/REMOVE_ITEM');

export const UPDATE_SORT_TYPE = createActionConstants('app/UPDATE_SORT_TYPE');
export const UPDATE_HIDE_COMPLETE = createActionConstants(
  'app/UPDATE_HIDE_COMPLETE',
);

export const TOGGLE_COMPLETE = createActionConstants('app/TOGGLE_COMPLETE');
