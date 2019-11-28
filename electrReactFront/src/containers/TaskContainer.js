import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {appSelector} from '../redux/modules/selectors';
import {
  getItemsRequest,
  addItemRequest,
  editItemRequest,
  removeItemRequest,
} from '../redux/modules/app/actions';
import TaskPage from '../pages/TaskPage';

TaskPage.propTypes = {
  getTodolists: PropTypes.func.isRequired,
  addTodoItem: PropTypes.func.isRequired,
  editTodoItem: PropTypes.func.isRequired,
  removeTodoItem: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    todoList: appSelector.selectTaskList(state),
  }),
  dispatch => ({
    getTodolists: () => dispatch(getItemsRequest()),
    addTodoItem: data => dispatch(addItemRequest(data)),
    editTodoItem: data => dispatch(editItemRequest(data)),
    removeTodoItem: data => dispatch(removeItemRequest(data)),
  }),
)(TaskPage);
