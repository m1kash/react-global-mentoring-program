import React from 'react';
import PropTypes from 'prop-types';

function DateComponent(props) {
    const {date} = props;

    const dateObject = new Date(date);

    return (
        <>
            {dateObject.getFullYear()}
        </>
    )
}

DateComponent.propTypes = {
    date: PropTypes.string
}

export default DateComponent;
