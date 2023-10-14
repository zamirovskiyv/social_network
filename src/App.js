
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import MyPost from "./components/MyPost";

const App = () => {
    return (
      <div className={'app-wrapper'}>
          <Header />
          <Nav />
          <MyPost />

      </div>
  )
}

export default App;
