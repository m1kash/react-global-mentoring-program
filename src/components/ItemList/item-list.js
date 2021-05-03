import React, {useEffect} from 'react';
import {useUIDSeed} from 'react-uid';
import classes from './item-list.css';
import Item from '../Item';
import {object} from 'prop-types';
import {connect, useDispatch} from 'react-redux';
import {loadMovies} from '../../actions/api';
import {actionLoadMovies} from '../../actions/actionLoadMovies';

function ItemList({movies, app}) {
    const seed = useUIDSeed();
    const dispatch = useDispatch();
    const setMovies = result => dispatch(actionLoadMovies(result));
    useEffect(function (  ) {
        loadMovies( 'movies', setMovies, app);
    }, [])


    return (
        <div className={classes.root}>
            {movies.map((movie) => {
                if (!movie.title) {
                    return;
                }

                return <Item key={seed(movie)} info={movie} />

            })}
        </div>
    )
}

ItemList.propTypes = {
    data: object
}

function mapStateToProps(state) {
    const { movies, app } = state;

    return { movies, app };
}

export default connect(mapStateToProps)(ItemList);
