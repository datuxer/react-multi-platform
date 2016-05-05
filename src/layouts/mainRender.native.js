import Todo from '../containers/todo/todo';
import Styles from './main.styles';

import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default function () {
  return (
    <View style={Styles.container}>
      <Todo />
    </View>
  );
}
