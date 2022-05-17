import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsType = {
    name: string
    id: string
}
type MessageType = {
    message: string
}

const DialogItem = (props: DialogsType) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={s.dialogs}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}

export function Dialogs() {

    const dialogsData = [
        {id: 1, name: "Max"},
        {id: 1, name: "Bob"},
        {id: 1, name: "David"},
        {id: 1, name: "Alex"},
        {id: 1, name: "Mike"},
    ]

    const messagesData = [
        {id: 1, message: "Hi!"},
        {id: 1, message: "How are you?"},
        {id: 1, message: "Nice to meet you."},
        {id: 1, message: "What are you doing?"},
        {id: 1, message: "Hi all!"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Max" id="1"/>
                <DialogItem name="Alex" id="2"/>
                <DialogItem name="Bob" id="3"/>
                <DialogItem name="John" id="4"/>
                <DialogItem name="David" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi all!"/>
                <Message message="How are you?"/>
                <Message message="Thanks, fine!"/>
            </div>
        </div>
    )
}