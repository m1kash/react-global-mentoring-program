import React from 'react';
import Heading from '../Heading/heading';
import classes from './search.css';
import Button from '../Button';
import TextInput from '../TextInput';

function Search() {
    return (
        <div className={classes.root}>
            <Heading classNames={[classes.root__heading]} type='h2'>Find your moview</Heading>
            <form className={classes.root__form}>
                <TextInput placeholder='What do you want to watch?'/>
                <Button classNames={[classes.root__button]} type='secondary'>Search</Button>
            </form>
        </div>
    )
}

export default Search;
