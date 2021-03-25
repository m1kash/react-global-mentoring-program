import React from 'react';
import classes from './header.css';
import Container from "../Container/container";
import Logo from "../Logo";
import AddMovie from "../AddMovie";
import Search from "../Search";

function Header ({ state, setStateApp }) {
    return (
        <header className={classes.root}>
            <Container type={'sp'}>
                <Logo link={'#'} nameSite={'netflixRoulette'} description={'Better portal'} />
                <AddMovie state={ state } setStateApp={setStateApp} />
                <Search />
            </Container>
        </header>
    )
}

export default Header;
