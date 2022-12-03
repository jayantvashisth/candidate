import React from 'react'
import './TestEndWarning.css'
import Navbar2 from '../navbar-2/Navbar2'

function TestEndWarning() {
    return (
        <div className="test-end-warning-container">
            <Navbar2 />

            <div className="test-end-warning-2">
                <div className="test-end-warning-2-content">
                    <div className="header">
                        <div className="title">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0032 13.6551L7.00642 8.65882L2.01082 13.6551C1.55102 14.1148 0.805358 14.1151 0.345266 13.6554C-0.114825 13.1957 -0.115113 12.4499 0.344547 11.99L5.34122 6.99369L0.344476 1.99628C-0.102534 1.534 -0.0962087 0.798602 0.358851 0.34437C0.813839 -0.110149 1.54922 -0.115324 2.01082 0.332296L7.00642 5.32856L12.0032 0.332296C12.4666 -0.103824 13.1925 -0.0928997 13.6426 0.35702C14.0927 0.806652 14.1041 1.53256 13.6684 1.99628L8.67162 6.99369L13.6684 11.99C14.1157 12.4519 14.1098 13.1873 13.6551 13.6419C13.2004 14.0967 12.4651 14.1024 12.0031 13.6551H12.0032Z" fill="#99B2C6" />
                            </svg>
                        </div>
                    </div>

                    <div className="body">
                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25.5" cy="25" r="25" fill="#FF6812" />
                            <path d="M31.2998 20.5333C32.3484 21.5823 33.0625 22.9187 33.3517 24.3735C33.6409 25.8283 33.4922 27.3362 32.9245 28.7065C32.3567 30.0768 31.3954 31.248 30.1621 32.072C28.9288 32.896 27.4789 33.3358 25.9956 33.3358C24.5124 33.3358 23.0624 32.896 21.8291 32.072C20.5958 31.248 19.6345 30.0768 19.0667 28.7065C18.499 27.3362 18.3503 25.8283 18.6395 24.3735C18.9287 22.9187 19.6428 21.5823 20.6914 20.5333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26 16.6667V25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Do You want To End This test?</span>
                    </div>

                    <div className="btn-container">
                        <button className="no">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="9" fill="white" />
                                <path d="M12.5 5.5L5.5 12.5" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.5 5.5L12.5 12.5" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>No</span>
                        </button>
                        <button className="yes">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="9" fill="white" />
                                <path d="M14 6L7.125 12.875L4 9.75" stroke="#F23E3E" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Yes</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestEndWarning