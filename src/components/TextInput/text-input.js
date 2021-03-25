import React from 'react';
import classes from './text-input.css';


function TextInput ({ placeholder, onChange, id, value = ''}) {
    const onChangeState = function (event) {
      onChange(event.currentTarget.value);
    };

    return (
        <input placeholder={placeholder} onChange={onChangeState} id={id} value={value} className={classes.root} type="text"/>
    )
}

export default TextInput;
