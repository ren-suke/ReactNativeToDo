import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from 'react-native-navigation';
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
    Navigation.push(this.props.componentId, {
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
    })
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ProjectTasksTemplate 

        />        
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const projectId = ownProps.projectId
  return {
    project: state.projects.filter(project => { project.id == projectId })[0],
    tags: state.tags
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showProjectTasksScreen: () => dispatch(showProjectTasksScreen()),
    taskSwitchChanged: (taskId, newValue) => dispatch(taskSwitchChanged(ownProps.projectId, taskId, newValue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTasks);