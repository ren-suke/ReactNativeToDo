import projectReducer from './ProjectReducer';
import taskReducer from './TaskReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  project: projectReducer,
  task: taskReducer
});

export default rootReducer;
