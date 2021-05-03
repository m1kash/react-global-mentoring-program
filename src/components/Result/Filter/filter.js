import React from 'react';
import {useUIDSeed} from 'react-uid';
import classes from './filter.css';
import {connect, useDispatch} from 'react-redux';
import {setFilter} from '../../../actions/actionSetFilter';
import {loadMovies} from '../../../actions/api';
import {actionLoadMovies} from '../../../actions/actionLoadMovies';


function Filter({genres, app}) {
    const ALL_MOVIES = 'All';
    const dispatch = useDispatch();
    const items = [
        ALL_MOVIES,
        ...genres
    ];
    const seed = useUIDSeed();
    const setMovies = result => dispatch(actionLoadMovies(result));
    const onClick = function (value) {

        dispatch(setFilter({
            filter: value
        }))
        loadMovies( 'movies', setMovies, app);
    }

    return (
        <ul className={classes.root}>
            {items.map((value) => {
                const result = {};
                const cssClasses = [
                    classes.root__item
                ];

                result.text = value;
                result.value = value === ALL_MOVIES ? '' : value;

                if (result.value === app.filter) {
                    cssClasses.push(classes['root__item--active'])
                }

                return <li className={cssClasses.join(' ')} key={seed(result.text)} onClick={onClick.bind(null, result.value)}>{result      .text}</li>
            })}
        </ul>
    )
}

function mapStateToProps (store) {
    const {genres, app} = store;

    return {
        genres,
        app
    }
}
export default connect(mapStateToProps)(Filter);
