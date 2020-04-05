import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List } from 'react-native-paper'

import ProjectTaskListSection from '../molecules/ProjectTaskListSection';

function ProjectTaskListView(props) {
  const { tags, taskSwitch } = props;

  return(
    <ScrollView style={{flex: 1}}>
      <List.Section style={{flex: 1}}>
        { tags && tags.map(tag => {
          return(
            <ProjectTaskListSection tag={tag} taskSwitch={taskSwitch} />
          )
        })}
      </List.Section>
    </ScrollView>
  );
}

export default ProjectTaskListView;