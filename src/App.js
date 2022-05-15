import './App.css';
import {Header} from './components/header/Header';
import {Post} from './components/post/Post';
import Messengers from './components/messengers/Messengers';
import Profile from './components/profile/Profile';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='control-flex'>
        <Post />
      </div>
    </div>
  );
}

export default App;
