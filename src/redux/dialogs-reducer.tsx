import {ActionsTypes, DialogsPageType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"

export const updateNewMessagesTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
} as const)

export const addMessageActionCreator = () => ({type: ADD_NEW_MESSAGE} as const)

const initialState = {
        dialogs: [
            {id: 1, name: "Max"},
            {id: 2, name: "Bob"},
            {id: 3, name: "David"},
            {id: 4, name: "Alex"},
            {id: 5, name: "Mike"},
        ],
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Nice to meet you."},
            {id: 4, message: "What are you doing?"},
            {id: 5, message: "Hi all!"}
        ],
        newMessageText: "",
    }

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
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

export default dialogsReducer;