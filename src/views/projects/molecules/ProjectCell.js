import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import LogoImage from '../atoms/LogoImage';
import Title from '../../common/atoms/Title';
import Paragraph from '../../common/atoms/Pragraph';
import { CheckBox } from 'native-base';

export default function ProjectCell(props) {
  return(
    <TouchableOpacity onPress={props.onPressProjectCell}>
      <View styles={styles.projectCell} >
        { console.log(props.project.item) }
        {/* { props.isEditing ? <CheckBox /> : null } */}
        <LogoImage imageSource={props.project.item.imageSouce} />
        <Title text={props.project.item.title}/>
        <Paragraph text={props.project.item.allTasksCount + '/' + props.project.item.completedTasksCount}/>
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
    alignContent: 'space-between'
  }
})