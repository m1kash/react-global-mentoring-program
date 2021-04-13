import React from 'react';
import classes from './heading.css';
import {arrayOf, element, oneOfType, string} from 'prop-types';

function Heading(props) {
    const {children, type, classNames} = props;
    const HeadingType = `${type}`;
    const cssClasses = [
        classes.root,
        ...classNames
    ];

    cssClasses.push(classes[`root--${type}`]);

    return (
        <HeadingType className={cssClasses.join(' ')}>
            {children}
        </HeadingType>
    )
}

Heading.propTypes = {
    children: oneOfType([
        string,
        element
    ]),
    classNames: arrayOf(string),
    type: string
}

export default Heading;
