import { useEffect, useState } from "react"

const SecondsCounter = ({segundos}) => {
    const [saludo, setSaludo] = useState("");

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    {/* {saludo ? <div className="alert alert-primary" role="alert">{saludo}</div> : ""} */}
                    <p>Segundos: <b>{segundos}</b></p>
                </div>
            </div>
        </div>
    )
}

export default SecondsCounter