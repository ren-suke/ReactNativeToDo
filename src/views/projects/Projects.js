import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import {showProjectsScreen, onPressDeleteButton} from '../../store/action_creators/ProjectActionCreator'
import ProjectsTemplate from './ProjectsTemplate';
import { PROJECTS, PROJECTTASKS, ADDTASK, ADDPROJECT } from '../screens';

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
      deleteProjectIDs: [],
    };
  }

  componentDidMount() {
    this.props.showProjectsScreen()
  }

  onPressProjectCell = (projectId) => {
    console.log(projectId)
  }

  onPressCheckBox = (projectId) => { 
    console.log(projectId)
  }

  onPressEditButton = () => {
    if(this.state.isEditing) {
      this.setState({
        deleteProjectIDs: []
      });
    }
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  onPressFAB = () => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: ADDPROJECT,
            options: {
              topBar: {
                title: {
                  text: 'AddProject'
                }
              }
            }
          }
        }]
      }
    });
  }

  onPressDeleteButton = () => {
    this.props.onPressDeleteButton(this.state.deleteProjectIDs);
    this.setState({
      isEditing: false
    })
  }

  render() {
    const { projects } = this.props;
    let _projects = [];
    if(projects) {
      _projects = projects.map(project => {
        let newProject = project;
        if(this.state.deleteProjectIDs.includes(project.id)) {
          newProject.checkBox = { checked: true }
          return newProject
        } else {
          newProject.checkBox = { checked: false}
          return newProject
        }
      });
    }

    const projectCell = {
      onPress: projectId=> this.onPressProjectCell(projectId),
      checkBox: { onPress: projectId => this.onPressCheckBox(projectId) }
    }
    const deleteButton = {
      onPress: () => { this.onPressDeleteButton() },
      checkedCount: this.state.deleteProjectIDs.length
    }
    return (
      <SafeAreaView style={{flex:1}}>
        <ProjectsTemplate
          projects={_projects}
          projectCell={projectCell}
          fab={{onPress: () => { this.onPressFAB() } }}
          deleteButton={deleteButton}
          isEditing={this.state.isEditing}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showProjectsScreen: () => dispatch(showProjectsScreen()),
    onPressDeleteButton: (deleteProjectIDs) => dispatch(onPressDeleteButton(deleteProjectIDs))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
