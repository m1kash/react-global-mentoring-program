import React from 'react';
import classes from './genre.css';
import PropTypes from 'prop-types';

function Genre({categories}) {
    return (
        <div className={classes.root}>
            {categories.join(', ')}
        </div>
    )
}

Genre.propTypes = {
    categories: PropTypes.array
}

export default Genre;
