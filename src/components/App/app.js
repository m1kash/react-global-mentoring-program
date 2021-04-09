import React, {useState} from 'react';

import GlobalCSS from './app.css';
import Header from '../Header/header';
import Logo from '../Logo';
import Footer from '../Footer/footer';
import Content from '../Content';
import data from './test.json';

function App () {
    const [stateApp, setStateApp] = useState({
        movies: data.movies,
        genres: data.genres
    });
    return (
        <>
            <Header state={stateApp} setStateApp={setStateApp}/>
            <Content state={stateApp} />
            <Footer>
                <Logo link={'#'} nameSite={'netflixRoulette'} description={'Better portal'} />
            </Footer>
        </>
    )
}

App.globalCSS = GlobalCSS;

export default App;
