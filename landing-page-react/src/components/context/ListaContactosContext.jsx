import { createContext, useReducer } from "react";
import ListaContactosReducer from "./ListaContactosReducer";

export const ListaContactosContext = createContext();

const initialState = {
    loading:false,
    contacts:[],
    error:false
}

const URL = "https://playground.4geeks.com/contact";
const USER = "javierveron";

const ListaContactosProvider = ({children}) => {
    const [state, dispatch] = useReducer(ListaContactosReducer, initialState);

    const leerContactos = async () => {
        dispatch({type:"FETCH_START"});

        try {
            const response = await fetch(URL + `/agendas/${USER}/contacts`);
            const data = await response.json();
            
            if (response.ok) {
                dispatch({type:"FETCH_OK", payload:data.contacts});
            } else {
                throw new Error("Error en la API!");
            }
        } catch (error) {
            dispatch({type:"FETCH_ERROR"});
        }
    }

    const agregarContacto = async () => {
        dispatch({type:"FETCH_START"});

        try {
            const response = await fetch(URL + `/agendas/${USER}/contacts`, {
                method:"POST",
                headers:{'Content-type': 'application/json'},
                body:JSON.stringify(action.payload)
            });
            const data = await response.json();
            dispatch({type:"FETCH_OK", payload:data.contacts});
        } catch (error) {
            dispatch({type:"FETCH_ERROR"});
        }
    }

    return <ListaContactosContext.Provider value={{state, leerContactos, agregarContacto}}>
        {children}
    </ListaContactosContext.Provider>
}

export default ListaContactosProvider