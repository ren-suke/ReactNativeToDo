import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { Navigation } from 'react-native-navigation';
import {ADDTASK} from '../screens'
import {connect} from 'react-redux';
import {showProjectTasksScreen, taskSwitchChanged} from '../../store/action_creators/TaskActionCreator'
import ProjectTasksTemplate from './ProjectTasksTemplate';

class ProjectTasks extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.showProjectTasksScreen()
  }

  onChangeTaskSwitch = (taskId, newValue) => {
    this.props.taskSwitchChanged(taskId, newValue)
  }

  onPressFAB = () => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: ADDTASK,
            options: {
              topBar: {
                title: {
                  text: 'タスクを追加'
                }
              }
            }
          }
        }]
      }
    });
  }

  render() {
    const projectTaskListView = {
      tags: this.props.tags,
      taskSwitch: {
        onChange: (taskId, newValue) => { this.onChangeTaskSwitch(taskId, newValue) }
      }
    }
    return (
      <SafeAreaView style={{flex: 1}}>
        <ProjectTasksTemplate 
          projectCell={{project: this.props.project}}
          projectTaskListView={projectTaskListView}
          addButton={{onPress: () => {this.onPressFAB()}}}
        />        
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const projectId = ownProps.projectId;
  const project = state.project.projects.filter(project => project.id == projectId)[0];
 
  return {
    project: project,
    tags: state.task.tags
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showProjectTasksScreen: () => dispatch(showProjectTasksScreen()),
    taskSwitchChanged: (taskId, newValue) => dispatch(taskSwitchChanged(ownProps.projectId, taskId, newValue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTasks);