import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let textPost = "Hi everyone";
let textPost2 = "How are u?";
let textPost3 = "I'm fine!";

let likes = [3, 5, 55];



function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea>123</textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post text={textPost} like={likes[0]}/>
                <Post text={textPost2} like={likes[1]}/>
                <Post text={textPost3} like={likes[2]}/>
            </div>
        </div>
    )
}

export default MyPosts;