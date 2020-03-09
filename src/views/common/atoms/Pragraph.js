import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Paragraph(props) {
  return <Text style={styles.title}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  paragraph: {
    color: '#333',
    fontSize: 16,
  },
});
