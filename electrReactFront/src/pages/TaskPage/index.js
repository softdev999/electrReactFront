import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import CheckBox from 'react-native-custom-checkbox';

// import components
import Header from '../../components/Header';
import TaskAddForm from '../../components/Task/AddForm';
import TaskList from '../../components/Task/ListForm';
import TaskEditForm from '../../components/Modals/EditModal';

// import helpers
import uid from '../../helpers/uid';

import styles from './styles';

class TaskPage extends Component {
  constructor(props) {
    super(props);
    const {todoList} = props;
    this.state = {
      taskList: todoList,
      taskName: '',
      isEdit: false,
      editingId: '',
      editingName: '',
    };
  }

  componentDidMount = () => {
    const {getTodolists} = this.props;
    getTodolists();
  };

  UNSAFE_componentWillReceiveProps = nextProps => {
    this.setState({taskList: nextProps.todoList});
  };

  onPressHideButton = isChecked => {
    const {updateHideComplete} = this.props;
    updateHideComplete(isChecked);
  };

  onChangeTaskName = newName => {
    this.setState({taskName: newName});
  };

  onChangeUpdateName = newUpdateName => {
    this.setState({editingName: newUpdateName});
  };

  onCreate = () => {
    const {addTodoItem} = this.props;
    const {taskName} = this.state;

    if (taskName == '') {
      return;
    }
    const task = {};
    task.id = uid();
    task.description = taskName;
    task.date_created = new Date();
    task.isCompleted = false;

    addTodoItem(task);
    this.setState({taskName: ''});
  };

  onUpdate = () => {
    const {editingId, editingName} = this.state;
    const {editTodoItem} = this.props;
    editTodoItem({id: editingId, description: editingName});
    this.setState({isEdit: false});
  };

  onUpdateCancel = () => {
    this.setState({isEdit: false, currentTask: null});
  };

  onCompleteItem = (id, isChanged) => {
    const {toggleComplete} = this.props;
    toggleComplete({id, isChanged});
  };

  onEditItem = item => {
    this.setState({
      isEdit: true,
      editingName: item.description,
      editingId: item.id,
    });
  };

  onRemoveItem = id => {
    Alert.alert(
      'Remove',
      'Are you sure to remove this task?',
      [
        {
          text: 'Yes',
          onPress: () => {
            const {removeTodoItem} = this.props;
            removeTodoItem(id);
          },
        },
        {
          text: 'No',
          onPress: () => {},
        },
      ],
      {cancelable: true},
    );
  };

  onSort = () => {
    const {currentSortType, updateSortType} = this.props;
    const newType = (currentSortType + 1) % 3;

    updateSortType(newType);
  };

  render() {
    const {taskName, taskList, isEdit, editingName} = this.state;
    const {bHideChecked} = this.props;
    return (
      <View style={styles.container}>
        <Header text={'Task List'} />
        {isEdit && (
          <TaskEditForm
            description={editingName}
            onChangeTaskName={this.onChangeUpdateName}
            onUpdate={this.onUpdate}
            onCancel={this.onUpdateCancel}
          />
        )}

        <View style={styles.mainContainer}>
          <View style={styles.addForm}>
            <TaskAddForm
              taskName={taskName}
              onChangeTaskName={this.onChangeTaskName}
              onCreate={this.onCreate}
            />
          </View>
          <View style={styles.contentBody}>
            <TaskList
              onSort={this.onSort}
              itemList={taskList}
              onCompleteItem={this.onCompleteItem}
              onEditItem={this.onEditItem}
              onRemoveItem={this.onRemoveItem}
            />
          </View>
          <TouchableOpacity style={styles.bottomBanner}>
            <Text style={styles.buttonText}>{'Hide Completed'}</Text>
            <CheckBox
              style={styles.hideCheckBox}
              label=""
              size={20}
              checked={bHideChecked}
              onChange={(name, checked) => this.onPressHideButton(checked)}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TaskPage;
