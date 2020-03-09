import React from 'react';

import {View, StyleSheet} from 'react-native';
import { Button } from 'native-base';

import ProjectListView from './organisms/ProjectListView';
import FAB from '../common/atoms/FAB';

function ProjectsTemplate(props) {
  return (
    <View>
      <View style={{flex: 1}}>
        <ProjectListView
          projects={props.projects}
          onPressProjectCell={props.onPressProjectCell}
        />
      </View>
      { props.isEditing ? <Button block light>Delete</Button> : <FAB onPressFAB={props.onPressFAB} disabled={props.disabled}/>}
    </View>
  );
}

export default ProjectsTemplate;
