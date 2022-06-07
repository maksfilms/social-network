import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/Post/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText}/>
        </div>
    )
}

export default Profile;