import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogsType) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={s.dialogs}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
