import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img alt={'obrazek'}
                     src={'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'}/>
            </div>
            <div className={s.contentDescription}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo