import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";
import {PostDataType} from "../../../../redux/state";



type MyPostsPropsType = {
    posts: Array<PostDataType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

function MyPosts(props: MyPostsPropsType) {
    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    let addPost = () => {
        props.addPost()
        props.updateNewPostText("")
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;