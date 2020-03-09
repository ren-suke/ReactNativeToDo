import React, { Component} from 'react'

import ProjectsTemplate from './ProjectsTemplate';

export default class Projects extends Component {

  constructor() {
    super()

    this.state = {
      isEditing: false,
      deleteProjectIDs: []
    }
  }

  onClick() {
    console.log('onclick')
    this.props.navigation.navigate('Stack2');
  }

  onPressEditButton() {

  }

  onPressCancelButton() {

  }

  onPressProjectCell(projectID) {
    console.log(projectID)
  }

  onPressProjectCellCheckBox(projectID) {
    console.log(projectID)
  }

  onPressFAB() {
    console.log('pressed on fab')
  }

  onPressDeleteButton(deleteProjectIDs) {

  }

  render() {
    return (
      <ProjectsTemplate 
        projects={projects}
        isEditing={ this.state.isEditing }
        onPressProjectCell={ this.onPressProjectCell }
      />
    )
  }
}