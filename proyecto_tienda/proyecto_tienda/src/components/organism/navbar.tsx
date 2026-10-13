import { Link } from "react-router-dom";

function Navbar (){
    return (
        // 1. Añadimos py-3 para darle aire/relleno vertical al navbar y un sombreado sutil (shadow-sm)
        <nav className="navbar navbar-expand-lg shadow-sm py-3" style={{ backgroundColor: '#FFB6C1' }}>
            <div className="container">
                {/* 2. Un texto oscuro y en negrita para la marca resalta de inmediato */}
                <span className="navbar-brand text-dark fw-bold fs-4">
                    Mi tienda
                </span>

                <div className="navbar-nav">
                    <Link className="nav-link text-white" to="/">
                        Inicio
                    </Link>

                    <Link className="nav-link text-white" to="/productos">
                        Productos
                    </Link>

                    <Link className="nav-link text-white" to="/quienessomos">
                        Quienes somos
                    </Link>

                    <Link className="nav-link text-white" to="/contacto">
                        Contacto
                    </Link>

                    <Link className="nav-link text-white" to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar