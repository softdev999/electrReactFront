import React, {PureComponent} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {COLOR} from '../../../constants/styles';

import styles from './styles';

class TaskAdd extends PureComponent {
  onPressHideButton = checked => {};

  render() {
    const {placeHolder, taskName, onChangeTaskName, onCreate} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TextInput
            value={taskName}
            style={styles.input}
            secureTextEntry={false}
            returnKeyType="done"
            placeholder={placeHolder}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={COLOR.gunPowder}
            placeholderStyle={styles.placeholderStyle}
            onChangeText={onChangeTaskName}
          />
          <TouchableOpacity onPress={onCreate} style={styles.borderedButton}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

TaskAdd.defaultProps = {
  placeHolder: 'Write new task here ...',
};

TaskAdd.propTypes = {
  onChangeTaskName: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  taskName: PropTypes.string,
};

export default TaskAdd;
