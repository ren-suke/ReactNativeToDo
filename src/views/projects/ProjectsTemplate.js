import React from 'react';

import {View, StyleSheet} from 'react-native';
import { Text, Button } from 'native-base';

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
      { isEditing ? 
        <Button 
          block danger 
          onPress={() => {deleteButton.onPress()}}
          style={{marginHorizontal: 20}}>
          <Text>Delete ({deleteButton.checkedCount})</Text>
        </Button>:
        <FAB onPress={() => {fab.onPress()}} disabled={false}/>
      }
    </View>
  );
}

export default ProjectsTemplate;
