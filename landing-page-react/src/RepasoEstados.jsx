import { useState } from "react";

const RepasoEstados = () => {
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [visible, setVisible] = useState(true);

    const Incrementar = () => {
        setContador(contador + 1);
        console.log(contador);
    }

    const ocultarMensaje = () => {
        setVisible(false)
    }

    const mostrarMensaje = () => {
        setVisible(true)
    }
    
    const toggleMensaje = () => {
        setVisible(visible ? false : true);
    }

    return (
        <>
            {/* <div className="container my-5">
                <p>Contador: <b>{contador}</b></p>
                <p><button className="btn btn-primary" onClick={Incrementar}>Incrementar</button></p>
            </div> */}
            {/* <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" value={nombre} onChange={(event) => {setNombre(event.target.value); console.log(event.nativeEvent.data);}} />
                                <div className="fw-light">{nombre ? "Tu Nombre es: " + nombre : "Sin Definir"}</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" value={email} onInput={(event) => {setEmail(event.target.value)}} />
                                <div className="fw-light">{email ? "Tu Email es: " + email : "Sin Definir"}</div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div> */}
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <p className={`bg-secondary text-white p-5 ${visible ? "" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse, eligendi, enim ea placeat, eum nulla libero quae iure quisquam qui nesciunt. Odit possimus modi harum laboriosam accusamus explicabo voluptatum.</p>
                        <p><button className="btn btn-primary" onClick={toggleMensaje}>{visible ? "Ocultar" : "Mostrar"}</button></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RepasoEstados