import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import UserTest1 from './components/user-test-1/UserTest1';
import UserTest2popup from './components/user-test-2-popup/UserTest2Popup';
import UserTest2 from './components/user-test-2/UserTest2';
import UserTest3 from './components/user-test-3/UserTest3';
import UserTest4 from './components/user-test-4/UserTest4';
import UserTest5 from './components/user-test-5/UserTest5';
import TestLoading from './components/test-loading/TestLoading';
import TestEndWarning from './components/test-end-warning/TestEndWarning';
import TimeEnded from './components/time-ended/TimeEnded';
import TestSubmitted from './components/test-submitted/TestSubmitted';
import Test4popup from './components/user-test-4-sidebar/UserTest4Sidebar';
import UserTest4Sidebar from './components/user-test-4-sidebar/UserTest4Sidebar';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" exact element={<UserTest1 />} />
                    <Route path="/test2" exact element={<UserTest2 />} />
                    <Route path="/UserTest2popup" exact element={<UserTest2popup />} />
                    <Route path="/test3" exact element={<UserTest3 />} />
                    <Route path="/test4" exact element={<UserTest4 />} />
                    <Route path="/test5" exact element={<UserTest5 />} />
                    <Route path="/testloading" exact element={<TestLoading />} />
                    <Route path="/testendwarning" exact element={<TestEndWarning />} />
                    <Route path="/timeended" exact element={<TimeEnded />} />
                    <Route path="/testsubmitted" exact element={<TestSubmitted />} />
                    <Route path="/test4popup" exact element={<UserTest4Sidebar />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
