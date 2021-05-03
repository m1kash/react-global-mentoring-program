import React from 'react';
import classes from './field.css';
import TextInput from '../TextInput';
import DateInput from '../DateInput';
import MultiSelect from '../MultiSelect';
import {connect, useDispatch} from 'react-redux';
import {setForm} from '../../actions/actionSetForm';

function Field({name, id, type = 'text', placeholder, options = [], formValues}) {
    let value;
    const dispatch = useDispatch();
    const onChange = function (value) {
        let finalValue = value;
        if (type === 'number') {
            finalValue = +value;
        }
        dispatch(setForm({
            [id]: finalValue
        }));
    };
    if (typeof formValues[id] !== 'undefined') {
        value = formValues[id];
    }
    const typesControls = {
        text: <TextInput id={id} placeholder={placeholder} value={value} onChange={onChange}/>,
        number: <TextInput id={id} placeholder={placeholder} value={value} onChange={onChange}/>,
        date: <DateInput id={id} placeholder={placeholder} value={value} onChange={onChange}/>,
        multiselect: <MultiSelect id={id} name={name} value={value} options={options} onChange={onChange}/>
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

function mapStateToProps (store) {
    const {form} = store;

    return {
        formValues: form,
    }
}

export default connect(mapStateToProps)(Field);
