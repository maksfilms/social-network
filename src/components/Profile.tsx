import React from "react";
import s from './Profile.module.css';

function Profile() {
    return (
        <div className={s.content}>
            <div><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&usqp=CAU"/>
            </div>
            <div> ava + description</div>
            <div>
                My posts
                <div className={s.posts}>New post</div>
                <div className={s.item}>Post1</div>
                <div className={s.item}>Post2</div>
            </div>
        </div>
    )
}

export default Profile;