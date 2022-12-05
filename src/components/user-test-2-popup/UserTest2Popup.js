import React from 'react'
import Navbar from '../navbar/Navbar'
import './UserTest2Popup.css'

function UserTest2Popup() {
    return (
        <div className="user-test-2-popup-container">
           
            <div className="user-test-2">
                <div className="user-test-2-content">
                    <div className="header">
                        <div className="title">
                            <span>Help & Support</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0032 13.6551L7.00642 8.65882L2.01082 13.6551C1.55102 14.1148 0.805358 14.1151 0.345266 13.6554C-0.114825 13.1957 -0.115113 12.4499 0.344547 11.99L5.34122 6.99369L0.344476 1.99628C-0.102534 1.534 -0.0962087 0.798602 0.358851 0.34437C0.813839 -0.110149 1.54922 -0.115324 2.01082 0.332296L7.00642 5.32856L12.0032 0.332296C12.4666 -0.103824 13.1925 -0.0928997 13.6426 0.35702C14.0927 0.806652 14.1041 1.53256 13.6684 1.99628L8.67162 6.99369L13.6684 11.99C14.1157 12.4519 14.1098 13.1873 13.6551 13.6419C13.2004 14.0967 12.4651 14.1024 12.0031 13.6551H12.0032Z" fill="#99B2C6" />
                            </svg>
                        </div>
                        <div className="header-border"></div>
                    </div>

                    <div className="body">
                        <p>Please contact the test administrator. At Following Email</p>
                        <div className="email">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 4H21C22.1 4 23 4.9 23 6V18C23 19.1 22.1 20 21 20H5C3.9 20 3 19.1 3 18V6C3 4.9 3.9 4 5 4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23 6L13 13L3 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Username@website.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTest2Popup