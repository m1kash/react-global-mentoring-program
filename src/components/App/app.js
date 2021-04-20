import React from 'react';

import GlobalCSS from './app.css';
import Header from '../Header/header';
import Logo from '../Logo';
import Footer from '../Footer/footer';
import Content from '../Content';

function App() {
    return (
        <>
            <Header />
            <Content/>
            <Footer>
                <Logo link='#' nameSite='netflixRoulette' description='Better portal'/>
            </Footer>
        </>
    )
}

App.globalCSS = GlobalCSS;

export default App;
