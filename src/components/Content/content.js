import React, {useCallback} from 'react';
import classes from './content.css';
import Container from '../Container/container';
import Result from '../Result';

function Content() {
    return (
        <main className={classes.root}>
            <Container wrap={true}>
                <Result />
            </Container>
        </main>
    )
}

export default Content;
