import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

import LogoImage from '../atoms/LogoImage';
import Title from '../../common/atoms/Title';
import Paragraph from '../../common/atoms/Pragraph';
import {CheckBox} from 'native-base';

export default function ProjectCell(props) {
  const { project, isEditing, onPress, checkBox} = props
  return (
    <TouchableOpacity style={styles.projectCellContainer} onPress={() => {onPress(project.id)}}>
      <View style={styles.projectCell}>
        { isEditing ? <CheckBox checked={project.checkBox.checked} onPress={() => {checkBox.onPress(project.id)}}/> : null }
        <LogoImage source={{uri: project.imageData }} />
        <View style={styles.projectCellDescription}>
          <Title text={project.title} />
          <Paragraph
            text={
              project.allTasksCount +
              '/' +
              project.completedTasksCount
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
