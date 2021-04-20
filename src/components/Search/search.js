import React, {useEffect, useState} from 'react';
import Heading from '../Heading/heading';
import classes from './search.css';
import Button from '../Button';
import TextInput from '../TextInput';
import {useDispatch} from 'react-redux';
import {setSearch} from '../../actions/actionSetSearch';

function Search() {
    const [searchValue, setSearchValue] = useState();
    const dispatch = useDispatch();
    const onChange = (value) => {
        setSearchValue(value);
        dispatch(setSearch({
           search: value
        }))
    };
    return (
        <div className={classes.root}>
            <Heading classNames={[classes.root__heading]} type='h2'>Find your movie</Heading>
            <form className={classes.root__form}>
                <TextInput value={searchValue} onChange={onChange} placeholder='What do you want to watch?'/>
                <Button classNames={[classes.root__button]} type='secondary'>Search</Button>
            </form>
        </div>
    )
}

export default Search;
