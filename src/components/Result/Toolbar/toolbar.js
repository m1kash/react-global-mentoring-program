import React from 'react';
import classes from './toolbar.css';
import Filter from '../Filter';
import Sorter from '../Sorter';
import Counter from '../Counter';
import {object} from 'prop-types';

function Toolbar({state}) {
    return (
        <>
            <div className={classes.root}>
                <Filter/>
                <Sorter/>
            </div>
            <Counter count={state.movies.length}/>
        </>
    );
}

Toolbar.propTypes = {
    data: object
}

export default Toolbar;
