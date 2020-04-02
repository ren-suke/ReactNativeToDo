import { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ProjectTaskListView from './molecules/ProjectTaskListView'
import FAB from '../common/atoms/FAB'

function ProjectTasksTemplate(props) {
  const { projectTaskListView, addButton } = props
  return(
    <View>
      <ProjectTaskListView
        tags={projectTaskListView.tags}
        taskSwitch={projectTaskListView.taskSwitch}
        style={{flex: 1}} />
      <FAB onPress={addButton.onPress} disabled={false} />
    </View>
  );
} 

export default ProjectTasksTemplate;