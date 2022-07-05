import {ActionsTypes, PostDataType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    if (action.type === ADD_POST) {
        let newPost: PostDataType = {
            id: new Date().getTime(), //string
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }
    return state
}

export default profileReducer