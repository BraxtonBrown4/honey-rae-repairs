import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar =() => {
    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="./Tickets">Tickets</Link>
            </li>
        </ul>
    )
}