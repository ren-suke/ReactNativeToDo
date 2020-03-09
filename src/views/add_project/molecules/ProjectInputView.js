import React from 'react';
import { View, StyleSheet } from 'react-native';

import ProjectImageView from '../atoms/ProjectImageView';
import ProjectTitleTextInput from '../atoms/ProjectTitleTextInput';

export default function ProjectInputView(props) {
  const { projectImageView, projectTitleTextInput } = props;
  return(
    <View style={styles.addProjectInputView}>
      <ProjectImageView
        onPress={() => { projectImageView.onPress() }} 
        source={projectImageView.source}
      />
      <ProjectTitleTextInput 
        onChangeText={text => projectTitleTextInput.onChangeText(text)}
        value={projectTitleTextInput.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addProjectInputView: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 35
  }
})
