import React from 'react';
import classes from './text-input.css';


function TextInput({placeholder, onChange, id, value = ''}) {
    let type = 'text';
    const onChangeState = function ( event ) {
        onChange(event.currentTarget.value);
    };

    if (typeof value === 'number') {
        type = 'number';
    }

    return (
        <input placeholder={placeholder} onChange={onChangeState} id={id} value={value} className={classes.root}
               type={type}/>
    )
}

export default TextInput;
