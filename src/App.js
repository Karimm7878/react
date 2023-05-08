import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './contement/profile/ProfilePhoto'
import Fullname from './contement/profile/Fullname'
import Adress from './contement/profile/Adress'

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <Fullname/>
      <Adress/>
      
    </div>
  );
}

export default App;
