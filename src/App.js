import './App.css';
import Navbar from './components/navbar/Navbar';
import UserTest1 from './components/user-test-1/UserTest1';
import UserTest2popup from './components/user-test-2-popup/UserTest2Popup';
import UserTest2 from './components/user-test-2/UserTest2';
import UserTest3 from './components/user-test-3/UserTest3';

function App() {
    return (
        <div className="App">
            {/* <UserTest1 /> */}
            {/* <UserTest2 /> */}
            {/* <UserTest2 /> */}
            <UserTest3 />
        </div>
    );
}

export default App;
