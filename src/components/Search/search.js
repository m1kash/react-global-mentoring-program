import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router';
import classes from './search.css';
import Heading from '../Heading';
import Button from '../Button';
import TextInput from '../TextInput';
import {setSearch} from '../../actions/app';

function Search() {
    const [searchValue, setSearchValue] = useState();
    const { phrase } = useParams();
    const history = useHistory();
    useEffect(function () {
        setParam(phrase);
    }, [phrase])
    const goSearch = (value) => history.push(value ? `/search/${value}` : '/');
    const dispatch = useDispatch();
    const onChange = (e) => setParam(e.currentTarget.value);
    const setParam = (value = '') => {
        goSearch(value);
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
