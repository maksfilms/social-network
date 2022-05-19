import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";
import {PostDataType} from "../../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostDataType>
}

function MyPosts(props: MyPostsPropsType) {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;