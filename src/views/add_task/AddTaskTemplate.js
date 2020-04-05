import React from 'react';
import {View, StyleSheet} from 'react-native';
import NewTaskInputView from './organisms/newTaskInputView';
import FAB from '../common/atoms/FAB';

function AddTaskTemplate(props) {
  const {newTaskInputView, addButton} = props
  return(
    <View style={styles.container}>
      <NewTaskInputView 
        taskTitleTextInput={newTaskInputView.taskTitleTextInput}
        projectSummaryView={newTaskInputView.projectSummaryView}
        tagInputView={newTaskInputView.tagInputView}
        deadlinePickerView={newTaskInputView.deadlinePickerView} />
      <FAB 
        onPress={() => {addButton.onPress()}}
        disabled={addButton.disabled} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default AddTaskTemplate;