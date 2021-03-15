import React from 'react';
import classes from './text-input.css';


function TextInput (props) {
    const { placeholder } = props;

    return (
        <input placeholder={placeholder} className={classes.root} type="text"/>
    )
}

export default TextInput;
