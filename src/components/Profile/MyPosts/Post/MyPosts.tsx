import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";
import {MessageType} from "./Post";


function MyPosts() {

    const postData: Array<MessageType> = [
        {id: 1, message: "Hi! how are you?", likesCount: 12},
        {id: 1, message: "My first post", likesCount: 13},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>123</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData}/>
            </div>
        </div>
    )
}

export default MyPosts;