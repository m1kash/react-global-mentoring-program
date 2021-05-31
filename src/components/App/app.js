import React from 'react';
import GlobalCSS from './app.css';
import Home from '../../pages/home';
import MovieDetailsPage from '../../pages/movie-details';
import Error from '../../pages/Error';
import Logo from '../Logo';
import Footer from '../Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/movies/:movieId' component={MovieDetailsPage} />
                    <Route exact path='/search/:phrase' component={Home} />
                    <Route exact path='*' component={Error} />
                </Switch>
                <Footer>
                    <Logo nameSite='netflixRoulette' description='Better portal'/>
                </Footer>
            </BrowserRouter>

        </>
    )
}

App.globalCSS = GlobalCSS;

export default App;
