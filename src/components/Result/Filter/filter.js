import React from 'react';
import {useUIDSeed} from 'react-uid';
import classes from './filter.css';

function Filter() {
    const items = [
        {
            name: 'All',
            isActive: true
        },
        {
            name: 'Documentary',
            isActive: false
        },
        {
            name: 'Comedy',
            isActive: false
        }, {
            name: 'Horror',
            isActive: false
        },
        {
            name: 'Crime',
            isActive: false
        },
    ];
    const seed = useUIDSeed();

    return (
        <ul className={classes.root}>
            {items.map((value) => {
                const cssClasses = [
                    classes.root__item
                ];

                if (value.isActive) {
                    cssClasses.push(classes['root__item--active'])
                }

                return <li className={cssClasses.join(' ')} key={seed(value)}>{value.name}</li>
            })}
        </ul>
    )
}

export default Filter;
