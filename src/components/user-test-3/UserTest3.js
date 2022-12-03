import React from 'react'
import './UserTest3.css'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

function UserTest3() {
    return (
        <div className="user-test-3-container">
            <Navbar />

            <div className="user-test-3">
                <div className="left-content">

                    <div className="left-body">

                        <div className="left-card">
                            <div className="img" style={{ width: "360px", height: "140px" }}></div>
                            <div className="card-right">
                                <span>Why Camera?</span>
                                <p>This test requires webcam access for proctoring. snapshot will be taken in every 30 secs.</p>
                            </div>
                        </div>

                        <div className="system-compatible">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#00C49A" />
                                <path d="M12.2419 7.60926V7.99956C12.2414 8.91441 11.9452 9.80457 11.3974 10.5373C10.8496 11.27 10.0797 11.8061 9.20238 12.0655C8.32508 12.3248 7.38743 12.2937 6.52928 11.9767C5.67113 11.6596 4.93845 11.0737 4.44052 10.3062C3.94259 9.53873 3.70608 8.63086 3.76628 7.718C3.82647 6.80513 4.18014 5.93618 4.77453 5.24074C5.36893 4.5453 6.1722 4.06063 7.06455 3.85902C7.95691 3.6574 8.89053 3.74964 9.72617 4.12198" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.242 4.60562L7.99953 8.85229L6.72681 7.57956" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>System Compatible for test</span>
                        </div>

                        <div className="instructions">
                            <span>Test Instructions</span>
                            <ol>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Cras dictum finibus commodo. Pellentesque sit amet est vel massa</li>
                                <li>Aenean a urna libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere</li>
                                <li> Morbi lobortis quam vitae purus porttitor, ac semper purus auctor</li>
                                <li>Praesent auctor, ante sed bibendum rutrum, odio dui varius ligula, feugiat suscipit lacus urna id </li>
                            </ol>
                        </div>
                    </div>


                </div>
                <div className="right-content">
                    <div className="ellipse">
                        <svg width="423" height="385" viewBox="0 0 423 385" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="63.5" cy="359.5" r="359.5" fill="white" fill-opacity="0.04" />
                        </svg>
                    </div>
                    <div className="ellipse-2">
                        <svg width="160" height="281" viewBox="0 0 160 281" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="359.5" cy="-78.5" r="359.5" fill="white" fill-opacity="0.04" />
                        </svg>
                    </div>

                    <div className="right-content">
                        <div className="big-box">
                            <span>Juniors (QE - TAE) Jun'22  Map Collections</span>
                            <p>8 Nov - 15 Nov</p>
                            <div className="time">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3278_2106)">
                                        <path d="M10.0001 18.3333C14.6025 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6025 1.66667 10.0001 1.66667C5.39771 1.66667 1.66675 5.39763 1.66675 10C1.66675 14.6024 5.39771 18.3333 10.0001 18.3333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 5V10L13.3333 11.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3278_2106">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>01:30:00</span>
                            </div>

                        </div>

                        <div className="body">
                            <div className="policy">
                                <input type="checkbox" />
                                <span>I agree to the Privacy Policy and Terms of Use of EliteQA.</span>
                            </div>
                            <div className="button-container">
                                <Link to="/test4">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="13" cy="13" r="13" fill="#FF6812" />
                                        <path d="M19.8934 12.3652V12.9994C19.8925 14.4861 19.4111 15.9326 18.521 17.1233C17.6309 18.314 16.3797 19.185 14.9541 19.6065C13.5285 20.028 12.0048 19.9774 10.6103 19.4622C9.21579 18.947 8.02519 17.9949 7.21606 16.7477C6.40692 15.5006 6.0226 14.0253 6.12041 12.5419C6.21823 11.0585 6.79294 9.64646 7.75883 8.51637C8.72472 7.38628 10.03 6.59869 11.4801 6.27106C12.9302 5.94344 14.4473 6.09333 15.8052 6.69839" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.8935 7.48429L12.9996 14.3851L10.9314 12.3169" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Start Test</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTest3    