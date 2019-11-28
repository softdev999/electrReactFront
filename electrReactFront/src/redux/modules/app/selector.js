const selectErrorMessage = state => state.app.errorMessage;
const selectLoadingStatus = state => state.app.isLoading;
const selectTaskList = state => state.app.taskList;
const selectSortType = state => state.app.sortType;

export default {
  selectErrorMessage,
  selectLoadingStatus,
  selectTaskList,
  selectSortType,
};
