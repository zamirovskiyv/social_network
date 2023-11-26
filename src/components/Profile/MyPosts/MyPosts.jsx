import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {createRef} from "react";
import {addPostActiveCreator, onPostChangeActiveCreator} from "../../../state/state";


const MyPosts = (props) => {
    const newPostElement = createRef()

    const addPost = () => {
        props.dispatch(addPostActiveCreator())
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        props.dispatch(onPostChangeActiveCreator(text))
        // console.log('=== change post: ', text)
    }

    return (
        <div className={s.settingsMyPost}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.profilePage.newChangePost}
                              onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                new post
            </div>
            {props.profilePage.postData.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)}
        </div>
    )
}

export default MyPosts