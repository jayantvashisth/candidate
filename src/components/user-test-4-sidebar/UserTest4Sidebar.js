import React from 'react'
import './UserTest4Sidebar.css'
import Navbar2 from '../navbar-2/Navbar2'

function UserTest4Sidebar() {

    return (
        <div className="test-4-popup-container">
            <Navbar2 />
            <div className="test-4-popup">
                <div className="test-4-popup-left-container">
                    <div className="ques">
                        <span className="selected">1</span>
                        <p>When an array is passed, what does the method receive?</p>
                    </div>
                    <div className="ques">
                        <span className="not-selected">2</span>
                        <p>When an array is passed to a method, what does the method re.........</p>
                    </div>
                    <div className="ques">
                        <span className="not-selected">3</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli ?</p>
                    </div>
                    <div className="ques">
                        <span className="not-selected">4</span>
                        <p>Nulla aliquet, justo quis porttitor pellentesque, magna quam hendrerit?</p>
                    </div>
                    <div className="ques">
                        <span className="not-selected">5</span>
                        <p>Fusce eu nisi turpis. Etiam posuere est non vehicula placerat?</p>
                    </div>
                    <div className="ques">
                        <span className="not-selected">6</span>
                        <p>Suspendisse quis dui a ante facilisis malesuada et eu sapien?</p>
                    </div>
                    <div className="ques">
                        <span className="not-selected">7</span>
                        <p>Fusce eu nisi turpis. Etiam posuere est non vehicula placerat?</p>
                    </div>
                    <div className="ques">
                        <span className="not-selected">8</span>
                        <p>When an array is passed to a method, what does the method re.........</p>
                    </div>
                    <div className="ques">
                        <span className="not-selected">9</span>
                        <p>Suspendisse quis dui a ante facilisis malesuada et eu sapien?</p>
                    </div>
                    <div className="ques">
                        <span className="not-selected">10</span>
                        <p>Fusce eu nisi turpis. Etiam posuere est non vehicula placerat?</p>
                    </div>
                </div>

                <div className="test-4-popup-right-container">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18.5" cy="18.5" r="18.5" fill="white" />
                        <path d="M17.6919 14.8794C17.936 14.6354 17.936 14.2396 17.6919 13.9956C17.4479 13.7515 17.0521 13.7515 16.8081 13.9956L13.1875 17.6161C12.6993 18.1043 12.6993 18.8957 13.1875 19.3839L16.8081 23.0044C17.0521 23.2485 17.4479 23.2485 17.6919 23.0044C17.936 22.7604 17.936 22.3646 17.6919 22.1206L14.6964 19.125H23.5C23.8452 19.125 24.125 18.8452 24.125 18.5C24.125 18.1548 23.8452 17.875 23.5 17.875H14.6964L17.6919 14.8794Z" fill="#333333" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default UserTest4Sidebar