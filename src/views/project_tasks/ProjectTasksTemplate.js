import React from 'react';
import { View, StyleSheet } from 'react-native';

import ProjectTaskListView from './organisms/ProjectTaskListView';
import ProjectView from '../common/molecules/ProjectView';
import FAB from '../common/atoms/FAB'

function ProjectTasksTemplate(props) {
  const { projectCell, projectTaskListView, addButton } = props
  return(
    <View style={{flex: 1, paddingTop: 10}}>
      <ProjectView
        project={projectCell.project} />
      <ProjectTaskListView
        tags={projectTaskListView.tags}
        taskSwitch={projectTaskListView.taskSwitch}
        style={{flex: 1}} />
      <FAB onPress={addButton.onPress} disabled={false} />
    </View>
  );
} 

export default ProjectTasksTemplate;