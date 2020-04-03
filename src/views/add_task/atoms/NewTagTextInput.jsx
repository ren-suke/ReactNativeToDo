import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function NewTagTextInput(props) {
  const {onChangeText, text} = props;
  return (
    <TextInput
      placeholder="TAG NAME"
      onChangeText={text => onChangeText(text)}
      style={styles.newTagTextInput}
      value={text}
    />
  );
}

const styles = StyleSheet.create({
  newTagTextInput: {
    height: 30,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    textAlign: 'center',
  },
});

export default NewTagTextInput;
