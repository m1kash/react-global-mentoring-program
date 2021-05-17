import React from 'react';
import Heading from '../Heading';
import Button from '../Button';
import classes from './popup.css';
import {useUIDSeed} from 'react-uid';


function Popup({title, children, buttons, closeAction}) {
    const seed = useUIDSeed();

    return (
        <div className={classes.root} onClick={e => e.stopPropagation()}>
            <a className={classes.root__close} onClick={closeAction}>
                X
            </a>
            <Heading classNames={[classes.root__heading]} type='h3'>
                {title}
            </Heading>
            <div className={classes.root__content}>
                {children}
            </div>
            <div className={classes.root__footer}>
                {buttons.map(button => <Button key={seed(button)} classNames={[classes.root__button]} type={button.type}
                                               onClick={button.onClick}>{button.name}</Button>)}
            </div>
        </div>
    );
}

export default Popup;
