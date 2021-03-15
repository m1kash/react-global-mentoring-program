import React from 'react';
import classes from './image.css';
import PropTypes from "prop-types";

function Image (props) {
    const {image, altText, width, height} = props;
    const resultImage = 'https://image.tmdb.org/t/p/original/' + image;

    return (
        <>
            <picture>
                <img
                className={classes.img}
                src={resultImage}
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
