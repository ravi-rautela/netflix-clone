import React, { useEffect, useState } from 'react'
import '../CSS/Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false);
    const trasitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', trasitionNavBar);

        return () => window.removeEventListener('scroll', trasitionNavBar);
    }, [])

    return (
        <header className={`nav ${show &&"nav-black"}`}>
            <div className="nav-content">
                <div className="nav-logo">
                    <img src="../netflix.png" alt="logo" />
                </div>
                <div className="avtar">
                    <img src="../user-avtar.png" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Nav