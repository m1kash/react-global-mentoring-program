import React from 'react';
import classes from './content.css';
import Container from '../Container/container';
import Result from '../Result';

function Content () {
    return (
        <div className={classes.root}>
            <Container>
                <Result />
            </Container>
        </div>
    )
}

export default Content;
