import { ADD_PROJECT, ADD_PROJECT_ERROR } from '../ActionTypes'
import { createProject } from '../../realm/ProjectRealm'

export const addProject = (title, imageSouce) => {
  return (dispatch, getState) => {
    const newProject = {
      id: 0,
      title: title,
      imageSouce: imageSouce
    }
    createProject(newProject)
      .then(projects => {
        dispatch({ type: ADD_PROJECT, projects });
      })
      .catch(error => {
        dispatch({ type: ADD_PROJECT_ERROR, error})
      })
  }
}