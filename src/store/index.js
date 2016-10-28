/* global devToolsExtension window */
import identity from 'lodash/fp/identity';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

import reducer from 'reducer';

const devTools = process.env.NODE_ENV !== 'production' &&
  window.devToolsExtension;

export default (initialState) => compose(
  applyMiddleware(
    thunkMiddleware,
  ),
  devTools ? devToolsExtension() : identity,
)(createStore)(reducer, initialState);
