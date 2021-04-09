import React from 'react';
import classes from './content.css';
import Container from '../Container/container';
import Result from '../Result';

function Content ({ state }) {
    return (
        <main className={classes.root}>
            <Container>
                <Result state={state} />
            </Container>
        </main>
    )
}

export default Content;
