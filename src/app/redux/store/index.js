/* jshint ignore:start */
import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootReducer from '@redux';
const configureStore = preloadedState => {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware (...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  const store = createStore (
    rootReducer,
    preloadedState,
    composeEnhancers (...enhancers)
  );

  return store;
};

export default configureStore;
