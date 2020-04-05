import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import AddTaskTemplate from './AddTaskTemplate';
import {addTaskButtonTapped} from '../../store/action_creators/TaskActionCreator'

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskTitle: '',
      newTagTitle: '',
      tagId: null,
      deadline: new Date(),
      canAddTask: false
    }
  }

  onChangeTaskTitle = (newText) => {
    this.setState({
      newTaskTitle: newText,
      canAddTask: this.validate()
    });
  }

  onChangeNewTagTitle = (newText) => {
    this.setState({
      newTagTitle: newText,
      canAddTask: this.validate()
    })
  }

  onChangeTagPicker = (selectedValue) => {
    this.setState({
      tagId: selectedValue,
      canAddTask: this.validate()
    })
  }

  onChangeDeadlineDatePicker = (date) => {
    this.setState({deadline: date})
  }

  onPressFAB = () => {
    const {projectId, addTaskButtonTapped} = this.props;
    const newTask = {
      projectId: projectId,
      tagId: this.state.tagId,
      title: this.state.newTaskTitle,
      deadline: this.state.deadline,
      tagTitle: this.state.newTagTitle
    }
    addTaskButtonTapped(newTask)
    Navigation.dismissModal(this.props.componentId);
  }

  validate = () => {
    if(this.state.newTaskTitle == '') { return false }
    if(this.state.newTagTitle == '' && this.state.tagId == null) { return false }
    return true;
  }

  render() {
    const newTaskInputView = {
      taskTitleTextInput: {
        onChangeText: text => this.onChangeTaskTitle(text),
        text: this.state.newTaskTitle
      },
      projectSummaryView: {
        projectTitle: this.props.projectTitle,
      },
      tagInputView: {
        newTagTextInput: {
          onChangeText: text => this.onChangeNewTagTitle(text),
          text: this.state.newTagTitle
        },
        tagPickerView: {
          onChange: value => this.onChangeTagPicker(value),
          items: this.props.tags.map(tag => ({label: tag.title, value: tag.id})),
          value: this.state.tagId 
        }
      },
      deadlinePickerView: {
        datePickerView: {
          date: this.state.deadline,
          onDateChange: date => this.onChangeDeadlineDatePicker(date)
        }
      }
    }
    const addButton ={
      onPress: () => {this.onPressFAB()},
       disabled: !this.state.canAddTask
    }
    return(
      <SafeAreaView style={{flex: 1}}>
        <AddTaskTemplate 
          newTaskInputView={newTaskInputView}
          addButton={addButton}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {projectId} = ownProps;
  const project = state.project.projects.filter(project => project.id == projectId)[0];
  return {
    projectTitle: project.title,
    tags: state.task.tags
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTaskButtonTapped: (newTask) => dispatch(addTaskButtonTapped(newTask))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
