import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContextReducer } from "./context/CartContextReducer"

const NavBar = () => {
    const {state} = useContext(CartContextReducer);

    return (
        <div className="container my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Link to={"/"}>
                            <img src="https://www.nicepng.com/png/full/97-973016_download-logo-logo-el-corte-ingls.png" alt="El Corte Inglés" width={120} />
                        </Link>
                    </div>
                    <div className="col-md-10">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to={"/productos"} className="nav-link text-dark">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/productos/hombre"} className="nav-link text-dark">Hombre</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/productos/mujer"} className="nav-link text-dark">Mujer</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/carrito"} className="nav-link text-dark">Carrito <b>({state.total})</b></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar