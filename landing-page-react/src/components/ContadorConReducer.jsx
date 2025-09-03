import { useReducer, useState } from "react";

// Definir una reducer
const contadorReducer = (state, action) => {
    switch(action.type) {
        case "INCREMENTAR":
            return {...state, counter:(state.counter+1)}
        case "DECREMENTAR":
            return {...state, counter:(state.counter-1)}
        case "REINICIAR":
            return {...state, counter:0}
        default:
            return state
    }
}

const ContadorConReducer = () => {
    const [state, dispatch] = useReducer(contadorReducer, {counter:0});

    const incrementar = () => {
        dispatch({type:"INCREMENTAR"});
    }

    const decrementar = () => {
        dispatch({type:"DECREMENTAR"});
    }

    const reiniciar = () => {
        dispatch({type:"REINICIAR"});
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Contador</h1>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-primary">{state.counter}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                        <button type="button" className="btn btn-danger" onClick={reiniciar}>Reiniciar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContadorConReducer