import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {StateType} from "./redux/state";


export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    );
}

