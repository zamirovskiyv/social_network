import './css/App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'allContent'}>
                    <div className={'app-wrapper-content'}>
                        <Routes>
                            <Route path={'/profile'} element={<Profile profilePage={props.state.profilePage}
                                                                       dispatch={props.dispatch}
                            />}/>
                            <Route path={'/dialogs'} element={<Dialogs postName={props.state.messagesPage.postName}
                                                                       dispatch={props.dispatch}
                                                                       postMessages={props.state.messagesPage.postMessages}/>}/>
                            <Route path={'/news'} element={<News/>}/>

                            <Route path={'/settings'} element={<Settings/>}/>
                            <Route path={'/friends'} element={<Friends/>}/>
                            <Route path={'/music'} element={<Music/>}/>

                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
