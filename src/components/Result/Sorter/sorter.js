import React, {useEffect} from 'react';
import classes from './sorter.css';
import {useUIDSeed} from 'react-uid';
import {actionLoadMovies} from '../../../actions/actionLoadMovies';
import {loadMovies} from '../../../actions/api';
import {connect, useDispatch} from 'react-redux';
import {setSort} from '../../../actions/actionSetSort';
import {debounce} from 'lodash';
import useDebounce from '../../../hooks/useDebounce';

function Sorter({app}) {
    const seed = useUIDSeed();
    const dispatch = useDispatch();
    const options = [
        {
            name: 'Default',
            value: '',
            selected: true
        },
        {
            name: 'Release Date',
            value: 'release_date',
            selected: false
        },
        {
            name: 'Rating',
            value: 'vote_average',
            selected: false
        }
    ];
    const setMovies = result => dispatch(actionLoadMovies(result));
    const loadMoviesDelay = useDebounce(app, 500);
    useEffect(()=> {
        loadMovies( 'movies', setMovies, app);
    }, [loadMoviesDelay])
    const onChange = (e) => {
        dispatch(setSort({
            sortBy: e.currentTarget.value,
            sortOrder: 'desc'
        }));
    };

    return (
        <div className={classes.root}>
            <label htmlFor="sort" className={classes.root__label}>Sort By</label>
            <select className={classes.root__select} id="sort"   value={app.sortBy} onChange={onChange}>
                {options.map((option) =>
                    <option key={seed(option)} value={option.value}>{option.name}</option>)}
            </select>
        </div>
    )
}

function mapStateToProps(state) {
    const { app } = state;

    return { app };
}

export default connect(mapStateToProps)(Sorter);
