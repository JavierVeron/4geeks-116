import Curso from "./Curso"

function Titulo(pep) {
    return (
        <>
            <h1 className="colorAzul">{pep.academia}</h1>
            <Curso nombre={"Joaquín"} apellido="Rivero" />
        </>
    )
}

export default Titulo