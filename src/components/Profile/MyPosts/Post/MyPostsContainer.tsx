import React from "react";
import {ProfilePageType, ActionsTypes} from "../../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

function MyPostsContainer(props: MyPostsPropsType) {

    let onAddPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (currentText: string) => {
        props.dispatch(updateNewPostTextActionCreator(currentText))
    }

    return (<MyPosts profilePage={props.profilePage} onPostChange={onPostChange} onAddPost={onAddPost} />)
}

export default MyPostsContainer;