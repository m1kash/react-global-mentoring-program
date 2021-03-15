import React from 'react';
import classes from './counter.css';

function Counter () {
    const count = 39;
    return (
        <div className={classes.root}>
            <strong>
                {count}
            </strong>
            movies found
        </div>
    )
}

export default Counter;
