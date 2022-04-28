import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialogs/1">Max</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Bob</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">David</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">John</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>
                    Hello
                </div>
                <div className={s.dialog}>
                    How are you?
                </div>
                <div className={s.dialog}>
                    Fine
                </div>
            </div>
        </div>
    )
}