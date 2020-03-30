import React from 'react';

import {View, StyleSheet} from 'react-native';
import { Button } from 'native-base';

import ProjectListView from './organisms/ProjectListView';
import FAB from '../common/atoms/FAB';

function ProjectsTemplate(props) {
  const { projects, isEditing, projectCell, deleteButton, fab } = props;

  return (
    <View style={{flex: 1}}>
      <ProjectListView
        projects={projects}
        projectCell={projectCell}
        isEditing={isEditing}
      />
      { props.isEditing ? 
        <Button block light onPress={() => {deleteButton.onPress()}}>Delete {deleteButton.checkedCount}</Button> :
        <FAB onPress={() => {fab.onPress()}} disabled={false}/>
      }
    </View>
  );
}

export default ProjectsTemplate;
