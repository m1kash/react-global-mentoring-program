import React from 'react';
import ReactDOM from 'react-dom';
import hello from './utils/hello';

ReactDOM.render(
    <div>{hello()}</div>,
    document.getElementById('root')
);
