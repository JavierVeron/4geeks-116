import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import StarsWarsImages from "./StarWarsImages";

const People = ({resultAPI}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (resultAPI) {            
            setLoading(false);
            setItems(resultAPI.results);
        }
    }, [resultAPI])
    
    return (
        <div className="container my-5">
            <div className="row">
                <h1 className="text-dark">People</h1>
                {
                    loading ? <Loading /> : items.map(item => (
                        <div key={item.uid} className="col-md-3">
                            <div className="card mb-4">
                                <StarsWarsImages id={item.uid} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <Link to={"/people/" + item.uid} className="btn btn-primary">Ver Más</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default People