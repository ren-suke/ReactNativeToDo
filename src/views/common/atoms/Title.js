import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Title(props) {
  return(
    <Text
      style={styles.title}
    >
      {props.text}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#333',
    fontSize: 20,
  }
});
