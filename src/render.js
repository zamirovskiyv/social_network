import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./state/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderThree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 updateNewPostText={updateNewPostText}
                 addPost={addPost}/>
        </React.StrictMode>
    );
}
