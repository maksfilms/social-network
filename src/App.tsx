import React from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
        <div className="app-wrapper">
            <header className="header">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWXaDd7COVSlym_qmyXEr0nLSa34w31RN0g&usqp=CAU'/>
            </header>
            <nav className="nav">
                <a><div>Profile</div></a>
                <a><div>Messages</div></a>
                <a><div>News</div></a>
                <a><div>Music</div></a>
                <a><div>Settings</div></a>
            </nav>
            <div className="content">
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&usqp=CAU"/></div>
                <div> ava + description </div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>
                        <div>Post1</div>
                        <div>Post2</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
