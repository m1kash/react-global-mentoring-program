import React from 'react';
import classes from './button.css';
import PropTypes from 'prop-types';


function Button (props) {
    const {children, type, classNames} = props;
    const classesButton = [
        classes.root,
        ...classNames
    ];

    switch (type) {
        case 'secondary':
            classesButton.push(classes['root--secondary']);
            break;
        case 'grey':
            classesButton.push(classes['root--grey']);
            break;
    }

    return (
        <button className={classesButton.join(' ')}>
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
