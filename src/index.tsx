import {store} from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>,
        </BrowserRouter>,
        document.getElementById("root")
    );
}

rerenderEntireTree(store.getState())


store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})



