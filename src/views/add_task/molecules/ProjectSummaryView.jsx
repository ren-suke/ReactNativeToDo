import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Icon} from 'native-base';

function ProjectSummaryView(props) {
  const {projectTitle} = props;
  return(
    <View style={styles.container}>
      <Icon name="project-diagram" type="FontAwesome5" />
      <Text>プロジェクト</Text>
      <Text>{projectTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  }
})
export default ProjectSummaryView