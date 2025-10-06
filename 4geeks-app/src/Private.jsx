import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Private = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwt-token');        

        if (token) {
            (async () => {
                const resp = await fetch(`http://127.0.0.1:5000/protected`, { 
                    method: 'GET',
                    headers: { 
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
                    }
                })

                if (!resp.ok) {
                    navigate("/login", {replace:true});
                }

                const data = await resp.json();
                setName(data.name);
            })();
        } else {
            navigate("/login", {replace:true});
        }
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src="/images/programador-trabajando-remoto.webp" alt="Programador" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <Link to={"/"}><p className="text-center my-5"><img src="/images/4Geeks-logo.png" alt="4Geeks" width={180} /></p></Link>
                    <h1 className="display-4 text-center">Private</h1>
                    <h3>Hola, {name}!</h3>
                    <Link to={"/logout"} className="btn btn-primary">Cerrar Sesión</Link>
                </div>
            </div>
        </div>
    )
}

export default Private