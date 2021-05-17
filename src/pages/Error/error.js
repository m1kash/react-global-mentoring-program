import React, {useCallback} from 'react';
import classes from './error.css';
import Logo from '../../components/Logo';
import Container from '../../components/Container';
import Button from '../../components/Button';
import {useHistory} from 'react-router';

function Error () {
    const history = useHistory();
    const goHome = useCallback(() => history.push('/'), [history]);

    return (
        <div className={classes['root']}>
            <Container type='sp' wrap={true}>
                <Logo nameSite='netflixRoulette'
                      description='Better portal'/>
            </Container>
            <div className={classes['root__text']}>
                404
            </div>
            <Button type='primary' onClick={goHome}>Go home</Button>
        </div>
    )
}

export default Error;