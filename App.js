/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/store/reducers/RootReducer';

import Projects from './src/views/projects/Projects'
import AddProject from './src/views/add_project/AddProject'
import ProjectTasks from './src/views/project_tasks/ProjectTasks';
import AddTask from './src/views/add_task/AddTask'

const middleware = [thunk]
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware)
  )
);

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AddProject />
      </Provider>
    );
  }
}
