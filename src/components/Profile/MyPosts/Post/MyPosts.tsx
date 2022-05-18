import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";


function MyPosts() {

    const postData = [
        {id: 1, message: "Hi! how are you?", likesCount: 12},
        {id: 2, message: "My first post", likesCount: 3},
        {id: 3, message: "My first post", likesCount: 1},
        {id: 4, message: "My first post", likesCount: 1},
        {id: 5, message: "My first post", likesCount: 13},
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
                <Post postData={postData[0].message} likesCount={postData[0].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;