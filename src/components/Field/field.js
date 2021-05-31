import React from 'react';
import classes from './field.css';
import TextInput from '../TextInput';
import DateInput from '../DateInput';
import MultiSelect from '../MultiSelect';

function Field({name, id, type = 'text', placeholder, options = [], value, error, isTouch, onChange, onBlur}) {
    const props = {
        name,
        id,
        value,
        options,
        placeholder,
        onChange,
        onBlur,
        isTouch
    };

    if (isTouch) {
        props['error'] = error;
    }

    const typesControls = {
        text: <TextInput {...props}/>,
        number: <TextInput {...props} type='number' />,
        date: <DateInput  {...props}/>,
        multiselect: <MultiSelect {...props}/>
    };



    return (
        <div className={classes.root}>
            <label className={classes.root__label} htmlFor={id}>
                {name}
            </label>
            {typesControls[type]}
            {isTouch && error &&
            <div className={classes['root__error']}>
                {error}
            </div>}
        </div>
    );
}

export default Field;
