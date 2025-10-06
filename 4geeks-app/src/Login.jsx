import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [resultado, setResultado] = useState("");
    const navigate = useNavigate();

    const loginUser = async () => {              
        const resp = await fetch(`http://127.0.0.1:5000/token`, { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }) 
        })
        
        if (!resp.ok) {
            setResultado("Error! No existe el Usuario ingresado!");
            limpiarCampos();
            return false;
        }

        const data = await resp.json()
        localStorage.setItem("jwt-token", data.token);
        navigate("/private", {replace:true});
    }

    const limpiarCampos = () => {
        setUsername("");
        setPassword("");
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src="/images/programador-trabajando-remoto.webp" alt="Programador" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <Link to={"/"}><p className="text-center my-5"><img src="/images/4Geeks-logo.png" alt="4Geeks" width={180} /></p></Link>
                    <h1 className="display-4 text-center">Login</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onInput={(e) => {setUsername(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onInput={(e) => {setPassword(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={loginUser}>Enviar</button>
                    </form>
                    {resultado ? <div className="alert alert-danger my-5" role="alert">{resultado}</div> : ""}
                    <p className="my-5">No tienes una cuenta? Puedes registrarte <Link to={"/signup"} className="fw-bold text-decoration-none">aquí</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login