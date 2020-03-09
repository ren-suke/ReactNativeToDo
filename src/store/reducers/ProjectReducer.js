import {ADD_PROJECT, ADD_PROJECT_ERROR} from '../ActionTypes';

const initState = {
  projects: [],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {projects: action.projects};
    case ADD_PROJECT_ERROR:
      return {
        ...state,
        addProjectError: action.error,
      };
    default:
      return state;
  }
};

export default projectReducer;
