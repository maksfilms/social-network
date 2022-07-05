import {ActionsTypes, DialogsPageType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"

export const updateNewMessagesTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
} as const)
export const addMessageActionCreator = () => ({type: ADD_NEW_MESSAGE} as const)

const profileReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state;
        case ADD_NEW_MESSAGE:
            let newMessage = {id: new Date().getTime(), message: state.newMessageText}
            state.messages.push(newMessage)
            return state;
        default:
            return state
    }
}

export default profileReducer;