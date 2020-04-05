import React from 'react';
import {View, StyleSheet} from 'react-native';
import TaskTitleTextInput from '../atoms/TaskTitleTextInput';
import ProjectSummaryView from '../molecules/ProjectSummaryView';
import TagInputView from '../molecules/TagInputView';
import DeadlinePickerView from '../molecules/DeadlinePickerView';

function NewTaskInputView(props) { 
  const {
    taskTitleTextInput,
    projectSummaryView,
    tagInputView,
    deadlinePickerView} = props;
  return(
    <View style={styles.container}>
      <TaskTitleTextInput
        style={styles.taskTitleTextInput}
        onChangeText={text => taskTitleTextInput.onChangeText(text)}
        text={taskTitleTextInput.text}/>
      <View style={styles.taskDetailInputsContainer}>
        <ProjectSummaryView 
          projectTitle={projectSummaryView.projectTitle}/>
        <TagInputView 
          newTagTextInput={tagInputView.newTagTextInput}
          tagPickerView={tagInputView.tagPickerView}/>
        <DeadlinePickerView 
          datePickerView={deadlinePickerView.datePickerView}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  taskTitleTextInput: {
    flex: 0.2
  },
  taskDetailInputsContainer: {
    flex: 0.8,
    flexDirection: 'column'
  }
})

export default NewTaskInputView;