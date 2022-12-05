import React from 'react'
import Navbar2 from '../navbar-2/Navbar2'
import './UserTest5.css'
import ques from '../../assets/ques.svg'
import poweredby from '../../assets/logo.png'

function UserTest5() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="user-test-5-container">
            <Navbar2 />

            <div className="user-test-5-content">

                <div className="left-side-content">
                    <div className="back">
                        <svg width="33" height="33" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3081 22.1206C19.064 22.3646 19.064 22.7604 19.3081 23.0044C19.5521 23.2485 19.9479 23.2485 20.1919 23.0044L23.8125 19.3839C24.3007 18.8957 24.3007 18.1043 23.8125 17.6161L20.1919 13.9956C19.9479 13.7515 19.5521 13.7515 19.3081 13.9956C19.064 14.2396 19.064 14.6354 19.3081 14.8794L22.3036 17.875H13.5C13.1548 17.875 12.875 18.1548 12.875 18.5C12.875 18.8452 13.1548 19.125 13.5 19.125H22.3036L19.3081 22.1206Z" fill="white" />
                            <circle cx="18.5" cy="18.5" r="18" stroke="white" />
                        </svg>
                    </div>
                    <div className="ques">
                        {arr.map((num) => {
                            return (
                                <span className='ques-box'>{num}</span>
                            )
                        })}
                    </div>
                </div>

                <div className="right-side-content">
                    <div className="right-container">

                        <div className="header">
                            <div className="title">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="25" fill="#00C49A" fill-opacity="0.1" />
                                    <path d="M25 35C30.5228 35 35 30.5228 35 25C35 19.4772 30.5228 15 25 15C19.4772 15 15 19.4772 15 25C15 30.5228 19.4772 35 25 35Z" stroke="#00C49A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22.09 22C22.3251 21.3317 22.7891 20.7681 23.4 20.4091C24.0108 20.0501 24.7289 19.9189 25.4272 20.0387C26.1255 20.1585 26.7588 20.5215 27.2151 21.0635C27.6713 21.6055 27.9211 22.2915 27.92 23C27.92 25 24.92 26 24.92 26" stroke="#00C49A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25 30H25.01" stroke="#00C49A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <div className="group">
                                    <span>Q.2</span>
                                    <p>Max Score: 5</p>
                                </div>
                            </div>
                            <div className="btn-container">
                                <div className="back-button">
                                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="10.5" r="10" fill="white" />
                                        <path d="M15 5.45926L9 10.1123L15 14.7654" stroke="#827C7C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Back</span>
                                </div>

                                <div className="next-button">

                                    <span>Next</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="white" />
                                        <path d="M8 15.2661L14 10.613L8 5.95996" stroke="#00C49A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                            </div>
                        </div>

                        <div className="container">
                            <div className="ques-title">
                                <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="10" height="19" rx="2" fill="#FF6812" />
                                </svg>
                                <span>When an array is passed to a method, what does the method receive?</span>
                            </div>
                            <div className="options-box">
                                <div className="option-marked">
                                    <div className="option-content">
                                        <div className="marker">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#00C49A" />
                                                <circle cx="9.9997" cy="9.99969" r="3.65385" fill="white" />
                                            </svg>
                                        </div>
                                        <div className="question-detail">
                                            <img src={ques} alt="ques image" />
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis justo augue, vitae congue dolor condimentum eget. Vestibulum quis ligula in felis viverra pulvinar non vel lorem. Morbi lectus magna, consequat eget odio in, mattis condimentum eros.
                                            <br />
                                            <br />
                                            Nunc vel nulla tellus. Orci varius natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus</span>
                                        </div>
                                    </div>
                                    <div className="save">
                                        <span>Saved!</span>
                                    </div>
                                </div>

                                <div className="option">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0006 1.53813C6.57831 1.53813 3.49303 3.59981 2.1834 6.76162C0.873778 9.92343 1.59766 13.5626 4.01751 15.9826C6.15022 18.1442 9.27762 18.9972 12.2124 18.2178C15.1472 17.4385 17.4394 15.1462 18.2188 12.2116C18.9982 9.27664 18.1452 6.14939 15.9837 4.01673C14.4004 2.42455 12.2459 1.53212 10.0006 1.53813ZM10 0C15.5228 0 20 4.47716 20 10C20 15.5228 15.5229 20 10 20C4.47721 20 4.69501e-05 15.5228 0 10C0 4.47716 4.47721 0 10 0H10Z" fill="#A8AAAC" />
                                    </svg>
                                    <span>Answer 2 goes here. this is your answer</span>
                                </div>

                                <div className="option">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0006 1.53813C6.57831 1.53813 3.49303 3.59981 2.1834 6.76162C0.873778 9.92343 1.59766 13.5626 4.01751 15.9826C6.15022 18.1442 9.27762 18.9972 12.2124 18.2178C15.1472 17.4385 17.4394 15.1462 18.2188 12.2116C18.9982 9.27664 18.1452 6.14939 15.9837 4.01673C14.4004 2.42455 12.2459 1.53212 10.0006 1.53813ZM10 0C15.5228 0 20 4.47716 20 10C20 15.5228 15.5229 20 10 20C4.47721 20 4.69501e-05 15.5228 0 10C0 4.47716 4.47721 0 10 0H10Z" fill="#A8AAAC" />
                                    </svg>
                                    <span>Answer 3 goes here. this is your answer</span>
                                </div>

                                <div className="option">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0006 1.53813C6.57831 1.53813 3.49303 3.59981 2.1834 6.76162C0.873778 9.92343 1.59766 13.5626 4.01751 15.9826C6.15022 18.1442 9.27762 18.9972 12.2124 18.2178C15.1472 17.4385 17.4394 15.1462 18.2188 12.2116C18.9982 9.27664 18.1452 6.14939 15.9837 4.01673C14.4004 2.42455 12.2459 1.53212 10.0006 1.53813ZM10 0C15.5228 0 20 4.47716 20 10C20 15.5228 15.5229 20 10 20C4.47721 20 4.69501e-05 15.5228 0 10C0 4.47716 4.47721 0 10 0H10Z" fill="#A8AAAC" />
                                    </svg>
                                    <span>Answer 4 goes here. this is your answer</span>
                                </div>

                                <div className="reset">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3278_2262)">
                                            <path d="M17.25 3V7.5H12.75" stroke="#978989" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M0.75 15V10.5H5.25" stroke="#978989" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2.6325 6.75C3.01288 5.67509 3.65935 4.71406 4.5116 3.95657C5.36385 3.19908 6.3941 2.66983 7.50621 2.4182C8.61833 2.16657 9.77607 2.20076 10.8714 2.51758C11.9667 2.83441 12.9639 3.42354 13.77 4.23L17.25 7.5M0.75 10.5L4.23 13.77C5.03606 14.5765 6.03328 15.1656 7.12861 15.4824C8.22393 15.7992 9.38167 15.8334 10.4938 15.5818C11.6059 15.3302 12.6361 14.8009 13.4884 14.0434C14.3407 13.286 14.9871 12.3249 15.3675 11.25" stroke="#978989" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3278_2262">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Reset Answer</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <img src={poweredby} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTest5