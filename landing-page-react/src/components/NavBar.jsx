import { Link } from "react-router-dom"

const NavBar = () => {
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar