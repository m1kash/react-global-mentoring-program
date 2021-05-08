import React from 'react';
import classes from './text-input.css';

function TextInput({placeholder, onChange, onBlur, id, type, value = '', error}) {
    const classesControl = [
        classes.root
    ];

    if (error) {
        classesControl.push(classes['root--error'])
    }

    return (
        <input placeholder={placeholder} onChange={onChange} onBlur={onBlur} id={id} value={value} className={classesControl.join(' ')}
               type={type}/>
    )
}

export default TextInput;
