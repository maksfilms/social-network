import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type postDataType = {
    id: number
    message: string
    likesCount: number
}

let dialogs = [
    {id: 1, name: "Max"},
    {id: 2, name: "Bob"},
    {id: 3, name: "David"},
    {id: 4, name: "Alex"},
    {id: 5, name: "Mike"},
]

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Nice to meet you."},
    {id: 4, message: "What are you doing?"},
    {id: 5, message: "Hi all!"}
]

const posts = [
    {id: 1, message: "Hi! how are you?", likesCount: 12},
    {id: 2, message: "My first post", likesCount: 3},
    {id: 3, message: "My first post", likesCount: 1},
    {id: 4, message: "My first post", likesCount: 1},
    {id: 5, message: "My first post", likesCount: 13},
]

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts} />,
  document.getElementById('root')
);
