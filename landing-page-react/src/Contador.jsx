import { useState } from "react";

const Contador = () => {
    //let counter = 10; // es una variable
    const [counter, setCounter] = useState(0);    

    const incrementar = () => {
        setCounter(counter + 1);
    }

    const decrementar = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>Contador</h1>
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                <button type="button" className="btn btn-primary">{counter}</button>
                <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
            </div>
        </div>
    )
}

export default Contador