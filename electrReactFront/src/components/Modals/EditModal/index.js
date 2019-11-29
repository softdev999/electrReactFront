import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import {COLOR} from '../../../constants/styles';
import styles from './styles';

class EditModal extends PureComponent {
  render() {
    const {
      placeHolder,
      description,
      onChangeTaskName,
      onUpdate,
      onCancel,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.box}>
            <Text style={styles.title}>Update your description</Text>
            <TextInput
              value={description}
              style={styles.input}
              secureTextEntry={false}
              returnKeyType="done"
              placeholder={placeHolder}
              underlineColorAndroid={'transparent'}
              placeholderTextColor={COLOR.gunPowder}
              placeholderStyle={styles.placeholderStyle}
              onChangeText={onChangeTaskName}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={onUpdate}
                style={styles.containerStyles}>
                <Text style={styles.text}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onCancel}
                style={styles.containerStyles}>
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

EditModal.defaultProps = {
  placeHolder: 'Write new task here ...',
};

EditModal.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default EditModal;
