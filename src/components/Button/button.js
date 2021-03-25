import React from 'react';
import classes from './button.css';
import PropTypes from 'prop-types';


function Button ({children, type, classNames, onClick}) {
    const classesButton = [
        classes.root,
        ...classNames
    ];

    switch (type) {
        case 'primary':
            classesButton.push(classes['root--primary']);
            break;
        case 'secondary':
            classesButton.push(classes['root--secondary']);
            break;
        case 'grey':
            classesButton.push(classes['root--grey']);
            break;
    }

    return (
        <button onClick={onClick} className={classesButton.join(' ')}>
            {children}
        </button>
    )
}

Button.propTypes = {
    classNames: PropTypes.array
};

Button.defaultProps = {
    classNames: []
}

export default Button;
