import React from 'react';
import classes from './counter.css';

function Counter (props) {
    const {count} = props;

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
