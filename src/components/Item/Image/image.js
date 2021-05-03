import React from 'react';
import classes from './image.css';
import PropTypes from 'prop-types';

function Image({image, altText, width, height} ) {
    return (
        <>
            <picture>
                <img
                    className={classes.img}
                    src={image}
                    alt={altText}
                    height={height}
                    width={width}
                />
            </picture>
        </>
    )
}

Image.propTypes = {
    image: PropTypes.string,
    altText: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
};

Image.defaultProps = {
    height: 500,
    width: 330
};

export default Image;
