import React from 'react';
import classes from './header.css';
import Container from '../Container/container';
import Logo from '../Logo';
import AddMovie from '../AddMovie';
import Search from '../Search';

function Header() {
    return (
        <header className={classes.root}>
            <Container type='sp' wrap={true}>
                <Logo nameSite='netflixRoulette' description='Better portal'/>
                <AddMovie/>
                <Search/>
            </Container>
        </header>
    )
}

export default Header;
