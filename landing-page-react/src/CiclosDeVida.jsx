import { useEffect, useState } from "react"

const CiclosDeVida = () => {
    const [counterMc, setCounterMc] = useState(1);
    const [counterBk, setCounterBk] = useState(1);

    const incrementarMc = () => {
        setCounterMc(counterMc + 1);
    }

    const decrementarMc = () => {
        setCounterMc(counterMc - 1);
    }

    const incrementarBk = () => {
        setCounterBk(counterBk + 1);
    }

    const decrementarBk = () => {
        setCounterBk(counterBk - 1);
    }

    console.log("#1 - Montaje del Componante");
    
    // Opción #1 => con dependencias vacías (solo se va a ejecutar 1 vez en el montaje del componante)
    useEffect(() => {
        console.log("#2 - Actualización del Componente");
        /* fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data)); */

        return () => { // función de CleanUp
            // El código de limpieza aquí se ejecuta en el desmontaje del componente
            console.log("#3 - Desmontaje del Componente");
        };
    }, [])

    // Opción #2 => indicamos que estado o prop vamos a estar atentos
    /* useEffect(() => {
        console.log("#2 - Actualización del Contador de McDonalds");
    }, [counterMc])

    useEffect(() => {
        console.log("#2 - Actualización del Contador de Burger King");
    }, [counterBk])

    useEffect(() => {
        console.log("#2 - Actualización del Contadores de McDondalds y Burger King");
    }, [counterMc, counterBk]) */

    // Opción #3 => sin dependencias (estamos atentos a cualquier cambio)
    /* useEffect(() => {
        console.log("#2 - Actualización del Contadores de McDondalds y Burger King");
    }); */

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>McDonalds:</h2>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary" onClick={decrementarMc}>-</button>
                        <button type="button" className="btn btn-primary">{counterMc}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementarMc}>+</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>Burger King:</h2>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary" onClick={decrementarBk}>-</button>
                        <button type="button" className="btn btn-primary">{counterBk}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementarBk}>+</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CiclosDeVida