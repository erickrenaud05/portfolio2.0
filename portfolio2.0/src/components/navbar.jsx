import "./navbar.css"
import { useState } from 'react'


function Navbar({onClick}){
    return (
        <>  
            <nav className="navbar">
                <a href="#" className="name">Erick</a>
                <ul className="navbarList">
                    <li className="navbarListEl"><button id="1" onClick={onClick}>About Me</button></li>
                    <li className="navbarListEl"><button id="2" onClick={onClick}>Contact Me</button></li>
                    <li className="navbarListEl"><button id="3" onClick={onClick}>Portfolio</button></li>
                    <li className="navbarListEl"><button id="4" onClick={onClick}>Resume</button></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;