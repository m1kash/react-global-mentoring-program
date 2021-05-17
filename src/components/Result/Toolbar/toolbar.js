import React from 'react';
import classes from './toolbar.css';
import Filter from '../Filter';
import Sorter from '../Sorter';
import Counter from '../Counter';
import {object} from 'prop-types';
import {connect} from 'react-redux';

function Toolbar({ count = 0 }) {

    return (
        <>
            <div className={classes.root}>
                <Filter/>
                <Sorter/>
            </div>
            <Counter count={count}/>
        </>
    );
}

Toolbar.propTypes = {
    data: object
}

function mapStateToProps (store) {
    const {movies} = store;

    return {
        count: movies.length
    }
}

export default connect(mapStateToProps)(Toolbar);
