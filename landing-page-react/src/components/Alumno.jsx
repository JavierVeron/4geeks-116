const Alumno = ({name, lastname}) => {
    return (
        <div className="alert alert-primary" role="alert">
            <p>Alumno: <b>{name + " " + lastname}</b></p>
        </div>
    )
}

export default Alumno