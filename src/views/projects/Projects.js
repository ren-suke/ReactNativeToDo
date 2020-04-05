import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import {showProjectsScreen, onPressDeleteButton} from '../../store/action_creators/ProjectActionCreator'
import ProjectsTemplate from './ProjectsTemplate';
import { PROJECTS, PROJECTTASKS, ADDTASK, ADDPROJECT } from '../screens';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      deleteProjectIDs: [],
    };
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    this.props.showProjectsScreen()
  }

  componentDidAppear() {
    this.props.showProjectsScreen()
  }

  navigationButtonPressed({ buttonId }) {
    if(this.props.projects == undefined || this.props.projects.length == 0) { return }
    if(buttonId == 'editButton') {
      this.setState({
        isEditing: !this.state.isEditing
      })
    }
  }

  onPressProjectCell = (projectId) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: PROJECTTASKS,
        passProps: {
          projectId: projectId,
        },
        options: {
          topBar: {
            title: {
              text: 'タスク一覧'
            }
          }
        }
      }
    })
  }

  onPressCheckBox = (projectId) => {
    if(this.state.deleteProjectIDs.includes(projectId)) {
      const newDeleteProjectIds = this.state.deleteProjectIDs.filter(_projectId => {
        _projectId != projectId
      });
      this.setState({
        deleteProjectIDs: newDeleteProjectIds
      })
    } else {
      this.setState({
        deleteProjectIDs: this.state.deleteProjectIDs.concat(projectId)
      })
    }
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
                  text: 'プロジェクトを作成'
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
      isEditing: false,
      deleteProjectIDs: []
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
      <SafeAreaView style={{flex: 1}}>
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
