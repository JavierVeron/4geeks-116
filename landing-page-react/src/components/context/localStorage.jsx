export const cargarLS = (initialState) => {    
    return JSON.parse(localStorage.getItem("cartContext")) || initialState;
}

export const guardarLS = (estado) => {
    localStorage.setItem("cartContext", JSON.stringify(estado));
}