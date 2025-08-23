import Alumno from "./Alumno";

const Curso = ({nombre, apellido}) => {
    let titulo = "Curso de Fullstack";

    return (
        <>
            <h2>{titulo}</h2>
            <Alumno name={nombre} lastname={apellido} />
        </>
    )
}

export default Curso