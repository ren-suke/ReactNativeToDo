import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

import LogoImage from '../atoms/LogoImage';
import Title from '../../common/atoms/Title';
import Paragraph from '../../common/atoms/Pragraph';
import {CheckBox} from 'native-base';

export default function ProjectCell(props) {
  const { project, isEditing, onPress, checkBox} = props
  return (
    <TouchableOpacity onPress={() => {onPress(project.id)}}>
      <View styles={styles.projectCell}>
        { isEditing ? <CheckBox checked={project.checkBox.checked} onPress={() => {checkBox.onPress(project.id)}}/> : null }
        <LogoImage source={{uri: project.imageUri }} />
        <Title text={project.title} />
        <Paragraph
          text={
            project.allTasksCount +
            '/' +
            project.completedTasksCount
          }
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  projectCell: {
    paddingLeft: '10',
    paddingRight: '10',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
});
