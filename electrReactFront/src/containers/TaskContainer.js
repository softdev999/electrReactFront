import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {appSelector} from '../redux/modules/selectors';
import {
  getItemsRequest,
  addItemRequest,
  editItemRequest,
  removeItemRequest,
  updateHideComplete,
  toggleCompleteRequest,
  updateSortTypeRequest,
} from '../redux/modules/app/actions';
import TaskPage from '../pages/TaskPage';

TaskPage.propTypes = {
  getTodolists: PropTypes.func.isRequired,
  addTodoItem: PropTypes.func.isRequired,
  editTodoItem: PropTypes.func.isRequired,
  removeTodoItem: PropTypes.func.isRequired,
  todoList: PropTypes.array,
  bHideChecked: PropTypes.bool,
};

export default connect(
  state => ({
    todoList: appSelector.visibleTaskSelector(state),
    bHideChecked: appSelector.selectHideComplete(state),
    isLoading: appSelector.selectLoadingStatus(state),
    currentSortType: appSelector.selectSortType(state),
  }),
  dispatch => ({
    getTodolists: () => dispatch(getItemsRequest()),
    addTodoItem: data => dispatch(addItemRequest(data)),
    editTodoItem: data => dispatch(editItemRequest(data)),
    removeTodoItem: data => dispatch(removeItemRequest(data)),
    updateHideComplete: data => dispatch(updateHideComplete(data)),
    toggleComplete: data => dispatch(toggleCompleteRequest(data)),
    updateSortType: data => dispatch(updateSortTypeRequest(data)),
  }),
)(TaskPage);
