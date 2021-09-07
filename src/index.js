import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes/>
    </BrowserRouter>,
    document.querySelector('#root')
)