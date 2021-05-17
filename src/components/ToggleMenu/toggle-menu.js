import React from 'react';
import classes from './toggle-menu.css';
import PropTypes from 'prop-types';
import {useUIDSeed} from 'react-uid';
import useToggle from '../../hooks/useToggle'

function ToggleMenu({children, className}) {
    const seed = useUIDSeed();
    const mergeClasses = [
        classes.root,
        className
    ];
    const mergeClassesList = [
        classes['root__list']
    ];
    const [toggle, toggleMenuAction] = useToggle(false, true);

    if (toggle) {
        mergeClassesList.push(classes['root__list--visible']);
    }

    return (
        <div className={mergeClasses.join(' ')}>
            <button onClick={toggleMenuAction} className={classes.root__button}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                    <path
    d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
    className=""/>
                </svg>
            </button>
            <ul className={mergeClassesList.join(' ')}>
                <li className={classes['root__close']} onClick={toggleMenuAction}>Close</li>
                {children.map((listItem) => <li key={seed(listItem)}
                                                className={classes['root__list-item']}>{listItem}</li>)}
            </ul>
        </div>
    )
}

ToggleMenu.propTypes = {
    isVisibleMenu: PropTypes.bool
};

ToggleMenu.defaultProps = {
    isVisibleMenu: false
};

export default ToggleMenu;
