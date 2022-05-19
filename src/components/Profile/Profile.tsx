import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/Post/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";


type ProfilePropsType = {
    posts: Array<PostDataType>
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;