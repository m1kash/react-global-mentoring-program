import React from 'react';
import classes from './date-input.css';


function DateInput({placeholder, onChange, id, onBlur, value = '', error}) {
    const classesControl = [
        classes.root
    ];

    if (error) {
        classesControl.push(classes['root--error'])
    }

    return (
        <>
            <input placeholder={placeholder} id={id} value={value} className={classesControl.join(' ')} type="text"
                   readOnly={true}/>
            <input id={id} value={value} onChange={onChange} onBlur={onBlur} className={classes.root__datepicker} type="date"/>
        </>
    )
}

export default DateInput;
