
import React, {
  StyleSheet,
  View,
  Text
} from 'react-native';

import extStyles from './todo.styles';

// const styles = StyleSheet.create(require('./todo.styles'));
const styles = StyleSheet.create(extStyles);

export default function (props, state) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TODO: Write a todo app!</Text>
    </View>
  );
}

