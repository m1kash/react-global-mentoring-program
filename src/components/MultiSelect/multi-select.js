import React, {useState} from 'react';
import classes from './multi-select.css';
import {useUIDSeed} from 'react-uid';

function MultiSelect({name, id, value = [], options = [], onChange}) {
    const seed = useUIDSeed();
    const classesButton = [classes.root__button];
    const [state, setState] = useState({
        open: false
    });
    const openDropdown = function () {
        const isOpen = state.open;
        setState({
            open: !isOpen
        })
    };
    const changeStateOption = function (option) {
        const newValue = option.id;
        let newValues = value;

        if (value.includes(option.id)) {
            newValues = value.filter(oldValue => oldValue !== newValue)
        } else {
            newValues.push(option.id);
        }
        onChange({
            options: options,
            values: newValues,
        });
    };
    const isSelectedOption = option => value.includes(option.id);

    if (state.open) {
        classesButton.push(classes['root__button--open']);
    }

    return (
        <div className={classes.root} id={id}>
            {value.length > 0 ?
                <div className={classes.root__chips} onClick={openDropdown}>
                    {options.map((option) => {
                        if (isSelectedOption(option)) {
                            return (
                                <li key={seed(option)} className={classes['root__chips-item']}>
                                <span className={classes['root__chips-text']}>
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
            {!!options.length && state.open && <ul className={classes.root__list}>
                {options.map((option) => {
                    return (
                        <li key={seed(option)} className={classes['root__list-item']}>
                            <input id={option.name + option.id} type="checkbox" checked={isSelectedOption(option)}
                                   className={classes['root__checkbox']}
                                   onChange={changeStateOption.bind(null, option)}/>
                            <label htmlFor={option.name + option.id} className={classes['root__list-text']}>
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