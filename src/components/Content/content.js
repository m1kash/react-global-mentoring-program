import React from 'react';
import classes from './content.css';
import Container from '../Container/container';
import Result from '../Result';

function Content () {
    return (
        <main className={classes.root}>
            <Container>
                <Result />
            </Container>
        </main>
    )
}

export default Content;
