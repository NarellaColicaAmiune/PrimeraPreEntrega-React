import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <p>La Perla</p>
            </div>

            <div className="navbar-links">
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Mermeladas Caseras</a>
                    </li>
                    <li>
                        <a href="#">Frutos Secos</a>
                    </li>
                    <li>
                        <a href="#">Aromáticas</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </div>

            <CartWidget/>
        </nav>
    )
}

export default Navbar