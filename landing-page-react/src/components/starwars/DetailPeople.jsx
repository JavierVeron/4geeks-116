import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Loading from "./Loading";
import StarsWarsImages from "./StarWarsImages";

const DetailPeople = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        if (id) {            
            fetch("https://www.swapi.tech/api/people/" + id)
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setItem(data.result);
            })
        }
    }, [id])

    return (
        <>
            {
                loading ? <Loading /> : <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4 offset-md-2">
                            <StarsWarsImages id={item.uid} />
                        </div>
                        <div className="col-md-4">
                            <h1>{item.properties.name}</h1>
                            <p>Género: <b>{item.properties.gender}</b></p>
                            <p>Piel: <b>{item.properties.skin_color}</b></p>
                            <p>Pelo: <b>{item.properties.hair_color}</b></p>
                            <p>Descripción: <b>{item.description}</b></p>
                            <p><Link to={"/"} className="btn btn-primary">Volver atrás</Link></p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DetailPeople