import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message"
import {DialogsPageType, updateNewMessagesTextActionCreator, ActionsTypes} from "../../redux/state";


type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements =  props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map((m) => <Message message={m.message}/>)

    const onChangeNewTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let currentText = e.currentTarget.value
        props.dispatch(updateNewMessagesTextActionCreator(currentText))

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onChangeNewTextHandler}></textarea>

                <button>send</button>
            </div>
        </div>
    )
}