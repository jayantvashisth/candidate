import React from 'react'
import './TestSubmitted.css'
import logo from '../../assets/logo.png'

function TestSubmitted() {
    return (
        <div className="test-submitted-container">
            <div className="test-submitted-content">
                <div className="video"></div>
                <span>Test Submitted!</span>
                <p>Thank You for using EliteQA. Wisihing you Great future</p>
            </div>
            <div className="test-end-footer">
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default TestSubmitted