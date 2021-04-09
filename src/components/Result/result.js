import React from 'react';
import Toolbar from './Toolbar';
import ItemList from '../ItemList';
import ErrorBoundary from "../ErrorBoundary";

function Result ( { state }) {
    return (
        <>
            <ErrorBoundary>
                <Toolbar state={state} />
                <ItemList state={state} />
            </ErrorBoundary>
        </>
    )
}

export default Result;
