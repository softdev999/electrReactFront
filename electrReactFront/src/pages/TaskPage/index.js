import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

class TaskPage extends Component {
  state = {
    isMenuVisible: false,
    isQRCodeVisible: false,
    logoutModal: false,
    showScanBox: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Text>Hello this is Task Page</Text>
        </View>
      </View>
    );
  }
}

export default TaskPage;
