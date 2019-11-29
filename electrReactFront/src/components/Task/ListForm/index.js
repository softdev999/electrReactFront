import React, {PureComponent} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ListTodoItem from './ListTodoItem';
import PropTypes from 'prop-types';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
    width: '100%',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
  },
  borderLine: {
    height: 3,
    width: '100%',
    backgroundColor: 'black',
  },
  result: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  headerTitle: {
    flex: 1,
  },
});

class ListForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
    };
  }

  componentDidMount() {
    this.mount = true;
  }

  componentWillUnmount() {
    this.mount = false;
  }

  componentWillReceiveProps(nextProps) {
    if (this.mount) {
      this.setState({flag: !this.state.flag});
    }
  }

  render() {
    const {
      itemList,
      onEditItem,
      onRemoveItem,
      onCompleteItem,
      onSort,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerTitle} onPress={onSort}>
            <Text style={styles.headerText}>Tasks</Text>
          </TouchableOpacity>
          <View style={styles.result}>
            <Text>{itemList.length}</Text>
          </View>
        </View>
        <View style={styles.borderLine} />
        <FlatList
          data={itemList}
          extraData={this.state.flag}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => (
            <ListTodoItem
              item={item}
              isCompleted={item.isCompleted}
              isUpdated={item.description}
              onCompleteItem={onCompleteItem}
              onEditItem={onEditItem}
              onRemoveItem={onRemoveItem}
            />
          )}
        />
      </View>
    );
  }
}

ListForm.defaultProps = {
  itemList: [],
  hideCompleted: false,
};

ListForm.propTypes = {
  onEditItem: PropTypes.func.isRequired,
  onCompleteItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  itemList: PropTypes.array.isRequired,
  hideCompleted: PropTypes.bool.isRequired,
};

export default ListForm;
