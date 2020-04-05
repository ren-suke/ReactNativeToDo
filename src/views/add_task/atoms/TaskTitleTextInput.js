import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function TaskTitleTextInput(props) {
  const {onChangeText, text} = props;
  return (
    <TextInput
      placeholder="TASK TITLE"
      onChangeText={text => onChangeText(text)}
      style={styles.newTagTextInput}
      value={text}
    />
  );
}

const styles = StyleSheet.create({
  newTagTextInput: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    textAlign: 'center',
  },
});

export default TaskTitleTextInput;
