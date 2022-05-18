import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsType = {
    name: string
    id: number
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

    let dialogsElements =  dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}