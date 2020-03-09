import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function ProjectTitleTextInput(props) {
  const {onChangeText, text} = props;
  return (
    <TextInput
      placeholder="YOUR PROJECT TITLE"
      onChangeText={text => onChangeText(text)}
      style={styles.projectTitleTextInput}
      value={text}
    />
  );
}

const styles = StyleSheet.create({
  projectTitleTextInput: {
    height: 50,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    textAlign: 'center',
  },
});

export default ProjectTitleTextInput;
