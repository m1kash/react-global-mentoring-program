import React from 'react';
import Toolbar from './Toolbar';
import ItemList from '../ItemList';
import ErrorBoundary from '../ErrorBoundary';

function Result() {
    return (
        <>
            <ErrorBoundary>
                <Toolbar />
                <ItemList/>
            </ErrorBoundary>
        </>
    )
}

export default Result;
