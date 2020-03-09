import projectReducer from './ProjectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  project: projectReducer
});

export default rootReducer;