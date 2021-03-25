import React from 'react';
import classes from './genre.css';
import PropTypes from 'prop-types';

function Genre (props) {
    const { categories, genresBase } = props;
    const outputCategories = genresBase.reduce((result, genre) => {
        if (categories.indexOf(genre.id) !== -1) {
            result.push(genre.name);

            return result;
        }

        return result;
    }, []);
    return (
        <div className={classes.root}>
            {outputCategories.join(', ')}
        </div>
    )
}

Genre.propTypes = {
    categories: PropTypes.array
}

export default Genre;
