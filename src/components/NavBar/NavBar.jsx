import "./NavBar.css"
import Logo from "../NavBar/triatlon.png"
import { CarritoWidget } from "../CartWidget/CarritoWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="nav__bar">
            <div className="menu__superior">
                <div className="logo">
                    <Link to='/'> <img src={Logo} alt="" /> </Link>
                </div>

                <Link to='/cart'><CarritoWidget /></Link>

            </div>

            <ul>
                <NavLink to="/categoria/Running"><a><li>Running</li></a></NavLink>
                <NavLink to="/categoria/Ciclismo"><a><li>Ciclismo</li></a></NavLink>
                <NavLink to="/categoria/Natación"><a><li>Natación</li></a></NavLink>
                <NavLink to="/categoria/Electrónica"><a><li>Electrónica</li></a></NavLink>  
            </ul >
        </nav >
    )
}

export default NavBar;