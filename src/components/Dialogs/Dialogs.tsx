import React from "react";
import s from "./Dialogs.module.css";

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + " " + s.active}>
                    Max
                </div>
                <div className={s.dialog}>
                    Bob
                </div>
                <div className={s.dialog}>
                    Alex
                </div>
                <div className={s.dialog}>
                    John
                </div>
                <div className={s.dialog}>
                    David
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