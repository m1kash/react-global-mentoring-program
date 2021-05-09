import {combineReducers} from 'redux';
import movies from './movies';
import movieDetails from './movie';
import genres from './genres';
import app from './app';

const reducers = combineReducers({
    app,
    genres,
    movies,
    movieDetails
});

export default reducers;