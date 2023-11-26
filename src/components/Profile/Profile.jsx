import '../../css/App.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     updateNewPostText={props.updateNewPostText}
                     dispatch = {props.dispatch}
            />
        </div>
    )
}

export default Profile