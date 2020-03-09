import {ADD_PROJECT, ADD_PROJECT_ERROR} from '../ActionTypes';
import {createProject} from '../../realm/ProjectRealm';

export const addProject = (title, imageSource) => {
  return (dispatch, getState) => {
    console.log(imageSource);
    const newProject = {
      id: 0,
      title: title,
      imageUri: imageSource.uri,
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
