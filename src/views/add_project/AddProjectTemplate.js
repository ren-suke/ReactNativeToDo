import React from 'react';
import {View, StyleSheet} from 'react-native';

import ProjectInputView from './molecules/ProjectInputView';
import FAB from '../common/atoms/FAB';

function AddProjectTemplate(props) {
  const {projectInputView, fab} = props;
  return (
    <View style={styles.addProjectTemplate}>
      <ProjectInputView
        projectImageView={projectInputView.projectImageView}
        projectTitleTextInput={projectInputView.projectTitleTextInput}
      />
      <FAB onPress={fab.onPress} disabled={fab.isDisabled} />
    </View>
  );
}

const styles = StyleSheet.create({
  addProjectTemplate: {
    flex: 1,
  },
});

export default AddProjectTemplate;
