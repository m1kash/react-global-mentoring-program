import React from 'react';
import classes from './title.css';
import Heading from '../Heading/heading';
import PropTypes from 'prop-types';

function Title({title, type, classesCss = []}) {
    return (
        <Heading classNames={[classes.root, ...classesCss]} type={type}>
            {title}
        </Heading>
    )
}

Title.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    classesCss: PropTypes.array
}

export default Title;
