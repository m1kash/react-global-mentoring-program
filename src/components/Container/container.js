import React from 'react';
import classes from './container.css';
import PropTypes from 'prop-types';

function Container (props) {
    const { children, type } = props;
    const mergeClasses = [
        classes.root
    ];

    if (type === 'sp') {
        mergeClasses.push(classes['root--sp'])
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
