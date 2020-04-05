import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Icon} from 'native-base';

function ProjectSummaryView(props) {
  const {projectTitle} = props;
  return(
    <View style={styles.container}>
      <View style={styles.summaryViewContainer}>
        <Icon name="text-document" type="Entypo" />
        <Text style={{marginLeft: 10}}>プロジェクト</Text>
      </View>
      <Text style={styles.projectTitleTextView}>{projectTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  summaryViewContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  projectTitleTextView: {
    flex: 0.5,
    fontSize: 24,
    fontWeight: '700'
  }
})
export default ProjectSummaryView