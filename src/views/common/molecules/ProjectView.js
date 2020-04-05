import React from 'react';
import {View, StyleSheet} from 'react-native';
import LogoImage from '../../projects/atoms/LogoImage';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Pragraph';
import {CheckBox} from 'native-base';

export default function ProjectView(props) {
  const { project, isEditing, checkBox} = props
  if(project === undefined) { return(<View></View>)  }
  return (
    <View style={styles.projectCell}>
      { isEditing ? 
        <View style={styles.checkBox}>
          <CheckBox 
            color="#333333"
            checked={project.checkBox.checked} 
            onPress={() => {checkBox.onPress(project.id)}}/>
        </View> : null 
      }
      <LogoImage source={{uri: project.imageData }} />
      <View style={styles.projectCellDescription}>
        <Title text={project.title} />
        <Paragraph
          text={
            project.completedTasksCount +
            '/' +
            project.allTasksCount
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  projectCell: {
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectCellDescription: {
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  checkBox: {
    marginRight: 20,
    alignItems: 'center', 
    justifyContent: 'center'
  }
});
