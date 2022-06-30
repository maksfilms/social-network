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
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType,
    addPost: () => void
    updateNewPostText: (newText: string) => void
    _callSubscriber: (state: StateType) => void
    subscribe: (any: (any)) => void
    getState: () => StateType
}

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
            ]
        },
    },
    _callSubscriber(state: StateType) {
        console.log("state changed") // просто заглушка
    },
    addPost() {
        let newPost: PostDataType = {
            id: new Date().getTime(), //string
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }
}


