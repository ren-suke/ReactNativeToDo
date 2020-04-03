import React from 'react';
import { View, StyleSheet } from 'react-native';

import ProjectTaskListView from './molecules/ProjectTaskListView';
import ProjectCell from '../common/molecules/ProjectCell';
import FAB from '../common/atoms/FAB'

function ProjectTasksTemplate(props) {
  const { projectCell, projectTaskListView, addButton } = props
  console.log(projectCell);
  return(
    <View style={{flex: 1}}>
      <ProjectCell 
        style={{marginTop: 10}}
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