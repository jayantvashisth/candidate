import React from 'react'
import { Link } from 'react-router-dom'
import './UserTest1.css'
import Navbar from '../navbar/Navbar'

function UserTest1() {
    return (
        <div className="user-test-1-container">
            <Navbar />
            <div className="user-test-1-content">
                <div className="content">
                    <div className="header">
                        <div className="title">
                            <span>Juniors (QE - TAE) Jun'22  Map Collections</span>
                        </div>
                        <div className="sub-title">
                            <span>By Company Name</span>
                            <span>Duration: 1.55 Hours</span>
                        </div>
                    </div>

                    <div className="user-test-1-body">
                        <div className="body-left">
                            <span> Test description</span>
                            <p>Test description

                                Case 1: Something here
                                Case 2: Something here

                                {/* <script type="module" src="new_tab_page.js"></script>
                                <link rel="stylesheet" href="chrome://resources/css/text_defaults_md.css">
                                    <link rel="stylesheet" href="shared_vars.css"> */}

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum hendrerit dui, nec semper lectus dignissim et. Aenean quis convallis ante. Etiam pretium ex pulvinar tortor molestie, ut lobortis arcu venenatis. Integer cursus cursus bibendum. Quisque pulvinar, nisi eget imperdiet iaculis,
                            </p>
                        </div>
                        <div className="body-right">
                            <div className="question">
                                <span>Total Questions (15)</span>
                                <div className="container">

                                    <div className="mcq">
                                        <span>10 MCQ</span>
                                    </div>
                                    <div className="programming">
                                        <span>5 Programming</span>
                                    </div>
                                </div>
                            </div>

                            <div className="instruction">
                                <span>General Instructions</span>
                                <p>
                                    <ul>
                                        <li>Test duration: 25 mins</li>
                                        <li>Ensure that your email ID is correct.</li>
                                        <li>Click Submit after you answer each question.</li>
                                        <li>Click Help in case of support</li>
                                        <li>Check questions properly</li>
                                    </ul>
                                </p>
                            </div>

                            <div className="imp">
                                <p><span>IMP</span>: Try EliteQA’s Practice Test <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3278_3062)">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#00C49A" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 4V6" stroke="#00C49A" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 8H6.00583" stroke="#00C49A" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3278_3062">
                                            <rect width="12" height="12" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="button">
                    <Link to="/test2">
                        <div className="btn">
                            <span>Next </span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="white" />
                                <path d="M8 15.2658L14 10.6128L8 5.9597" stroke="#00C49A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </Link>
                </div>

                <div className="footer">

                </div>
            </div>
        </div>
    )
}

export default UserTest1