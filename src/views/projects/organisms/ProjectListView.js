import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import ProjectCell from '../molecules/ProjectCell';

export default function ProjectListView(props) {
  const {projects, projectCell, isEditing, checkBox} = props;
  if(projects.length > 0) {
    return (
      <FlatList
        style={{flex: 1, paddingTop: 10}}
        data={projects}
        renderItem={project => (
          <ProjectCell
            project={project.item}
            onPress={projectId => {projectCell.onPress(projectId)}}
            isEditing={isEditing}
            checkBox={projectCell.checkBox}
          />
        )}
        keyExtractor={project => project.id}
      />
    );
  } else {
    return (
      <View style={{flex: 1}}></View>
    )
  }
}
