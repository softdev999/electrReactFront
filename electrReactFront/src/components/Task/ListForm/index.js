import React, {PureComponent} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import ListTodoItem from './ListTodoItem';
import PropTypes from 'prop-types';
const styles = StyleSheet.create({
  container: {
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

  _renderListItem = item => {
    const {
      onEditItem,
      onRemoveItem,
      onCompleteItem,
      hideCompleted,
    } = this.props;
  };

  render() {
    const {
      itemList,
      onEditItem,
      onRemoveItem,
      onCompleteItem,
      hideCompleted,
    } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={itemList}
          extraData={this.state.flag}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => (
            <ListTodoItem
              item={item}
              onCompleteItem={onCompleteItem}
              onEditItem={onEditItem}
              onRemoveItem={onRemoveItem}
              hideCompleted={hideCompleted}
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
