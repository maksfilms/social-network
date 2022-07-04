import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message"
import {
    DialogsPageType,
    updateNewMessagesTextActionCreator,
    addMessageActionCreator,
    ActionsTypes
} from "../../redux/state";


type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map((m) => <Message key={m.id} message={m.message}/>)

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let currentText = e.currentTarget.value
        props.dispatch(updateNewMessagesTextActionCreator(currentText))

    }

    const onNewMessageClick = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={props.state.newMessageText}
                                  onChange={onNewMessageChange}
                                  placeholder="Enter your message"
                                  />
                    </div>
                    <div>
                        <button onClick={onNewMessageClick}>Send</button>
                    </div>
                </div>


            </div>
        </div>
    )
}