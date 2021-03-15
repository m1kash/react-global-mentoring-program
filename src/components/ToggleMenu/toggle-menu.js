import React from 'react';
import classes from './toggle-menu.css';
import PropTypes from 'prop-types';

function ToggleMenu (props) {
    const { isVisibleMenu } = props;
    const mergeClasses = [
        classes.root
    ];

    if (isVisibleMenu) {
        mergeClasses.push(classes['root--visible'])
    }

    return (
        <a href="#" className={mergeClasses.join(' ')}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
                      className=""></path>
            </svg>
        </a>
    )
}

ToggleMenu.propTypes = {
    isVisibleMenu: PropTypes.bool
};

ToggleMenu.defaultProps = {
    isVisibleMenu: false
};

export default ToggleMenu;
