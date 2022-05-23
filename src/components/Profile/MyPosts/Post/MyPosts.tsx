import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";
import {PostDataType} from "../../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostDataType>
}

function MyPosts(props: MyPostsPropsType) {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    let newPostElement= React.createRef<HTMLTextAreaElement>() // создаем ссылку на элемент

    let onAddPost = () => {

        let text = newPostElement.current?.value //берем значение у элемента по ссылке, проверяем есть ли current (элемент по ссылке) что бы TS не ругался
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}>123</textarea>
                    {/*// присваиваем ссылку к тегу textarea*/}
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;