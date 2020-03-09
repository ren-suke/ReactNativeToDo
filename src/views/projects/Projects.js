import React, {Component} from 'react';
import { connect } from 'react-redux';

import {getProjects} from '../../store/action_creators/ProjectActionCreator'
import ProjectsTemplate from './ProjectsTemplate';

export default class Projects extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
      deleteProjectIDs: [],
    };
  }

  onPressEditButton() {}

  onPressCancelButton() {}

  onPressProjectCell(projectID) {
    console.log(projectID);
  }

  onPressProjectCellCheckBox(projectID) {
    console.log(projectID);
  }

  onPressFAB() {
    console.log('pressed on fab');
  }

  onPressDeleteButton(deleteProjectIDs) {}

  render() {
    return (
      <ProjectsTemplate
        projects={projects}
        isEditing={this.state.isEditing}
        onPressProjectCell={this.onPressProjectCell}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

//delete
//celltap時