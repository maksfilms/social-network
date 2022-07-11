import {ActionsTypes, PostDataType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

const InitialState = {
    posts: [
        {id: 1, message: "Hi! how are you?", likesCount: 12},
        {id: 2, message: "My first post", likesCount: 3},
        {id: 3, message: "Hello all", likesCount: 1},
        {id: 4, message: "My name is....", likesCount: 1},
        {id: 5, message: "My second post", likesCount: 13},
    ],
    newPostText: ""
}


const profileReducer = (state: ProfilePageType = InitialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {
                id: new Date().getTime(), //string
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
}

export default profileReducer