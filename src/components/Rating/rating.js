import React from 'react';
import classes from './rating.css';

function Rating({ rate }) {
    const mergeClasses = [
        classes.root
    ];

    if (rate < 7) {
        mergeClasses.push(classes['root--average'])
    } else if (rate < 4) {
        mergeClasses.push(classes['root--bad'])
    } else {
        mergeClasses.push(classes['root--good'])
    }

    return (
        <>
            <div className={mergeClasses.join(' ')}>
                {rate}
            </div>
        </>
    )
}

export default Rating;