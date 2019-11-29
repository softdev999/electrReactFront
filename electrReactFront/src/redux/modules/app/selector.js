import {createSelector} from 'reselect';

const selectErrorMessage = state => state.app.errorMessage;
const selectLoadingStatus = state => state.app.isLoading;
const selectTaskList = state => state.app.taskList;
const selectSortType = state => state.app.sortType;
const selectHideComplete = state => state.app.hideComplete;

const sortDateSelector = createSelector(
  [selectSortType, selectTaskList],
  (sortType, tasks) => {
    switch (sortType) {
      case 1:
        tasks.sort(function(a, b) {
          return new Date(b.date_created) - new Date(a.date_created);
        });
        break;
      case 2:
        tasks.sort(function(a, b) {
          return a.description < b.description;
        });
        break;
      case 3:
        tasks.sort(function(a, b) {
          return a.description > b.description;
        });
        break;
      default:
        tasks.sort(function(a, b) {
          return new Date(b.date_created) - new Date(a.date_created);
        });
        break;
    }
    return tasks;
  },
);

const visibleTaskSelector = createSelector(
  [selectLoadingStatus, selectHideComplete, sortDateSelector],
  (isLoading, bCompleted, sortedItems) => {
    if (bCompleted) {
      return sortedItems.filter(item => !item.isCompleted);
    } else {
      return sortedItems;
    }
  },
);

export default {
  selectErrorMessage,
  selectLoadingStatus,
  selectTaskList,
  selectSortType,
  selectHideComplete,
  visibleTaskSelector,
};
