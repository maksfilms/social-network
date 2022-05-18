import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";
import {postDataType} from "../../../../index";


type MyPostsPropsType = {
    posts: Array<postDataType>
}

function MyPosts(props: MyPostsPropsType) {
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
                <Post postData={props.posts[0].message} likesCount={props.posts[0].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;