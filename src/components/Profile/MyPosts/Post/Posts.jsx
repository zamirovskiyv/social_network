// import '../../../../css/App.css';
import s from './Posts.module.css'
import avatar from './avatar.jpeg';

const Posts = (post) => {
    return (
        <div className={s.item}>
            <img
                src={avatar}
                alt={'avatar'}/>
            {post.message}
            <div>
                <span> {post.likesCount} </span>>
            </div>
        </div>
    )
}

export default Posts