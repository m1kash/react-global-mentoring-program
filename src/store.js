import { createStore, combineReducers, compose} from 'redux';
import data from './test.json';
import reducers from './reducers';
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */
const initialState = {
    movies: data.movies,

};
const configureStore = preloadState => (
   createStore(reducers, preloadState, composeEnhancers())
);

const store = configureStore(initialState);

export default store;