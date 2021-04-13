import React from 'react';
import Toolbar from './Toolbar';
import ItemList from '../ItemList';
import ErrorBoundary from '../ErrorBoundary';

function Result({state, setStateApp}) {
    return (
        <>
            <ErrorBoundary>
                <Toolbar state={state}/>
                <ItemList state={state} setStateApp={setStateApp}/>
            </ErrorBoundary>
        </>
    )
}

export default Result;
