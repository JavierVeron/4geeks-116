import { useEffect, useState } from "react"
import CardUser from "./CardUser";

const Efectos = ({nombre}) => {
    const [items, setItems] = useState([]);
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [deshabilitar, setDeshabilitar] = useState(true);

    const incrementarContador1 = () => {
        setContador1(contador1 + 1)
    }

    const incrementarContador2 = () => {
        setContador2(contador2 + 1)
    }

    // IMPORTANTE: JAMAS CONSUMIR APIS POR FUERA DE UN USE EFFECTS
    /* fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(result => {
        console.log(result);
        setItems(result)
    }) */

    // Ciclo de Vida de un Componente
    // 1- Cuando se monta el Componente
    // 2- Cuando se actualiza el Componente
    // 3- Cuando se desmonta el Componente (cuando se quita o se elimina el Componente)
    console.log("#1 - Montaje del Componente");


    // Opción #1 => Array vacío o sin dependencias => Se va ejecutar 1 sola vez durante el montaje de nuestro montaje de nuestro Componente
    useEffect(() => {
        console.log("#2 - Actualización del Componente. Solo se dispara 1 sola vez cuando se monta el Componente");

        return () => {
            console.log("#3 - Desmontaje del Componente!"); // Solo se va a ejecutar cuando se desmonte el Componente
        }
    }, [])


    // Opción #2 => Array con Dependencias, va a estar pendiente de cualquier cambio de estados o props de nuestro Componente
    /* useEffect(() => {
        console.log("#2 - Actualización del Componente. Solo se a actualizar de los cambios que se produzca en el estado contador1");
    }, [contador1]) */

    /* useEffect(() => {
        console.log("Haz incrementado algunos de los Contadores!");
    }, [contador1, contador2])

    useEffect(() => {
        console.log("Has cambiado el Nombre!");
    }, [nombre]) */


    // Opción #3 => Sin array o sin dependencias, estoy a atento a todos los cambios de estados, props, cualquier mínima actualización
    /* useEffect(() => {
        console.log("#2 - Realizaste algún cambio en el Componente");
    }) */

    // Validación del Formulario
    useEffect(() => {
        if (email != "" && contrasena != "") {
            setDeshabilitar(false);
        }
    }, [email, contrasena])

    // Consumo de API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setItems(result)
        })
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                    <h1>Efectos o useEffects</h1>
                <div className="col-md-4">
                    <h2>Cambios de Estados</h2>
                    <p>Mi nombre es: <b>{nombre}</b></p>
                    <p>Contador #1: <b>{contador1}</b></p>
                    <p><button className="btn btn-primary" onClick={incrementarContador1}>Incrementar #1</button></p>
                    <p>Contador #2: <b>{contador2}</b></p>
                    <p><button className="btn btn-primary" onClick={incrementarContador2}>Incrementar #2</button></p>
                </div>
                <div className="col-md-4">
                    <h2>Validación de Formularios</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}  />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" value={contrasena} onChange={(e) => {setContrasena(e.target.value)}} />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={deshabilitar}>Enviar</button>
                    </form>
                </div>
                <div className="col-md-4">
                    <h2>Consumo de APIs</h2>
                    {/* <ul className="list-group">
                        {
                            items.map(item => (
                                <li key={item.id} className="list-group-item">{item.name} ({item.username})</li>
                            ))
                        }
                    </ul> */}
                    {
                        items.map(item => (
                            <CardUser user={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Efectos