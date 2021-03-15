import React from 'react';
import classes from './toolbar.css';
import Filter from "../Filter";
import Sorter from "../Sorter";
import Counter from "../Counter";

function Toolbar () {
    return (
        <>
            <div className={classes.root}>
                <Filter />
                <Sorter />
            </div>
            <Counter />
        </>
    );
}

export default Toolbar;
