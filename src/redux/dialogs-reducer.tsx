import {ActionsTypes, DialogsPageType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"

const profileReducer = (state: DialogsPageType, action: ActionsTypes) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText
    } else if (action.type === ADD_NEW_MESSAGE) {
        let newMessage = {id: new Date().getTime(), message: state.newMessageText}
       state.messages.push(newMessage)

    }
    return state
}

export default profileReducer;