import { Navigation } from 'react-native-navigation';
import React, {Component} from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

const middleware = [thunk];
const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export const withReduxProvider = (C) => (props) => (
  <Provider store={store}>
    <C {...props}/>
  </Provider>
);
