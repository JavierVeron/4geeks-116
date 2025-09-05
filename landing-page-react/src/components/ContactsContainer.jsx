import { useContext, useEffect } from "react"
import { ListaContactosContext } from "./context/ListaContactosContext"
import ContactCard from "./ContactCard";

const ContactsContainer = () => {
    const {state, leerContactos} = useContext(ListaContactosContext);

    useEffect(() => {
        leerContactos();
    }, [])

    if (state.error) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-danger text-center">Error en la API!</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    {state.loading ? <h1 className="text-success text-center">Cargando...</h1> : state.contacts.map(item => <ContactCard key={item.id} item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default ContactsContainer