import {store} from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {StateType} from "./redux/state";
import {addPost, updateNewPostText, subscribe} from "./redux/state";


export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App store={store} addPost={addPost} updateNewPostText={updateNewPostText} newPostText={state.profilePage.newPostText}/>,
        document.getElementById("root")
    );
}

rerenderEntireTree(store._state)

subscribe(rerenderEntireTree)



