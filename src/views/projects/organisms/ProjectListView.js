import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ProjectCell from '../molecules/ProjectCell';

export default function ProjectListView(props) {
  const {projects, projectCell, isEditing, checkBox} = props;
  return (
    <FlatList
      style={{flex: 1}}
      data={projects}
      renderItem={project => (
        <ProjectCell
          project={project}
          onPress={() => {projectCell.onPress()}}
          isEditing={isEditing}
          checkBox={projectCell.checkBox}
        />
      )}
      keyExtractor={project => project.id.toString()}
    />
  );
}
