import "./navbar.css"

function Navbar(){
    return (
        <>  
            <nav className="navbar">
                <a href="#" className="name">Erick</a>
                <div className="">
                    <ul className="navbarList">
                        <li className="navbarListEl"><a href="#">About Me</a></li>
                        <li className="navbarListEl"><a href="#">Contact Me</a></li>
                        <li className="navbarListEl"><a href="#">Portfolio</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar