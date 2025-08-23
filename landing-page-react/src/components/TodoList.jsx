import { useState } from "react"

const TodoList = () => {
    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState("");

    const generarId = () => {
        let max = 0;

        tareas.forEach(item => {
            if (item.id > max) {
                max = item.id
            }
        })

        return (max + 1);
    }


    const agregarTarea = (e) => {
        setTarea(e.target.value);

        if (e.keyCode == 13) {
            // Agregando solo el nombre de una Tarea
            //setTareas([...tareas, tarea]);

            // Agregando una Tarea con ID
            const nuevaTarea = {id:generarId(), nombre:tarea};
            setTareas([...tareas, nuevaTarea]);

            // Limpio el campo Agregar Tarea
            setTarea("");
        }
    }

    const eliminarTarea = (id) => {
        // Utilizando posición
        //tareas.splice(id, 1);
        //setTareas([...tareas]);

        // Utilizando una propiedad id        
        const tareasActualizadas = tareas.filter(item => item.id != id);            
        setTareas(tareasActualizadas);
    }

    const toggleBotonCerrar = (e) => {
        if (e.target.childNodes.length > 1) {
            const botonCerrar = e.target.childNodes[2];        
    
            if (botonCerrar.className.includes("d-none")) {
                botonCerrar.classList.remove("d-none");
            } else {
                botonCerrar.classList.add("d-none");
            }
        }
    }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                    <h1>TodoList</h1>
                    <input type="text" className="form-control mb-3" value={tarea} onChange={(e) => {agregarTarea(e)}} onKeyDown={(e) => {agregarTarea(e)}} />
                    {tareas.length == 0 ? <div className="alert alert-danger" role="alert">No hay tareas, añadir tareas!</div> : <ul className="list-group">
                        {
                            tareas.map((item, index) => (
                                <li key={index} className="list-group-item" onMouseOver={(e) => {toggleBotonCerrar(e)}}>{item.nombre} <button type="button" className="btn-close d-none" aria-label="Close" onClick={() => {eliminarTarea(item.id)}}></button></li>
                            ))
                        }
                    </ul>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList