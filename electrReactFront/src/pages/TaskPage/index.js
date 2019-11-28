import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import CheckBox from 'react-native-custom-checkbox';

import PropTypes from 'prop-types';

// import components
import Header from '../../components/Header';
import TaskAddForm from '../../components/Task/AddForm';
import TaskList from '../../components/Task/ListForm';

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
    };
  }

  onPressHideButton = isChecked => {
    const {updateHideComplete} = this.props;
    updateHideComplete(isChecked);
  };

  onChangeTaskName = newName => {
    this.setState({taskName: newName});
  };

  onCreate = () => {
    const {addTodoItem} = this.props;
    const {taskName} = this.state;

    const task = {};
    task.id = uid();
    task.description = taskName;
    task.date_created = new Date();
    task.isCompleted = false;

    addTodoItem(task);
    this.setState({taskName: ''});
  };

  onCompleteItem = (id, isChanged) => {
    const {toggleComplete, todoList} = this.props;

    console.log('on complete: todolist ', todoList);

    toggleComplete({id, isChanged});
    this.setState({taskList: todoList});
  };

  onEditItem = id => {
    console.log('edit: ', id);
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

  render() {
    const {taskName, taskList} = this.state;
    const {bHideChecked} = this.props;
    return (
      <View style={styles.container}>
        <Header text={'Task List'} />
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
              itemList={taskList}
              onCompleteItem={this.onCompleteItem}
              onEditItem={this.onEditItem}
              onRemoveItem={this.onRemoveItem}
              hideCompleted={bHideChecked}
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
