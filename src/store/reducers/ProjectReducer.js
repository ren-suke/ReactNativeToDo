import {ADD_PROJECT, ADD_PROJECT_ERROR, GET_PROJECTS, GET_PROJECTS_ERROR, DELETE_PROJECTS, DELETE_PROJECTS_ERROR} from '../ActionTypes';

const initState = {
  projects: [],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        projects: action.projects
      };
    case ADD_PROJECT_ERROR:
      return {
        ...state,
        addProjectError: action.error
      };
    case GET_PROJECTS:
      return {
        projects: action.projects
      };
    case GET_PROJECTS_ERROR:
      return {
        ...state,
        getProjectError: action.error
      }
    case DELETE_PROJECTS:
      return {
        projects: action.deletedProjects
      }
    case DELETE_PROJECTS_ERROR:
      return {
        ...state,
        deleteProjectsError: action.error
      }
    default:
      return state;
  }
};

export default projectReducer;
