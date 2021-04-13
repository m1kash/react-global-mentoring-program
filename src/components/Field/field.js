import React from 'react';
import classes from './field.css';
import TextInput from '../TextInput';
import DateInput from '../DateInput';
import MultiSelect from '../MultiSelect';

function Field({name, id, type = 'text', placeholder, state = {}, setState}) {
    let value;
    const onChange = function (value) {
        setState({
            ...state,
            [id]: value
        })
    };
    if (typeof state[id] !== 'undefined') {
        value = state[id];
    }
    const typesControls = {
        text: <TextInput id={id} placeholder={placeholder} value={value} onChange={onChange}/>,
        date: <DateInput id={id} placeholder={placeholder} value={value} onChange={onChange}/>,
        multiselect: <MultiSelect id={id} name={name} value={value.values} options={value.options} onChange={onChange}/>
    };

    return (
        <div className={classes.root}>
            <label className={classes.root__label} htmlFor={id}>
                {name}
            </label>
            {typesControls[type]}
        </div>
    );
}

export default Field;
