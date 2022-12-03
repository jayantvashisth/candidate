import React from 'react'
import './TestLoading.css'
import loader from '../../assets/Rolling-1s-200px.gif'

function TestLoading() {
    return (
        <div className="loader-container">
            <h1>Eliteqa</h1>
            <img style={{ width: "48px", height: "48px" }} src={loader} alt="" />
        </div>
    )
}

export default TestLoading