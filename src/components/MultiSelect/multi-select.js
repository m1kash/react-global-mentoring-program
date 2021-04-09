import React, { useState } from 'react';
import classes from './multi-select.css';
import {useUIDSeed} from 'react-uid';

function MultiSelect ({name, id, value = [], options = [], onChange}) {
    const seed = useUIDSeed();
    const [state, setState] = useState({
        open: false,
        options: options,
        value: value
    });
    const classesButton = [classes.root__button];
    const openDropdown = function () {
        const isOpen = state.open;
        setState({
            ...state,
            open: !isOpen
        })
    };
    const changeStateOption = function (option) {
        const value = option.id;
        let newValues = state.value;

        if (state.value.includes(option.id)) {
            newValues = state.value.filter(option => option !== value)
        } else {
            newValues.push(option.id);
        }

        onChange(newValues);
    };
    const isSelectedOption = option => state.value.includes(option.id);

    if (state.open) {
        classesButton.push(classes['root__button--open']);
    }

    return (
        <div className={classes.root} id={id}>
            {state.value.length > 0 ?
                <div className={classes.root__chips} onClick={openDropdown}>
                    {state.options.map((option) => {
                        if (isSelectedOption(option)) {
                            return (
                                <li key={seed(option)}  className={classes['root__chips-item']}>
                                <span className={classes['root__chips-text']} >
                                    {option.name}
                                </span>
                                </li>
                            )
                        }
                    })}
                </div>
                :
                <div className={classes.root__placeholder} onClick={openDropdown}>Select {name}</div>
            }
            {!!state.options.length && state.open && <ul className={classes.root__list}>
                {state.options.map((option) => {
                    return (
                        <li key={seed(option)}  className={classes['root__list-item']}>
                            <input id={option.name + option.id} type="checkbox" checked={isSelectedOption(option)} className={classes['root__checkbox']} onChange={changeStateOption.bind(null, option)} />
                            <label htmlFor={option.name + option.id} className={classes['root__list-text']} >
                                {option.name}
                            </label>
                        </li>
                    )
                })}
            </ul>}
            <button className={classesButton.join(' ')} onClick={openDropdown}>
                Open dropdown
            </button>
        </div>
    )
}

export default MultiSelect;