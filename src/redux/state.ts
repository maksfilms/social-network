export type PostDataType = {
    id: number
    message: string | undefined
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostDataType>
    newPostText: string

}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof updateNewMessagesTextActionCreator> | ReturnType<typeof addMessageActionCreator>


const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const updateNewMessagesTextActionCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text} as const)
export const addMessageActionCreator = () => ({type: ADD_NEW_MESSAGE} as const)

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi! how are you?", likesCount: 12},
                {id: 2, message: "My first post", likesCount: 3},
                {id: 3, message: "Hello all", likesCount: 1},
                {id: 4, message: "My name is....", likesCount: 1},
                {id: 5, message: "My second post", likesCount: 13},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber(state: StateType) {
        console.log("state changed") // просто заглушка
    },

    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer // присваивает значение функции _callSubscriber от rerenderEntireTree из index
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostDataType = {
                id: new Date().getTime(), //string
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_NEW_MESSAGE) {
            let newMessage = {id: new Date().getTime(), message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber(this._state)
        }

    }
}




