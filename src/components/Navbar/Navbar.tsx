import React from 'react';
import s from './Navbar.module.css';

/* classes is object that created unique class-names for tags
let classes = {
    nav: 'nav_sadfi4r9343',
    item: 'item_df345345345'
}*/


function Navbar() {
    return (
        <nav className={s.nav}>
            <a><div className={s.item}>Profile</div></a>
            <a><div className={s.item}>Messages</div></a>
            <a><div className={s.item}>News</div></a>
            <a><div className={s.item}>Music</div></a>
            <a><div className={s.item}>Settings</div></a>
        </nav>
    )
}


export default Navbar;
