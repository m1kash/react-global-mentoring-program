import React from 'react';
import classes from './date.css';
import PropTypes from "prop-types";

function DateComponent (props) {
    const { date } = props;

    const dateObject = new Date(date);

    return (
        <div className={classes.root}>
            {dateObject.getFullYear()}
        </div>
    )
}

DateComponent.propTypes = {
    date: PropTypes.string
}

export default DateComponent;
