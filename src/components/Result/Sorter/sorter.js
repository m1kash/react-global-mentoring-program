import React from 'react';
import classes from './sorter.css';

function Sorter () {
    const options = [
        {
            name: 'Default',
            value: 0,
            selected: false
        },
        {
            name: 'Release Date',
            value: 1,
            selected: true
        },
        {
            name: 'Title',
            value: 2,
            selected: false
        }
    ];

    return (
        <div className={classes.root}>
            <label htmlFor="sort" className={classes.root__label}>Sort By</label>
            <select className={classes.root__select} name="sort" id="">
                {options.map((option) =>
                <option value={option.value} selected={option.selected} >{option.name}</option>)}
            </select>
        </div>
    )
}

export default Sorter;
