import React from 'react';
import Toolbar from './Toolbar';
import ItemList from '../ItemList';
import ErrorBoundary from "../ErrorBoundary";
import data from './test.json';

function Result () {
    return (
        <>
            <ErrorBoundary>
                <Toolbar data={data} />
                <ItemList data={data} />
            </ErrorBoundary>
        </>
    )
}

export default Result;
