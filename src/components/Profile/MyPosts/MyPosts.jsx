// import '../../../../css/App.css';
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {createRef} from "react";


const MyPosts = (props) => {
    const newPostElement = createRef()

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.settingsMyPost}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newChangePost}
                              onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                new post
            </div>
            {props.postData.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)}
        </div>
    )
}

export default MyPosts