import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";
import {PostDataType} from "../../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostDataType>
    addPost: () => void
    updateNewPostText: (newText: string | undefined) => void
    newPostText: string | undefined
}

function MyPosts(props: MyPostsPropsType) {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>() // создаем ссылку пустую, присваиваем ее переменной newPostElement

    let addPost = () => {
        //берем значение у элемента по ссылке, проверяем есть ли current (элемент по ссылке) что бы TS не ругался
            props.addPost()
            props.updateNewPostText('')

    }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    {/*// присваиваем ссылку к тегу textarea*/}</div>
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