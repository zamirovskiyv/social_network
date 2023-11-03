import '../../css/App.css';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.navContent}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to={"/profile"} className={({isActive}) => isActive ? s.activeLink : ""}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/dialogs"} className={({isActive}) => isActive ? s.activeLink : ""}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/news"} className={({isActive}) => isActive ? s.activeLink : ""}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/music"} className={({isActive}) => isActive ? s.activeLink : ""}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/settings"}
                             className={({isActive}) => isActive ? s.activeLink : ""}>Settings</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/friends"}
                             className={({isActive}) => isActive ? s.activeLink : ""}>Friends</NavLink>
                </div>

            </nav>
        </div>

    )
}

export default Navbar