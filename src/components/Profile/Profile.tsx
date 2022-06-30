import React from "react";
import MyPosts from "./MyPosts/Post/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
            />
        </div>
    )
}

export default Profile;