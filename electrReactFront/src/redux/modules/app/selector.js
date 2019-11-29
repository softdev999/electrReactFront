import {createSelector} from 'reselect';

const selectErrorMessage = state => state.app.errorMessage;
const selectLoadingStatus = state => state.app.isLoading;
const selectTaskList = state => state.app.taskList;
const selectSortType = state => state.app.sortType;
const selectHideComplete = state => state.app.hideComplete;

const visibleTaskSelector = createSelector(
  [selectLoadingStatus, selectHideComplete, selectSortType, selectTaskList],
  (isLoading, bCompleted, sortType, tasks) => {
    console.log(sortType, tasks);
    switch (sortType) {
      case 0:
        tasks.sort(function(a, b) {
          return new Date(b.date_created) - new Date(a.date_created);
        });
        break;
      case 1:
        tasks.sort(function(a, b) {
          return a.description.localeCompare(b.description);
        });
        break;
      case 2:
        tasks.sort(function(a, b) {
          return b.description.localeCompare(a.description);
        });
        break;
      default:
        tasks.sort(function(a, b) {
          return new Date(b.date_created) - new Date(a.date_created);
        });
        break;
    }
    console.log('after: ', tasks);
    if (bCompleted) {
      return tasks.filter(item => !item.isCompleted);
    } else {
      return tasks;
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
