import React from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import ProjectView from '../../common/molecules/ProjectView';

export default function ProjectListView(props) {
  const {projects, projectCell, isEditing, checkBox} = props;
  if(projects.length > 0) {
    return (
      <FlatList
        style={{flex: 1, paddingTop: 10}}
        data={projects}
        renderItem={project => (
          <TouchableOpacity onPress={() => { projectCell.onPress(project.item.id) }}>
            <ProjectView
              project={project.item}
              isEditing={isEditing}
              checkBox={projectCell.checkBox}
            />
          </TouchableOpacity>
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
