import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ProjectCell from '../molecules/ProjectCell';

export default function ProjectListView(props) {
  const { projects, onPressProjectCell } = props
  return(
    <FlatList
      style={{ flex: 1}}
      data={projects}
      renderItem={( project ) => (
        <ProjectCell project={project} onPressProjectCell={onPressProjectCell} /> 
      )}
      keyExtractor={project => project.id.toString()}
    />
  );
}
