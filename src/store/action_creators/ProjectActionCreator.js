import {ADD_PROJECT, ADD_PROJECT_ERROR, GET_PROJECTS, GET_PROJECTS_ERROR, DELETE_PROJECTS, DELETE_PROJECTS_ERROR} from '../ActionTypes';
import {createProject, getProjects, deleteProjects} from '../../realm/ProjectRealm';

export const addProject = (title, imageSource) => {
  return (dispatch) => {
    const newProject = {
      id: 0,
      title: title,
      imageData: imageSource.uri,
    };
    createProject(newProject)
      .then(projects => {
        dispatch({type: ADD_PROJECT, projects});
      })
      .catch(error => {
        dispatch({type: ADD_PROJECT_ERROR, error});
      });
  };
};

export const showProjectsScreen = () => {
  return (dispatch) => {
    getProjects()
      .then(projects => {
        dispatch({type: GET_PROJECTS, projects});
      })
      .catch(error => {
        dispatch({type: GET_PROJECTS_ERROR, error});
      });
  };
};

export const onPressDeleteButton = (deleteProjectIDs) => {
  return (dispatch) => {
    deleteProjects(deleteProjectIDs)
      .then(deletedProjects => {
        dispatch({type: DELETE_PROJECTS, deletedProjects});
      })
      .catch(error => {
        dispatch({type: DELETE_PROJECTS_ERROR, error});
      });
  };
};
