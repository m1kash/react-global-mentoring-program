import React, {useState} from 'react';
import classes from './multi-select.css';
import {useUIDSeed} from 'react-uid';
import PropTypes from 'prop-types';

function MultiSelect({name, id, value, options, onChange, onBlur, error}) {
    const seed = useUIDSeed();
    const classesButton = [classes.root__button];
    const [state, setState] = useState({
        open: false
    });
    const classesControl = [
        classes.root
    ];

    if (error) {
        classesControl.push(classes['root--error'])
    }

    const openDropdown = function () {
        const isOpen = state.open;
        setState({
            open: !isOpen
        })
    };
    const changeStateOption = function (option) {
        const newValue = option;
        let newValues = value;

        if (value.includes(option)) {
            newValues = value.filter(oldValue => oldValue !== newValue)
        } else {
            newValues.push(option);
        }
        onChange(newValues);
    };
    const isSelectedOption = option => value.includes(option);

    if (state.open) {
        classesButton.push(classes['root__button--open']);
    }

    return (
        <div className={classesControl.join(' ')} id={id} onBlur={onBlur}>
            {value.length > 0 ?
                <div className={classes.root__chips} onClick={openDropdown}>
                    {value.map((option) => {
                        if (isSelectedOption(option)) {
                            return (
                                <li key={seed(option)} className={classes['root__chips-item']}>
                                    <span className={classes['root__chips-text']}>
                                        {option}
                                    </span>
                                </li>
                            )
                        }
                    })}
                </div>
                :
                <div className={classes.root__placeholder} onClick={openDropdown}>Select {name}</div>
            }
            {!!options.length && state.open && <ul className={classes.root__list} onBlur={onBlur}>
                {options.map((option) => {
                    return (
                        <li key={seed(option)} className={classes['root__list-item']}>
                            <input id={option + seed(option)} type="checkbox" checked={isSelectedOption(option)}
                                   className={classes['root__checkbox']}
                                   onChange={changeStateOption.bind(null, option)}/>
                            <label htmlFor={option + seed(option)} className={classes['root__list-text']}>
                                {option}
                            </label>
                        </li>
                    )
                })}
            </ul>}
            <button className={classesButton.join(' ')} onClick={openDropdown} onBlur={onBlur}>
                Open dropdown
            </button>
        </div>
    )
}

MultiSelect.defaultProps = {
    value: []
}

export default MultiSelect;