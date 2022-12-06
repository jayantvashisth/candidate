import React from 'react'
import './TimeEnded.css'
import Navbar2 from '../navbar-2/Navbar2'

function TimeEnded() {
    return (
        <div className="time-ended-container">
            <Navbar2 />

            <div className="test-end-warning-2">
                <div className="test-end-warning-2-content">

                    <div className="body">
                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25.5" cy="25" r="25" fill="#FF6812" />
                            <path d="M26 36C31.5228 36 36 31.5228 36 26C36 20.4772 31.5228 16 26 16C20.4772 16 16 20.4772 16 26C16 31.5228 20.4772 36 26 36Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26 20V26L30 28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span>Snap! Time Has Ended!</span>
                        <p>Your test time has ended test will be auto Submitted in next 3 Seconds</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TimeEnded