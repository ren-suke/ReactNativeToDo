import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List } from 'react-native-paper'

import ProjectTaskListSection from '../organisms/ProjectTaskListSection';

function ProjectTaskListView(props) {
  const { tags, taskSwitch } = props;
  return(
    <ScrollView style={{flex: 1}}>
      <List.Section style={{flex: 1}}>
      {
        tags.map(tag => {
          <ProjectTaskListSection tag={tag} taskSwitch={taskSwitch} />
        })
      }
      </List.Section>
    </ScrollView>
  );
}

export default ProjectTaskListView;