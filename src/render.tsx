import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {StateType} from "./redux/state";
import {addPost, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} newPostText={state.profilePage.newPostText}/>,
        document.getElementById("root")
    );
}

