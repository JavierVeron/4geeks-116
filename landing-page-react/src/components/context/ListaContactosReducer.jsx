const ListaContactosReducer = (state, action) => {
    switch(action.type) {
        case "FETCH_START": 
            return {...state, loading:true}
        case "FETCH_OK":
            return {...state, loading:false, contacts:action.payload}
        case "FETCH_ERROR":
            return {...state, loading:false, error:true}
        default:
            return state;
    }
}

export default ListaContactosReducer