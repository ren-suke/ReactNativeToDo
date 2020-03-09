import React from 'react';

import {View, SafeAreaView} from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title,
  Button,
} from 'native-base';

import ProjectListView from './organisms/ProjectListView';
import FAB from '../common/atoms/FAB';

function ProjectsTemplate(props) {
  return (
    <View>
      {/* <Header>
        <Left>
          <Button transparent onPress={props.onPressEditButton}>Edit</Button>
        </Left>
        <Body>
          <Title>プロジェクト一覧</Title>
        </Body>
        <Right />
      </Header> */}
      <View style={{flex: 1}}>
        <ProjectListView
          projects={props.projects}
          onPressProjectCell={props.onPressProjectCell}
        />
      </View>
      {/* { props.isEditing ? <Button block light>Delete</Button> : <FAB onPressFAB={props.onPressFAB} disabled={props.disabled}/>} */}
    </View>
  );
}

export default ProjectsTemplate;
