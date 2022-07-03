import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";
import {
    ProfilePageType,
    addPostActionCreator,
    updateNewPostTextActionCreator,
    ActionsTypes
} from "../../../../redux/state";


type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: MyPostsPropsType) {
    let postsElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message}
                                                              likesCount={p.likesCount}/>)


    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let currentText = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(currentText))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPostText}/>
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