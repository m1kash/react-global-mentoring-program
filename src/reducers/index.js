import {combineReducers} from 'redux';
import movies from './movies';
import movieDetails from './movie';
import genres from './genres';
import form from './form';
import app from './app';

const reducers = combineReducers({
    app,
    form,
    genres,
    movies,
    movieDetails
});

export default reducers;