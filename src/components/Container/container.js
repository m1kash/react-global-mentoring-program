import React from 'react';
import classes from './container.css';
import PropTypes from 'prop-types';

function Container({children, type, wrap}) {
    const mergeClasses = [
        classes.root
    ];

    if (type === 'sp') {
        mergeClasses.push(classes['root--sp'])
    }

    if (wrap) {
        mergeClasses.push(classes['root--wrap'])
    }

    return (
        <div className={mergeClasses.join(' ')}>
            {children}
        </div>
    )
}

Container.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ])
}

Container.defaultProps = {
    type: ''
}

export default Container;
