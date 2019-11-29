import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Checkbox from 'react-native-custom-checkbox';
import {COLOR} from '../../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  container_text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },
  description: {
    fontSize: 11,
    fontStyle: 'italic',
  },
  Description: {
    paddingLeft: 10,
    alignSelf: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  checkboxComplete: {},
  bottomLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLOR.black,
  },
  buttonView: {
    flexDirection: 'row',
    paddingRight: 20,
    alignSelf: 'center',
  },
  buttonTextEdit: {
    fontWeight: 'bold',
  },
  buttonTextDelete: {
    fontWeight: 'bold',
    color: COLOR.red,
  },
});

class ListTodoItem extends PureComponent {
  render() {
    const {item, onRemoveItem, onEditItem, onCompleteItem} = this.props;

    return (
      <View>
        <View style={styles.container}>
          <Checkbox
            style={styles.checkboxComplete}
            label=""
            size={20}
            checked={item.isCompleted}
            onChange={(name, checked) => onCompleteItem(item.id, checked)}
          />
          <Text style={styles.Description} numberOfLines={1}>
            {item.description}
          </Text>
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={() => onEditItem(item)}>
              <Text style={styles.buttonTextEdit}>Edit</Text>
            </TouchableOpacity>
            <Text> / </Text>
            <TouchableOpacity onPress={() => onRemoveItem(item.id)}>
              <Text style={styles.buttonTextDelete}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomLine} />
      </View>
    );
  }
}

ListTodoItem.defaultProps = {
  item: {},
};

ListTodoItem.propTypes = {
  onCompleteItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
  onEditItem: PropTypes.func,
};

export default ListTodoItem;
