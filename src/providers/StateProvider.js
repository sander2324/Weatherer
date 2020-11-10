import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import PropTypes from 'prop-types';

import rootReducer from '../state/reducers';
import { asyncStorageSyncMiddleware } from '../state/middleware';

const middlewares = [thunk, asyncStorageSyncMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));


function StateProvider(props) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateProvider;
