import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Header extends PureComponent {
  render() {
    const {text} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          {Boolean(text) && (
            <View style={styles.textBox}>
              <Text style={styles.text}>{text}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

Header.defaultProps = {
  text: '',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
