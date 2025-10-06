import { useState } from "react"
import { Link } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [resultado, setResultado] = useState("");

    const createUser = async () => {
        console.log(username, password);
        
        const resp = await fetch(`http://127.0.0.1:5000/users`, { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, lastname, username, password }) 
        })        

        if(!resp.ok) throw Error("There was a problem in the login request")

        if (resp.status === 401){
            throw("Invalid credentials")
        } else if(resp.status === 400){
            throw ("Invalid email or password format")
        }

        const data = await resp.json()

        if (data.estado == "ok") {
            setResultado(data.mensaje);
        }
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-4 offset-md-2">
                    <img src="/images/programador-trabajando-remoto.webp" alt="Programador" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <Link to={"/"}><p className="text-center my-5"><img src="/images/4Geeks-logo.png" alt="4Geeks" width={180} /></p></Link>
                    <h1 className="display-4 text-center">Sign Up</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onInput={(e) => {setName(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Lastname</label>
                            <input type="text" className="form-control" value={lastname} onInput={(e) => {setLastname(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onInput={(e) => {setUsername(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onInput={(e) => {setPassword(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={createUser}>Enviar</button>
                    </form>
                    {resultado ? <div className="alert alert-success my-5" role="alert">{resultado}</div> : ""}
                </div>
            </div>
        </div>
    )
}

export default SignUp