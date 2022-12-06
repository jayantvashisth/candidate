import React from 'react'
import './TestLoading.css'
import loader from '../../assets/Rolling-1s-200px.gif'
import logo from '../../assets/logo.png'

function TestLoading() {
    return (
        <div className="loader-container">
            <img src={logo} alt="logo" />
            <img style={{ width: "48px", height: "48px" }} src={loader} alt="" />
        </div>
    )
}

export default TestLoading