import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

import LogoImage from '../atoms/LogoImage';
import Title from '../../common/atoms/Title';
import Paragraph from '../../common/atoms/Pragraph';
import {CheckBox} from 'native-base';

export default function ProjectCell(props) {
  const { project, isEditing, onPress, checkBox} = props
  console.log('---- imageuri');
  console.log(project.item.imageUri);
  return (
    <TouchableOpacity style={styles.projectCellContainer} onPress={() => {onPress(project.item.id)}}>
      <View style={styles.projectCell}>
        { isEditing ? <CheckBox checked={project.item.checkBox.checked} onPress={() => {checkBox.onPress(project.item.id)}}/> : null }
        <LogoImage source={{uri: project.item.imageUri }} />
        <View style={styles.projectCellDescription}>
          <Title text={project.item.title} />
          <Paragraph
            text={
              project.item.allTasksCount +
              '/' +
              project.item.completedTasksCount
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  projectCellContainer: {
    flex: 1,
    height: 60,
  },
  projectCell: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  projectCellDescription: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
