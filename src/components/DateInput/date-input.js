import React from 'react';
import classes from './date-input.css';


function DateInput({placeholder, onChange, id, value = ''}) {
    const onChangeState = function (event) {
        onChange(event.currentTarget.value);
    };

    return (
        <>
            <input placeholder={placeholder} id={id} value={value} className={classes.root} type="text"
                   readOnly={true}/>
            <input id={id} value={value} onChange={onChangeState} className={classes.root__datepicker} type="date"/>
        </>
    )
}

export default DateInput;
